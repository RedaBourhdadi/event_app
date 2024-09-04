"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/utils/database";
import Event from "@/models/event";
import User from "@/models/user";
import Category from "@/models/category";
import { handleError } from "@/lib/utils";
import { Connection } from "jsforce";
import { config } from "dotenv";

import {
  CreateEventParams,
  UpdateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  GetEventsByUserParams,
  GetRelatedEventsByCategoryParams,
} from "@/types";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populateEvent = (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id username",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
    // check if user already exists
    const categoryinfo = await Category.findOne({ _id: event.categoryId });
    const userExists = await User.findOne({ _id: userId });

    await connectToDB();

    console.log("connected to db");

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    console.log("newEvent", newEvent);
    console.log("newEvent", newEvent._id.toString());

    const conn = new Connection({
      loginUrl: process.env.SALESFORCE_LOGIN_URL,
    });
    await conn.login(
      process.env.SALESFORCE_USERNAME,
      process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN!
    );
    const EqueryResult = await conn
      .sobject("Users__c")
      .findOne({ mongodb_id__c: userExists._id });

    const result = await conn.sobject("Custom__c").create({
      email__c: userExists.email,
      organizer__c: EqueryResult.Id,
      // Name: profile.name.replace(" ", "").toLowerCase(),
      Name: event.title,
      Description__c: event.description,
      Location__c: event.location,
      image_Event__c: event.imageUrl,
      Event_Start_Date__c: event.startDateTime,
      Event_End_Date__c: event.endDateTime,
      category__c: categoryinfo.name,
      Price__c: event.price,
      isFree__c: event.isFree,
      Event_url__c: event.url,
      mongodb_id__c: newEvent._id.toString(),
    });
    console.log("newEvent sf", result);

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
}

// GET ONE EVENT BY ID
export async function getEventById(eventId: string) {
  try {
    await connectToDB();

    const event = await populateEvent(Event.findById(eventId));

    if (!event) throw new Error("Event not found");

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateEvent({ userId, event, path }: UpdateEventParams) {
  try {
    const categoryinfo = await Category.findOne({ _id: event.categoryId });

    console.log("event", event);
    console.log("userId", userId);
    console.log("path", path);
    await connectToDB();

    const eventToUpdate = await Event.findById(event._id);
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error("Unauthorized or event not found");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      event._id,
      { ...event, category: event.categoryId },
      { new: true }
    );
    revalidatePath(path);
    const conn = new Connection({
      loginUrl: process.env.SALESFORCE_LOGIN_URL,
    });
    await conn.login(
      process.env.SALESFORCE_USERNAME,
      process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN!
    );

    // Query the record by email
    const queryResult = await conn
      .sobject("Custom__c")
      .findOne({ mongodb_id__c: event._id });

    // Update the record
    const result = await conn.sobject("Custom__c").update({
      Id: queryResult.Id,
      Name: event.title,
      Description__c: event.description,
      Location__c: event.location,
      image_Event__c: event.imageUrl,
      Event_Start_Date__c: event.startDateTime,
      Event_End_Date__c: event.endDateTime,
      category__c: categoryinfo.name,
      Price__c: event.price,
      isFree__c: event.isFree,
      Event_url__c: event.url,
    });

    return JSON.parse(JSON.stringify(updatedEvent));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteEvent({ eventId, path }: DeleteEventParams) {
  try {
    await connectToDB();

    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (deletedEvent) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

// GET ALL EVENTS
export async function getAllEvents({
  query,
  limit = 6,
  page,
  category,
}: GetAllEventsParams) {
  try {
    await connectToDB();
    console.log("connected to db 1");

    // const response = await fetch(
    //   "http://localhost:3000/lib/actions/salesforce",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(
    //       "SELECT Name , Description__c , Event_Date__c FROM Custom__c"
    //     ),
    //   }
    // );

    // const data = await response.json();

    console.log("connected to db");
    // console.log(data);

    const titleCondition = query
      ? { title: { $regex: query, $options: "i" } }
      : {};
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;
    const conditions = {
      $and: [
        titleCondition,
        categoryCondition ? { category: categoryCondition._id } : {},
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateEvent(eventsQuery);
    const eventsCount = await Event.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// GET EVENTS BY ORGANIZER
export async function getEventsByUser({
  userId,
  limit = 6,
  page,
}: GetEventsByUserParams) {
  try {
    await connectToDB();

    const conditions = { organizer: userId };
    const skipAmount = (page - 1) * limit;

    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateEvent(eventsQuery);
    const eventsCount = await Event.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedEventsByCategory({
  categoryId,
  eventId,
  limit = 3,
  page = 1,
}: GetRelatedEventsByCategoryParams) {
  try {
    await connectToDB();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = {
      $and: [{ category: categoryId }, { _id: { $ne: eventId } }],
    };

    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const events = await populateEvent(eventsQuery);
    const eventsCount = await Event.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
