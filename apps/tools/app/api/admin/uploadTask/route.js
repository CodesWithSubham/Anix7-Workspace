// /app/api/uploadTask/route.js

import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import clientPromise from "@shared/lib/mongodb";
import { v4 as uuidv4 } from "uuid";
import { bot } from "@shared/lib/tgBot";

export async function POST(request) {
  try {
    // Verify the JWT
    const token = request.cookies.get("adminToken")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
      const { payload } = await jwtVerify(token, secret);
      if (payload.role !== "admin") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch (error) {
      console.log("Error" + error);
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 },
      );
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get("image");
    const title = formData.get("title");
    const taskCat = formData.get("taskCat");
    const desc = formData.get("desc");
    const url = formData.get("url");

    if (!file || !title || !taskCat || !desc || !url) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Handle image upload
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    // Send the photo to the Telegram channel

    // Define file options
    const fileOptions = {
      filename: file.name, // filename
      contentType: file.type || "application/octet-stream",
    };

    

    // Send the photo to Telegram
    /*const msg = await bot.sendPhoto(
      process.env.TELEGRAM_STORAGE_CHANNEL,
     // { source: fileBuffer },
      fileBuffer, 
      { caption: `Uploaded file: ${file.name}` },
      //fileOptions,
    );*/

    const res = await bot("sendPhoto", {
      chat_id: process.env.TELEGRAM_STORAGE_CHANNEL,
      caption: `Uploaded file: ${file.name}`,
      photo: file,  // Dynamically set the file field (photo, video, etc.)
    });
    
    const fileId = res?.photo?.at(-1)?.file_id;

    const imageUrl = `/api/tg/image/${fileId}`;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    const tasksCollection = db.collection("tasks");

    // Save task data to MongoDB
    const taskData = {
      id: uuidv4(), // Generate a unique task ID
      title,
      taskCat,
      desc,
      url,
      image: imageUrl,
      createdAt: new Date(),
    };
    const result = await tasksCollection.insertOne(taskData);

    if (!result.acknowledged) {
      return NextResponse.json(
        { error: "Failed to save task to database." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Task uploaded successfully.",
      taskData,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process the request." },
      { status: 500 },
    );
  }
}
