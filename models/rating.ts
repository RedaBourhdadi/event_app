import { Document, Schema, model, models } from "mongoose";

export interface IRating extends Document {
  _id: string;
  eventId: string;
  rating: number;
  createdAt: Date;
  userId: { _id: string; username: string };
  organizer: { _id: string; username: string };
}

const RatingSchema = new Schema({
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  eventId: { type: Schema.Types.ObjectId, ref: "event" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  organizer: { type: Schema.Types.ObjectId, ref: "organizer" },
});

const Rating = models.Rating || model("Rating", RatingSchema);

export default Rating;
