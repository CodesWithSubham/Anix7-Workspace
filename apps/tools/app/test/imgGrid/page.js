import fs from "fs";
import path from "path";
import Image from "next/image";

// Fisher-Yates shuffle
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ImgGrid() {
  const imagesDir = path.join(process.cwd(), "public", "test", "img");
  let images = [];

  try {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
      .map((file) => `/test/img/${file}`);
    images = shuffleArray(images);
  } catch (error) {
    console.error("Failed to read images:", error);
  }

  return (
    <div className="columns-1 min-[320px]:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((src, index) => (
        <div key={index} className="break-inside-avoid overflow-hidden rounded-lg border">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-t-lg"
            loading="lazy"
          />
          <div className="h-10 border-t"></div>
        </div>
      ))}
    </div>
  );
  
}
