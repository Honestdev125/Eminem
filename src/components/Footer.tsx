"use client";

import { FaSpotify, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black px-8 py-16 text-center text-gray-400 relative overflow-hidden">
      {/* Inspirational quote */}
      <p className="text-red-500 font-bold text-lg mb-6 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
        “Lose yourself in the music, the moment, you own it.” — Eminem
      </p>

      {/* Social media icons with links */}
      <div className="flex justify-center space-x-10 mb-8 text-2xl text-red-500">
        {[
          { icon: <FaSpotify />, link: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR" },
          { icon: <FaYoutube />, link: "https://www.youtube.com/user/EminemVEVO" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/eminem/" },
          { icon: <FaTwitter />, link: "https://twitter.com/Eminem" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-red-600 transition transform duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Separator line */}
      <div className="border-t border-red-600/40 mb-4 mx-auto w-24"></div>

      {/* Footer copyright */}
      <p className="text-gray-500 text-sm mb-1">
        © {new Date().getFullYear()} Eminem
      </p>
      <p className="text-gray-500 text-sm">
        Built for the fans, by the fans. All rights reserved.
      </p>
    </footer>
  );
}
