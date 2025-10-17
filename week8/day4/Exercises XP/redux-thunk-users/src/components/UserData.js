import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

const UserData = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  // Fetch users on mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h3>Loading users...</h3>;
  if (error) return <h3 style={{ color: "red" }}>Error: {error}</h3>;

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2>👥 User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              backgroundColor: "#f8f9fa",
              margin: "8px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
