"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/utils/database";
import Rating from "@/models/rating";
import User from "@/models/user";
import { handleError } from "@/lib/utils";
import { Connection } from "jsforce";
import { config } from "dotenv";

import { CreateEventRatingParams } from "@/types";

// CREATE
export async function createRating({
  userId,
  eventId,
  rating,
  organizer,
}: CreateEventRatingParams) {
  try {
    // check if user already exists
    // const categoryinfo = await Category.findOne({ _id: event.categoryId });
    // const userExists = await User.findOne({ _id: userId });

    await connectToDB();

    console.log("connected to db");

    // if (!organizer) throw new Error("Organizer not found");

    const newRating = await Rating.create({
      userId: userId,
      eventId: eventId,
      rating: rating,
      organizer: organizer,
    });

    console.log("newEvent", newRating);

    const conn = new Connection({
      loginUrl: process.env.SALESFORCE_LOGIN_URL,
    });
    await conn.login(
      process.env.SALESFORCE_USERNAME,
      process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN!
    );
    const UserResult = await conn
      .sobject("Users__c")
      .findOne({ mongodb_id__c: userId });

    const OrganizerResult = await conn
      .sobject("Users__c")
      .findOne({ mongodb_id__c: organizer });
    const EventResult = await conn
      .sobject("Custom__c")
      .findOne({ mongodb_id__c: eventId });

    const result = await conn.sobject("Feedback__c").create({
      Rating__c: rating,
      bayer__c: UserResult.Id,
      organizer__c: OrganizerResult.Id,
      event__c: EventResult.Id,
      mongodb_id__c: newRating._id.toString(),
    });

    return JSON.parse(JSON.stringify(newRating));
  } catch (error) {
    handleError(error);
  }
}

export async function checkRatingExists(eventId: string, userId: string) {
  try {
    await connectToDB();

    const rating = await Rating.findOne({ eventId: eventId, userId: userId });

    if (!rating) return null;
    if (rating) return JSON.parse(JSON.stringify(rating));
  } catch (error) {
    handleError(error);
  }
}

// GET ONE rating BY organizer
export async function getRatingByOrganizer(Id: string) {
  try {
    await connectToDB();

    const rating = await Rating.find({ organizer: Id });

    if (!rating) return null;

    if (rating)
      return rating.map((rating) => JSON.parse(JSON.stringify(rating.rating)));
  } catch (error) {
    handleError(error);
  }
}
