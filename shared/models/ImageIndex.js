// models/ImageIndex.js
import mongoose, { model } from "mongoose";

const ImageIndexSchema = new mongoose.Schema(
  {
    alias: { type: String, required: true, unique: true },
    deleteHash: { type: String, required: true },
    extension: {type: String, default: 'jpg'},
    uploadedBy: { type: Number, required: true, ref: 'User' }, // References User's userId
    adsLabel: { type: Number, enum: [0, 1, 2, 3], default: 1 }, // Ads label: 0, 1, 2, or 3
    expiredAt: { type: Date, default: null }, // Default to null if not provided
  },
  { timestamps: true } // Automatically handles createdAt and updatedAt
);

// Using mongoose models and checking for existing models to prevent overwriting
const ImageIndex = mongoose.models?.ImageIndex || model("ImageIndex", ImageIndexSchema);
export default ImageIndex;
