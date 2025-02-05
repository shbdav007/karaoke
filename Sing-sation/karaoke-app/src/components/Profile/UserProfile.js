import React, { useState, useEffect } from "react";
import { getUserProfile, updateProfile } from "../utils/api";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getUserProfile();
      setUser(profileData);
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile({ username: newUsername });
    alert("Profile updated!");
  };

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="user-profile">
      <h2>{user.name}'s Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="New Username"
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
