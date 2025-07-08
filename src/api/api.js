export async function fetchEvents() {
  const res = await fetch("/api/events"); // or localhost:5000
  return res.json();
}

export async function createBooking(eventId, userData) {
  return await fetch(`/api/events/${eventId}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
}
