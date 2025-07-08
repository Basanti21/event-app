import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp7488412.jpg')",
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

    
      <div className="relative z-10 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-sm">
        <div className="text-2xl font-bold tracking-wide">🎟️ EVENT BOOKINGS</div>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Industry</a>
          <Link to="/events" className="hover:text-blue-400">Events</Link>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Help</a>
          <Link to="/bookings" className="hover:text-blue-400">My Bookings</Link>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:underline">Greetings! Sign in</a>
      <Link
          to="/create-event"
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded shadow"
        >
          Create Event
      </Link>
          <span className="text-sm">🇮🇳 India</span>
        </div>
      </div>

     
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-24 md:py-36">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
          Book Unforgettable Events in Just a Few Clicks!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          From wedding to concerts, parties to confrences --find and book venues, vendors,and services easily.
        </p>
        <Link
          to="/create-event"
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded shadow"
        >
          Create Event
        </Link>

       
        <div className="flex items-center mt-10 gap-3 bg-white/10 px-5 py-2 rounded-lg backdrop-blur-md">
          <img
            src="https://img.freepik.com/premium-photo/hornbill-logo_989332-2874.jpg?w=2000"
            alt="Capterra"
            className="h-6"
          />
          <span className="text-sm">Excellent 4.7/5</span>
          <span className="text-yellow-400 text-lg">★★★★★</span>
        </div>
      </div>

      
      <footer className="relative z-10 mt-20 px-6 py-6 text-sm text-gray-300 bg-black/70 text-center">
        &copy; {new Date().getFullYear()} EventBookings. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
