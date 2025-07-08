import React, { useState } from "react";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([""]);

  const handleSlotChange = (value, index) => {
    const updated = [...slots];
    updated[index] = value;
    setSlots(updated);
  };

  const addSlotField = () => {
    setSlots([...slots, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = { title, description, date, slots };

    const res = await fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Event created successfully!");
      setTitle("");
      setDescription("");
      setDate("");
      setSlots([""]);
    } else {
      alert(data.message || "❌ Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="md:w-1/2 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-8">
          <h2 className="text-2xl font-bold mb-6">Why create events with us?</h2>
          <ul className="space-y-3 mb-8 text-sm">
            <li>✅ Fast, easy-to-use event platform</li>
            <li>✅ Lowest ticketing platform fees</li>
            <li>✅ Dedicated customer support team</li>
            <li>✅ Powerful scheduling features</li>
          </ul>
          <h4 className="text-xs text-gray-200 mb-2">
            Trusted by 10,000+ organizers
          </h4>
          <div className="flex flex-wrap gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="NPM" className="h-6" />
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-sm text-gray-700">Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm text-gray-700">Description</label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm text-gray-700">Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm text-gray-700">Time Slots</label>
              {slots.map((slot, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder="e.g., 10:00 AM"
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
                  value={slot}
                  onChange={(e) => handleSlotChange(e.target.value, idx)}
                  required
                />
              ))}
              <button
                type="button"
                className="text-blue-600 text-sm underline"
                onClick={addSlotField}
              >
                + Add another slot
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded transition duration-200"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
