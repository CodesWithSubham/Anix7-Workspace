// /app/(userArea)/image-uploading/page.js
"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { upload } from "@vercel/blob/client";
import { Button } from "@shared/components/ui/Button";
import { CopyInput } from "@shared/components/ui/Input";
import { ImageSvg } from "@shared/components/svg/ImageSvg";
import { UploadSvg } from "@shared/components/svg/UploadSvg";
import { DocumentSvg } from "@shared/components/svg/DocumentSvg";

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedURL, setUploadedURL] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadedURL(null);

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/apng",
      "image/tiff",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, JPEG, PNG, GIF, APNG, TIFF allowed");
      setImage(null);
      setPreview(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB");
      setImage(null);
      setPreview(null);
      return;
    }

    setError("");
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      setError("No image selected");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const id = window.crypto.randomUUID();

      const newBlob = await upload(image.name, image, {
        access: "public",
        handleUploadUrl: "/api/tools/ImageIndex/upload/blob",
        clientPayload: { id },
      });

      const res = await fetch("/api/tools/ImageIndex/upload/byBlob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: newBlob.url, name: image.name }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.error || "Upload failed");
        return;
      }

      console.log(newBlob);
      setUploadedURL(data.imageUrl);
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Image Uploader</h1>

      {/* {!uploading && ( */}
      {/* <> */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image"
        disabled={uploading}
      />
      <Button
        htmlFor="image"
        as="label"
        disabled={uploading}
        svg={<ImageSvg />}
      >
        {uploadedURL ? "Upload Another" : image ? "Change" : "Choose"} Image
      </Button>
      {/* </> */}
      {/* )} */}

      {error && <p className="text-red-500">{error}</p>}

      {preview && (
        <div className="mt-4">
          <Image
            src={preview}
            width={320}
            height={320}
            alt="Uploaded"
            className="w-11/12 max-w-lg mx-auto rounded-sm shadow-sm"
          />
          {uploadedURL && (
            <CopyInput value={uploadedURL} className="w-5/6 max-w-lg mx-auto" />
          )}
        </div>
      )}

      {!uploadedURL && image && !error && (
        <Button
          onClick={handleUpload}
          className="flex flex-col justify-center items-center gap-2 mt-4 "
          disabled={uploading}
          loading={uploading}
          loadingText="Uploading..."
          svg={<UploadSvg />}
        >
          Upload Image
        </Button>
      )}

      <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-5 " />
      <Button href="/image-uploading/my-uploads" svg={<DocumentSvg />}>
        My Uploads
      </Button>
    </div>
  );
}

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Remove "data:image/png;base64,"
    reader.onerror = (error) => reject(error);
  });
};
