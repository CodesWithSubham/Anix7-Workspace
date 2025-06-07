// /app/api/checkTask/route.js
import { MongoClient } from "mongodb";
import { jwtVerify } from "jose";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  // Function to verify JWT token
  const verifyJwt = async (token) => {
    try {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return payload;
    } catch (error) {
      throw new Error("Invalid token");
    }
  };

  if (req.method === "POST") {
    const { taskId } = req.body;
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify JWT token
      await verifyJwt(token);

      await client.connect();
      const db = client.db();
      const tasksCollection = db.collection("tasks");

      // Update task completion status
      const result = await tasksCollection.findOneAndUpdate(
        { _id: new ObjectId(taskId) },
        { $set: { isComplete: true } },
        { returnDocument: "after" }
      );

      if (result.value) {
        res.status(200).json(result.value); // Return updated task
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      console.error("Error checking task:", error);
      res.status(500).json({ message: "Failed to check task or invalid token" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
