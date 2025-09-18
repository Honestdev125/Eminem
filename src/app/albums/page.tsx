"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function AlbumsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Album data including cover image and tracklist
  const albums = [
    {
      title: "The Marshall Mathers LP",
      cover: "https://i.ebayimg.com/images/g/bvAAAOSw6ilksb26/s-l1200.jpg",
      tracks: [
        "Public Service Announcement 2000",
        "Kill You",
        "Stan",
        "The Way I Am",
        "The Real Slim Shady",
      ],
    },
    {
      title: "The Eminem Show",
      cover: "https://m.media-amazon.com/images/I/61MnVGlbejL.jpg",
      tracks: [
        "White America",
        "Cleaning Out My Closet",
        "Without Me",
        "Sing for the Moment",
        "Superman",
      ],
    },
    {
      title: "Music To Be Murdered By",
      cover: "https://m.media-amazon.com/images/I/9107Djj3bOL._UF1000,1000_QL80_.jpg",
      tracks: [
        "Premonition",
        "Unaccommodating",
        "Godzilla",
        "Darkness",
        "Leaving Heaven",
      ],
    },
  ];

  // Toggle album open/close state
  const toggleAlbum = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans px-8 py-20">
      {/* Page Title */}
      <h1 className="text-5xl mt-[100px] font-extrabold text-red-500 mb-16 text-center drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]">
        Albums
      </h1>

      {/* Album List */}
      <div className="max-w-5xl mx-auto space-y-8">
        {albums.map((album, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border-l-4 border-red-600"
          >
            {/* Album Header: clickable to expand/collapse tracklist */}
            <button
              onClick={() => toggleAlbum(index)}
              className="w-full flex items-center px-6 py-5 justify-between hover:bg-red-900/20 transition"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={album.cover}
                  alt={album.title}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
                <h3 className="text-xl font-bold flex items-center">
                  {album.title} <FaPlay className="ml-2 text-red-500" />
                </h3>
              </div>
              {/* Expand/Collapse Icon with rotation animation */}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-3xl font-bold"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>

            {/* Tracklist Section with animated collapse/expand */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="px-6 pb-6 text-gray-300 list-disc list-inside space-y-2 bg-gradient-to-b from-black via-gray-900 to-black"
                >
                  {album.tracks.map((track, i) => (
                    <li key={i} className="hover:text-red-500 transition flex items-center">
                      <FaPlay className="mr-2 text-red-500" /> {track}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </main>
  );
}
