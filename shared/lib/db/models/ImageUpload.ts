import { Schema, Model, Document, Connection } from "mongoose";
import connectToImageUploadDb from "../connections/imageUploadDb";

export interface IImageUpload extends Document {
  alias: string;
  deleteHash: string;
  extension: string;
  uploadedBy: number; // References User.userId
  adsLabel: 0 | 1 | 2 | 3;
  expiredAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const imageUploadSchema = new Schema<IImageUpload>(
  {
    alias: { type: String, required: true, unique: true },
    deleteHash: { type: String, required: true },
    extension: { type: String, default: "jpg" },
    uploadedBy: { type: Number, required: true, ref: "User" },
    adsLabel: { type: Number, enum: [0, 1, 2, 3], default: 1 },
    expiredAt: { type: Date, default: null },
  },
  { timestamps: true }
);

let cachedModel: Model<IImageUpload> | null = null;

export default async function getImageUploadModel(): Promise<
  Model<IImageUpload>
> {
  const conn: Connection = await connectToImageUploadDb();
  if (!cachedModel) {
    cachedModel =
      conn.models.ImageUpload ||
      conn.model<IImageUpload>("ImageUpload", imageUploadSchema);
  }
  return cachedModel;
}
