import connectToDatabase from "@/lib/db"
import User from "@/models/User"

export async function getUserFromDb(email){
  await connectToDatabase()

  const user = await User.findOne({ email });
  return user;
}