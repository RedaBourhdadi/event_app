// import mongoose from "mongoose";

// let isConnected = false; // track the connection

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "mydatabase",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;

//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };
// convert this let cached = (global as any).mongoose || { conn: null, promise: null }; to js

export const connectToDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "mydatabase",
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
