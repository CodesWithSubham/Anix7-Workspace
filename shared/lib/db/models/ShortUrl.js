// models/ShortUrl.js
import { Schema } from "mongoose";
import connectToShortUrlDb from "../connections/shortUrlDb";

const shortUrlSchema = new Schema(
  {
    alias: { type: String, required: true, minlength: 6, maxlength: 6, unique: true }, // Alias of 6 characters
    longUrl: { type: String, required: true },
    uploadedBy: { type: Number, required: true, ref: 'User' }, // References User's userId
    adsLabel: { type: Number, enum: [0, 1, 2, 3], default: 1 }, // Ads label: 0, 1, 2, or 3
    expiredAt: { type: Date, default: null }, // Default to null if not provided
  },
  { timestamps: true } // Automatically handles createdAt and updatedAt
);

// Using mongoose models and checking for existing models to prevent overwriting
let ShortUrl;

export default async function getShortUrlModel() {
  const conn = await connectToShortUrlDb();
  if (!ShortUrl) {
    ShortUrl = conn.models.ShortUrl || conn.model("ShortUrl", shortUrlSchema);
  }
  return ShortUrl;
}