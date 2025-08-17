import getUserModel from "@shared/lib/db/models/User";
import UserClientPage from "./user";

export default async function UserPage({ params }) {
  const User = await getUserModel();
  const userId = (await params).id;

  const user = await User.findOne({ userId }).lean();

  if (!user)
    return (
      <div className="text-center text-5xl font-serif text-red-500">
        <strong>User Not Found!</strong>
      </div>
    );

  // Convert non-serializable fields to plain values

  delete user._id;
  delete user.__v;
  delete user.password;
  return <UserClientPage user={user} />;
}
