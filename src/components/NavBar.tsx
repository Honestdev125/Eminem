"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdMicrophone } from "react-icons/io";
import { FaHome, FaCompactDisc, FaTicketAlt, FaInfoCircle } from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu items with icons
  const menuItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Albums", href: "/albums", icon: <FaCompactDisc /> },
    { name: "Ticket", href: "/ticket", icon: <FaTicketAlt /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-600/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo with microphone icon */}
        <Link href="/">
          <h1 className="text-3xl flex font-extrabold text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.9)] cursor-pointer items-center gap-2">
            Eminem
            <IoMdMicrophone className="text-white mt-1" />
          </h1>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-lg text-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-red-500 transition duration-300 flex items-center gap-1"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-red-500 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-black/90 border-t border-red-600/40"
        >
          <ul className="flex flex-col space-y-4 px-8 py-6 text-white text-lg">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-red-500 transition duration-300 flex items-center gap-2"
                onClick={() => setMenuOpen(false)} // Close mobile menu on click
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
