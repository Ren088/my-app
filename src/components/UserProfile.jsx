function UserProfile({ name, role }) {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md max-w-xs">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default UserProfile;