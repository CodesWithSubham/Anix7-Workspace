// /app/api/task/route.js

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import clientPromise from "@shared/lib/mongodb";

export async function GET(req) {
  try {
      // Get the JWT token from the cookies
    const token = req.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    // Verify the token
    let decodedPayload;
    try {
      // Verify the token using the Web Crypto API (via jose)
      const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Encode the secret
      const { payload } = await jwtVerify(token, secret); // Destructure payload from jwtVerify
      decodedPayload = payload; // Assign payload to decodedPayload
    } catch (err) {
      console.error("JWT verification failed:", err);
      return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 401 });
    }

    const { telegramId } = decodedPayload;

    if (!telegramId) {
      return NextResponse.json({ success: false, message: "Invalid token payload" }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('tasks'); // collection name

    const data = await collection.find({}).toArray(); // Fetch all documents
    // Return the balance
    return NextResponse.json({ success: true, tasks: data || {} }, { status: 200 });
    
  } catch (error) {
    console.error("Error in task API:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
