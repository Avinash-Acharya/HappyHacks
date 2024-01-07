"use server";

import mongoose from "mongoose";

export default async function connect() {
  try {
    const dburl = process.env.MONGODB_URL ?? "";
    await mongoose.connect(dburl);
    console.log("DB connected");
  } catch (error) {
    throw error;
  }
}
// import { MongoMemoryServer } from "mongodb-memory-server";

// const connection = {};
// export const connect = async () => {
//   try {
//     if (connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const mongod = await MongoMemoryServer.create();
//     const uri = mongod.getUri();
//     const db = await mongoose.connect(uri, { dbName: "tempDatabsae" });
//     connection.isConnected = db.connections[0].readyState;
//     console.log(`MongoDB connected to ${uri}`);
//   } catch (error) {
//     console.log(error);
//     throw new error();
//   }
// };
