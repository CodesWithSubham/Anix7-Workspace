"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";
export default function Page() {
  const accept = {
    "image/*": [".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif", ".svg"],
    "application/pdf": [".pdf"],
    "audio/*": [".mp3"],
  };
  return (
    <>
      <DropZone multiple={true} maxSize={5 * 1024 * 1024} accept={accept} />
    </>
  );
}

export function DropZone({
  accept = {
    "image/*": [".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif", ".svg"],
    "application/pdf": [".pdf"],
  },
  multiple = false,
  maxItem = 5,
  maxSize = 5 * 1024 * 1024, // 5 MB
  onFilesChange = () => {},
  label = "Drag & drop some files here, or click to select files",
  className = "",
}) {
  const [files, setFiles] = useState([]);
  const [previewFile, setPreviewFile] = useState(null);
  const [customErrors, setCustomErrors] = useState([]);

  const mb = (maxSize / 1024 / 1024).toFixed(1);
  const allowedExts = Object.values(accept)
    .flat()
    .map((e) => e.toLowerCase());
  const acceptedTypesStr = Object.keys(accept)
    .map((type) => {
      if (type === "image/*") return "images";
      if (type === "video/*") return "videos";
      if (type === "audio/*") return "audio files";
      if (type === "application/pdf") return "PDFs";
      if (type.includes("/")) return type.split("/")[1] + " files";
      return type;
    })
    .join(", ");

  const errorMap = useMemo(
    () => ({
      "file-invalid-type": `Only ${acceptedTypesStr} are allowed.`,
      "file-too-large": `File size should not exceed ${mb} MB.`,
      "too-many-files": `You can upload a maximum of ${maxItem} files.`,
      "wrong-extension": `Only these extensions are allowed: ${allowedExts.join(
        ", "
      )}`,
    }),
    [acceptedTypesStr, mb, maxItem, allowedExts]
  );

  const onDropAccepted = useCallback(
    (accepted) => {
      const withPreview = accepted.map((f) => {
        const copy = Object.assign(f, {});
        if (f.type.startsWith("image/") || f.type === "application/pdf") {
          copy.preview = URL.createObjectURL(f);
        }
        return copy;
      });
      let newFiles = multiple ? [...files, ...withPreview] : withPreview;
      if (multiple && newFiles.length > maxItem) {
        newFiles = newFiles.slice(0, maxItem);
        setCustomErrors([errorMap["too-many-files"]]);
      } else {
        setCustomErrors([]);
      }
      setFiles(newFiles);
      onFilesChange(newFiles);
    },
    [files, maxItem, multiple, onFilesChange, errorMap]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple,
    maxSize,
    onDropAccepted,
    validator: (file) => {
      const errors = [];
      const ext = file.name?.split(".").pop()?.toLowerCase();
      if (file.size > maxSize) errors.push("file-too-large");
      if (!allowedExts.includes(`.${ext}`)) errors.push("wrong-extension");
      const mimeAccepted = Object.keys(accept).some((mime) => {
        if (mime.endsWith("/*"))
          return file.type.startsWith(mime.split("/")[0]);
        return file.type === mime;
      });
      if (!mimeAccepted) errors.push("file-invalid-type");

      if (errors.length) {
        const messages = errors.map((code) => errorMap[code]);
        setCustomErrors((prev) => Array.from(new Set([...prev, ...messages])));
        return {
          code: "custom-error",
          message: "Custom validation failed",
        };
      }
      return null;
    },
  });

  const previews = files.map((file, i) => {
    const isImage = file.type.startsWith("image/");
    const isPdf = file.type === "application/pdf";
    const extMatch = file.name?.match(/\.(\w+)$/);
    const ext = extMatch ? extMatch[1].toUpperCase() : "FILE";

    let thumb;
    if (isImage) {
      thumb = (
        <img
          src={file.preview}
          alt={file.name}
          className="w-20 h-20 object-cover rounded-md"
        />
      );
    } else if (isPdf) {
      thumb = (
        <object
          data={file.preview}
          type="application/pdf"
          className="w-20 h-20 border rounded-md"
        />
      );
    } else {
      thumb = (
        <div className="w-20 h-20 flex items-center justify-center border border-gray-300 rounded-md">
          <span className="text-lg font-bold">{ext}</span>
        </div>
      );
    }

    return (
      <div
        key={i}
        className="flex flex-col items-center relative cursor-pointer"
        onClick={() => setPreviewFile(file)}
      >
        <button
          className="absolute z-[1] bg-red-400 text-white w-5 h-5 text-xl font-bold flex justify-center items-center rounded-full -top-2 right-0 hover:scale-105 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setFiles((prev) => {
              const updated = [...prev];
              updated.splice(i, 1);
              onFilesChange(updated);
              return updated;
            });
          }}
        >
          &times;
        </button>
        {thumb}
        <span className="text-xs truncate w-24 mt-1">{file.name}</span>
      </div>
    );
  });

  useEffect(() => {
    return () => {
      files.forEach((f) => f.preview && URL.revokeObjectURL(f.preview));
    };
  }, [files]);

  return (
    <>
      <div className={twMerge("w-full", className)}>
        <div
          {...getRootProps()}
          className="w-full p-5 border border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="fixed inset-0 bg-blue-500 bg-opacity-60 z-50 flex justify-center items-center text-white text-xl font-semibold">
              Drop your files here...
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2 text-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-gray-500">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          )}
        </div>

        {customErrors.length > 0 && (
          <ul className="text-red-500 text-sm mt-2 list-disc pl-5 space-y-1">
            {customErrors.map((msg, idx) => (
              <li key={idx}>{msg}</li>
            ))}
          </ul>
        )}

        {previews.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">{previews}</div>
        )}
      </div>

      {previewFile && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col">
          <button
            className="self-end m-4 text-white text-2xl"
            onClick={() => setPreviewFile(null)}
          >
            &times;
          </button>
          <div className="flex-grow flex justify-center items-center p-4">
            {previewFile.type.startsWith("image/") && (
              <img
                src={previewFile.preview}
                alt={previewFile.name}
                className="max-h-full max-w-full"
              />
            )}
            {previewFile.type === "application/pdf" && (
              <object
                data={previewFile.preview}
                type="application/pdf"
                className="w-full h-full"
              />
            )}
            {!previewFile.type.startsWith("image/") &&
              previewFile.type !== "application/pdf" && (
                <div className="flex flex-col items-center text-white">
                  <div className="text-6xl font-bold mb-4">
                    {(
                      previewFile.name.match(/\.(\w+)$/)?.[1] || "FILE"
                    ).toUpperCase()}
                  </div>
                  <div className="text-xl">{previewFile.name}</div>
                </div>
              )}
          </div>
        </div>
      )}
    </>
  );
}
