import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {user?.name || "User"}</h2>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
