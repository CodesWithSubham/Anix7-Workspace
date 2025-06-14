import mongoose from "mongoose";

const uri = process.env.MONGODB_URI_USERS;
if (!uri) throw new Error("❌ MONGODB_URI_USERS not found");

let cached = global._userDb || { conn: null, promise: null };

export default async function connectToUserDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("🔄 Connecting to User DB...");
    cached.promise = mongoose.createConnection(uri, {
      dbName: "usersDB",
      bufferCommands: false,
    }).asPromise().then((conn) => {
      console.log("✅ Connected to User DB");
      return conn;
    });
  }

  cached.conn = await cached.promise;
  global._userDb = cached;
  return cached.conn;
}
