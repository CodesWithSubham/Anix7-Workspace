// models/ShortUrl.js
import mongoose, { model } from "mongoose";

const shortUrlSchema = new mongoose.Schema(
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
const ShortUrl = mongoose.models?.ShortUrl || model("ShortUrl", shortUrlSchema);
export default ShortUrl;
