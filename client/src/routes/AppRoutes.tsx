import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />



      {/* Fallback redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};