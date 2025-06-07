// lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Add MongoDB URI to your .env.local file.");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    // client = new MongoClient(uri, options);
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // client = new MongoClient(uri, options);
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// export const runtime = "nodejs"; // Ensure it's running in Node.js

export { client };
export default clientPromise

