// app\api\tools\ImageIndex\upload\route.js

import { auth } from "@/auth";
import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const session = await auth()

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname /*, clientPayload*/ ) => {
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.

        if (!session) {
          throw new Error("Unauthorized");
        }

        return {
          allowedContentTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/apng", "image/tiff"],
          maximumSizeInBytes: 10 * 1024 * 1024, // 10MB
          // Optionally include user-specific data in the token payload.
          // tokenPayload: JSON.stringify(clientPayload),

        };
      },
      // onUploadCompleted: async ({ blob, tokenPayload }) => {
      //   // Get notified of client upload completion
      //   // ⚠️ This will not work on `localhost` websites,
      //   // Use ngrok or similar to get the full upload flow

      //   // console.log('blob upload completed', blob, tokenPayload);

      //   try {
      //     // Run any logic after the file upload completed
      //     // const { userId } = JSON.parse(tokenPayload);
      //     // await db.update({ avatar: blob.url, userId });

      //     additionalResults = {
      //       uploadedBlobUrl: blob.url,
      //       uploadedAt: new Date().toISOString(),
      //       // ...add any other fields as needed
      //     };

      //   } catch (error) {
      //     throw new Error('Could not update user');
      //   }
      // },
    });

    return NextResponse.json(jsonResponse);

  } catch (error) {
    // If the error is due to unauthorized access, return a 401 status.
    if (error.message === "Unauthorized") {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    console.error('Error during blob upload:', error);
    // For any other errors, return a 500 status.
    return NextResponse.json({ error: error.message }, { status: 500 });

  }
}
