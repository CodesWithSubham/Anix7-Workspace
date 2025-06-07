// /app/admin/upload/page.js

"use client";

import { useState, useEffect } from "react";

export default function UploadPage() {
  const [taskData, setTaskData] = useState({
    title: "",
    taskCat: "",
    desc: "",
    url: "",
  });
  const [imageFile, setImageFile] = useState(null); // For handling image uploads

  const handleUploadTask = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", taskData.title);
    formData.append("taskCat", taskData.taskCat);
    formData.append("desc", taskData.desc);
    formData.append("url", taskData.url);
    formData.append("image", imageFile);

    try {
      const response = await fetch("/api/uploadTask", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Task uploaded successfully");
        setTaskData({ title: "", taskCat: "", desc: "", url: "" });
        setImageFile(null);
      } else {
        alert(result.error || "Error uploading task");
      }
    } catch (error) {
      console.error("Error uploading task:", error);
      alert("An error occurred while uploading the task.");
    }
  };

  return (
    <div className="mx-auto w-[90vw] px-4 rounded-sm text-center mt-[-40px]">
      <h1 className="mb-6 text-3xl font-bold">Upload Tasks</h1>
      <form onSubmit={handleUploadTask}>
        <input
          type="text"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          placeholder="Task Title"
          className="w-full px-3 py-2 mb-3 rounded-full border-2 border-gray-300 focus:outline-hidden focus:border-blue-500 bg-transparent"
        />
        <input
          type="text"
          value={taskData.taskCat}
          onChange={(e) => setTaskData({ ...taskData, taskCat: e.target.value })}
          placeholder="Category"
          className="w-full px-3 py-2 mb-3 rounded-full border-2 border-gray-300 focus:outline-hidden focus:border-blue-500 bg-transparent"
        />
        <textarea
          value={taskData.desc}
          onChange={(e) => setTaskData({ ...taskData, desc: e.target.value })}
          placeholder="Description"
          className="w-full h-20 px-3 py-2 mb-3 rounded-full border-2 border-gray-300 focus:outline-hidden focus:border-blue-500 bg-transparent"
        />
        <input
          type="url"
          value={taskData.url}
          onChange={(e) => setTaskData({ ...taskData, url: e.target.value })}
          placeholder="Task URL"
          className="w-full px-3 py-2 mb-3 rounded-full border-2 border-gray-300 focus:outline-hidden focus:border-blue-500 bg-transparent"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full px-3 py-2 mb-3 rounded-full border-2 border-gray-300 focus:outline-hidden focus:border-blue-500 bg-transparent"
        />
        <button
          type="submit"
          className="w-full px-3 py-2 mb-3 rounded-full outline-hidden bg-blue-700 hover:bg-blue-800"
        >
          Upload Task
        </button>
        
      </form>
    </div>
  );
}