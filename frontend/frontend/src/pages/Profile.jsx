import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};
export default Profile;
