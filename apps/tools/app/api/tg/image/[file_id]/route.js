// app/api/tg/image/[file_id]/route.js

import { NextResponse } from 'next/server';
//import fetch from 'node-fetch'; // Import fetch to fetch files from Telegram
import { bot } from "@shared/lib/tgBot";

export async function GET(req, { params }) {
  const { file_id } = await params;

  try {
    // Get file info from Telegram API
    const file = await bot("getFile", {file_id});
    const fileUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${file.file_path}`;

    // Fetch the file from Telegram
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch file from Telegram: ${response.statusText}`);
    }

    const fileBuffer = await response.arrayBuffer();

    // Set headers for a 6-month cache and return the image
    const headers = new Headers({
      'Content-Type': 'image/jpeg', // Set appropriate content type
      'Cache-Control': 'public, max-age=15778800', // 6 months in seconds
    });

    return new Response(fileBuffer, { headers });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
