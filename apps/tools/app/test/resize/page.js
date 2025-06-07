"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Resize() {
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [quality, setQuality] = useState(0.8);
  const [maintainAspect, setMaintainAspect] = useState(true);
  const [originalAspectRatio, setOriginalAspectRatio] = useState(null);
  const [originalSize, setOriginalSize] = useState(null);
  const [resizedSize, setResizedSize] = useState(null);
  const [error, setError] = useState(null);

  const onDropAccepted = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setError(acceptedFiles.length > 1 ? "Please select only one file" : null);
      const file = acceptedFiles[0];
      if (!file || !file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      setOriginalSize((file.size / 1024).toFixed(2) + " KB");
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        setOriginalAspectRatio(aspectRatio);
        if (maintainAspect) {
          setHeight(Math.round(width / aspectRatio));
        }
      };

      setImage(file);
      setOriginalImage(URL.createObjectURL(file));
    },
    [maintainAspect, width]
  );

  const onError = (e) => {
    console.log(e);
  };

  const { getRootProps, fileRejections, getInputProps, isDragActive } =
    useDropzone({
      onDropAccepted,
      accept: {
        "image/*": [],
      },
      multiple: false,
      maxSize: 3 * 1024 * 1024,
    });
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps()} className="w-full p-5 border rounded-lg ">
        <input
          {...getInputProps()}
          // {accept: "image/*",}
        />
        {isDragActive ? (
          <div className=" fixed top-0 left-0 right-0 bottom-0 bg-(--waveB) flex justify-center items-center z-[9999]">
            Drop your image here...
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <svg viewBox="0 0 24 24" className="w-1/3 h-auto">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
                className="svgC"
              ></path>
            </svg>
            <p>
              Drag &apos;n&apos; drop some files here, or click to select files
            </p>
          </div>
        )}
      </div>
      {originalImage}
      {error && <p className="text-red-500">{error}</p>}
      <ul>{fileRejectionItems}</ul>
    </div>
  );
}

function Home() {
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [quality, setQuality] = useState(0.8);
  const [maintainAspect, setMaintainAspect] = useState(true);
  const [originalAspectRatio, setOriginalAspectRatio] = useState(null);
  const [originalSize, setOriginalSize] = useState(null);
  const [resizedSize, setResizedSize] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file || !file.type.startsWith("image/")) return;

      setOriginalSize((file.size / 1024).toFixed(2) + " KB");
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        setOriginalAspectRatio(aspectRatio);
        if (maintainAspect) {
          setHeight(Math.round(width / aspectRatio));
        }
      };

      setImage(file);
      setOriginalImage(URL.createObjectURL(file));
    },
    [maintainAspect, width]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const resizeImage = () => {
    if (!image) return;
    if (image.type === "image/gif") {
      setResizedImage({
        url: originalImage,
        name: `Anix7 Tools Resize - ${image.name}`,
      });
      setResizedSize(originalSize);
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(image);
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let newWidth = width;
      let newHeight = height;

      if (maintainAspect && originalAspectRatio) {
        newHeight = Math.round(newWidth / originalAspectRatio);
      }

      canvas.width = newWidth;
      canvas.height = newHeight;
      if (["image/png", "image/webp", "image/svg+xml"].includes(image.type)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          setResizedSize((blob.size / 1024).toFixed(2) + " KB");
          setResizedImage({ url, name: `Anix7 Tools Resize - ${image.name}` });
        },
        image.type,
        quality
      );
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Client-Side Image Resizer</h1>
      <div
        {...getRootProps()}
        className="border border-dashed border-gray-400 p-6 text-center w-64 cursor-pointer bg-white"
      >
        <input {...getInputProps()} />
        <p>Drop here or tap to choose</p>
      </div>

      {originalImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Original Image</h2>
          <Image src={originalImage} alt="Original" className="mt-2 border" />
          <p>File Size: {originalSize}</p>
        </div>
      )}

      <div className="flex gap-4 mb-4">
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="border p-2 rounded-sm w-24"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2 rounded-sm w-24"
          disabled={maintainAspect}
        />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={maintainAspect}
          onChange={() => setMaintainAspect(!maintainAspect)}
          className="w-5 h-5"
        />
        <label>Maintain Aspect Ratio</label>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label>Quality:</label>
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
        onClick={resizeImage}
        className="bg-blue-500 text-white px-4 py-2 rounded-sm"
      >
        Resize Image
      </button>

      {resizedImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Resized Image</h2>
          <Image src={resizedImage.url} alt="Resized" className="mt-2 border" />
          <p>File Size: {resizedSize}</p>
          <a
            href={resizedImage.url}
            download={resizedImage.name}
            className="block text-blue-600 mt-2"
          >
            Download ({resizedImage.name})
          </a>
        </div>
      )}
    </div>
  );
}
