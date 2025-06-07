"use client";
import { useState, useEffect } from "react";

export default function FileSizeReducer() {
  // const [image, setImage] = useState(null);
  // const [originalImageUrl, setOriginalImageUrl] = useState(null);
  // const [originalSize, setOriginalSize] = useState(null);
  // const [reducedImage, setReducedImage] = useState(null);
  // const [reducedSize, setReducedSize] = useState(null);
  // const [quality, setQuality] = useState(0.8);
  // const [imageResizer, setImageResizer] = useState(null);

  // // Dynamically import browser-image-resizer (client-side only)
  // useEffect(() => {
  //   import("browser-image-resizer").then((module) => {
  //     setImageResizer(() => module.readAndCompressImage);
  //   });
  // }, []);

  // // Handle file upload and show original image preview and size
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   setImage(file);
  //   setOriginalSize(file.size);
  //   const url = URL.createObjectURL(file);
  //   setOriginalImageUrl(url);
  //   // Reset previous reduced image
  //   setReducedImage(null);
  //   setReducedSize(null);
  // };

  // // Helper: format bytes to human-readable string
  // const formatBytes = (bytes) => {
  //   if (bytes === 0) return "0 Bytes";
  //   const k = 1024;
  //   const sizes = ["Bytes", "KB", "MB", "GB"];
  //   const i = Math.floor(Math.log(bytes) / Math.log(k));
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  // };

  // // Process image reduction while preserving transparency if available.
  // const handleReduce = async () => {
  //   if (!image || !imageResizer) return;

  //   // Determine the output mime type based on the original file.
  //   // If the image is a PNG (or supports transparency), output as PNG.
  //   const outputMimeType = image.type === "image/png" ? "image/png" : "image/jpeg";
  //   const fileExtension = outputMimeType === "image/png" ? "png" : "jpg";

  //   // Use Infinity for maxWidth/maxHeight so only quality affects file size
  //   const config = {
  //     quality: parseFloat(quality),
  //     maxWidth: Infinity,
  //     maxHeight: Infinity,
  //     autoRotate: true,
  //     mimeType: outputMimeType,
  //   };

  //   try {
  //     const resizedBlob = await imageResizer(image, config);
  //     const reducedUrl = URL.createObjectURL(resizedBlob);
  //     setReducedImage({ url: reducedUrl, blob: resizedBlob, ext: fileExtension });
  //     setReducedSize(resizedBlob.size);
  //   } catch (error) {
  //     console.error("Error reducing image size:", error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Image File Size Reducer</h1>

      {/* <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

      {originalImageUrl && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Original Image</h2>
          <img src={originalImageUrl} alt="Original" className="mt-2 border max-w-xs" />
          <p className="mt-2">File Size: {formatBytes(originalSize)}</p>
        </div>
      )}

      {image && (
        <div className="mt-4 flex flex-col items-center">
          <label className="mb-2">
            Adjust Quality (Lower quality = smaller file size):
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-40"
            />
            <span>{quality}</span>
          </div>
          <button
            onClick={handleReduce}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-sm"
          >
            Reduce File Size
          </button>
        </div>
      )}

      {reducedImage && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Reduced Image</h2>
          <img src={reducedImage.url} alt="Reduced" className="mt-2 border max-w-xs" />
          <p className="mt-2">New File Size: {formatBytes(reducedSize)}</p>
          <a
            href={reducedImage.url}
            download={`Anix7 Tools File Size Reducer - ${image.name.split(".")[0]}.${reducedImage.ext}`}
            className="block text-blue-600 mt-2"
          >
            Download Reduced Image
          </a>
        </div>
      )} */}
    </div>
  );
}
