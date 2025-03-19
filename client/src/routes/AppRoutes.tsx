import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute element={<Home />} />}>
        {/* Nested routes will render inside Feed's Outlet */}
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />

      </Route>

      {/* Fallback redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
