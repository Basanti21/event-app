import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EventDetails from "../pages/EventDetails";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateEvent from "../pages/CreateEvent";
import Bookings from "../pages/Bookings";
import Events from "../pages/Events";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/events" element={<Events />} />
      {/* Admin Only */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
