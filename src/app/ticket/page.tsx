"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChair, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

// Concert data including city, available dates, and sold out status
const concerts = [
  { city: "New York", dates: ["2025-10-12", "2025-10-13"], soldOut: false },
  { city: "Los Angeles", dates: ["2025-11-05", "2025-11-06"], soldOut: false },
  { city: "Chicago", dates: ["2025-12-01"], soldOut: true },
];

// Seating layout
const rows = ["A", "B", "C", "D", "E"];
const seatsPerRow = 8;

export default function TicketsPage() {
  const [selectedConcert, setSelectedConcert] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [startBooking, setStartBooking] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  // Handle selecting a concert date
  const handleSelectDate = (city: string, date: string) => {
    setSelectedConcert(city);
    setSelectedDate(date);
    setStartBooking(true);
    setSuccess(false);
    setSelectedSeat(null);
    setFormData({ name: "", email: "" });
  };

  // Handle seat selection
  const handleSeatClick = (seat: string) => setSelectedSeat(seat);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle ticket form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSeat && formData.name && formData.email) setSuccess(true);
  };

  return (
    <main className="bg-black text-white min-h-screen px-8 py-20 font-sans">
      
      {/* Page Header */}
      <header className="flex mt-[100px] justify-center items-center mb-16">
        <h1 className="text-3xl font-extrabold text-red-600 drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]">
          Eminem Tickets
        </h1>
      </header>

      {/* Concert Selection */}
      {!startBooking && (
        <>
          <h2 className="text-4xl font-extrabold text-red-600 mb-12 text-center drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] flex items-center justify-center gap-3">
            <FaCalendarAlt /> Select Concert & Date
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {concerts.map((concert) => (
              <div
                key={concert.city}
                className="bg-gray-900 rounded-3xl p-6 shadow-lg border-l-4 border-red-600"
              >
                <h3 className="text-2xl font-bold mb-4">{concert.city}</h3>
                <div className="flex flex-col space-y-2">
                  {concert.dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => handleSelectDate(concert.city, date)}
                      className="px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2"
                      disabled={concert.soldOut}
                    >
                      <FaCalendarAlt /> {new Date(date).toDateString()}{" "}
                      {concert.soldOut && "(Sold Out)"}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Booking Form */}
      <AnimatePresence>
        {startBooking && !success && selectedConcert && selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.8)]"
          >
            {/* Selected concert and date */}
            <h2 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
              <FaCalendarAlt /> {selectedConcert} - {new Date(selectedDate).toDateString()}
            </h2>

            {/* Seat Selection */}
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FaChair /> Select Your Seat
            </h3>
            <div className="grid grid-cols-8 gap-4 mb-6 justify-center">
              {rows.map((row) =>
                Array.from({ length: seatsPerRow }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  return (
                    <button
                      key={seat}
                      onClick={() => handleSeatClick(seat)}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                        selectedSeat === seat
                          ? "bg-red-600 border-red-500"
                          : "bg-gray-700 border-gray-600 hover:bg-red-700"
                      } transition`}
                    >
                      {seat}
                    </button>
                  );
                })
              )}
            </div>

            {/* User Info Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-red-600 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-red-600 outline-none"
                required
              />
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(255,0,0,0.9)",
                }}
                type="submit"
                className="px-6 py-3 bg-red-600 rounded-2xl font-bold shadow-[0_0_20px_rgba(255,0,0,0.8)] hover:bg-red-700 transition mt-2 flex items-center justify-center gap-2"
              >
                <FaCheckCircle /> Confirm Ticket
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-md mx-auto bg-green-600 rounded-3xl p-8 text-center shadow-[0_0_30px_rgba(0,255,0,0.7)]"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <FaCheckCircle /> Ticket Reserved!
            </h3>
            <p className="text-white mb-2">Concert: {selectedConcert}</p>
            <p className="text-white mb-2">
              Date: {new Date(selectedDate!).toDateString()}
            </p>
            <p className="text-white mb-2">Seat: {selectedSeat}</p>
            <p className="text-white">Name: {formData.name}</p>
            <p className="text-white">Email: {formData.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
