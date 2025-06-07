// lib/db.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables.");
}

// Global cache to prevent multiple connections in serverless environments
let cached = global.mongoose || { conn: null, promise: null };

const connectToDatabase = async () => {
  if (cached.conn) {
    // console.log("✅ Using existing MongoDB connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB...");
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: MONGODB_NAME, // The name of the database we are connecting to
        maxPoolSize: 10, // Increase to allow more concurrent connections
        serverSelectionTimeoutMS: 8000, // Timeout if server is unresponsive
        socketTimeoutMS: 45000, // Timeout for socket inactivity
        retryWrites: true, // Ensures writes are retried if they fail
        waitQueueTimeoutMS: 5000, // Prevents long waiting times
        bufferCommands: false, // ❗ Optional: Fail fast if DB isn't connected
      })
      .then((mongoose) => {
        console.log("✅ Connected to MongoDB!");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        throw new Error("MongoDB connection failed.");
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// Cache connection globally to prevent multiple reconnections
global.mongoose = cached;

export default connectToDatabase;
