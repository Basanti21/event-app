import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-white">🎟️ EventBook</Link>

      <div className="flex gap-4 text-sm">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/create-event" className="hover:text-blue-400">Create Event</Link>
        <Link to="/bookings" className="hover:text-blue-400">My Bookings</Link> 
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/admin" className="hover:text-blue-400">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
