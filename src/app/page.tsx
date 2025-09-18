"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaSpotify, FaBolt, FaMicrophone, FaTrophy, FaPlay } from "react-icons/fa";

export default function Home() {
  const [openNewsIndex, setOpenNewsIndex] = useState<number | null>(null);

  // Toggle news accordion
  const toggleNews = (index: number) => {
    setOpenNewsIndex(openNewsIndex === index ? null : index);
  };

  // Breaking news data with icon, title, and content
  const newsData = [
    {
      icon: <FaBolt className="text-red-500 mr-2" />,
      title: "Eminem announces a surprise album drop!",
      content:
        "Marshall Mathers just shocked the world again — a brand new album is dropping at midnight. Fans are already calling it a masterpiece.",
    },
    {
      icon: <FaMicrophone className="text-red-500 mr-2" />,
      title: "New Diss Track is going viral",
      content:
        "Eminem has released a diss track targeting several rappers. The internet is exploding with reactions and memes.",
    },
    {
      icon: <FaTrophy className="text-red-500 mr-2" />,
      title: "Eminem hits another milestone",
      content:
        "With billions of streams on Spotify, Eminem solidifies his place as one of the greatest rappers of all time.",
    },
  ];

  // Featured albums data
  const albums = [
    {
      title: "The Marshall Mathers LP",
      img: "https://i.ebayimg.com/images/g/bvAAAOSw6ilksb26/s-l1200.jpg",
    },
    {
      title: "The Eminem Show",
      img: "https://m.media-amazon.com/images/I/61MnVGlbejL.jpg",
    },
    {
      title: "Music To Be Murdered By",
      img: "https://m.media-amazon.com/images/I/9107Djj3bOL._UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="mt-20 relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://wallpapercave.com/wp/wp10470049.jpg"
          alt="Eminem"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-extrabold uppercase text-red-600 drop-shadow-[0_0_35px_rgba(255,0,0,1)]">
            The Rap God
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-xl md:text-2xl text-gray-200 tracking-widest"
          >
            Slim Shady • Marshall Mathers • Legend
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,0,0,1)" }}
            className="mt-10 px-12 py-5 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl text-xl font-bold shadow-[0_0_25px_rgba(255,0,0,0.9)]"
          >
            <div className="flex items-center">
              Listen on Spotify <FaSpotify className="ml-2" />
            </div>
          </motion.button>
        </motion.div>
      </section>

      {/* Albums Section */}
      <section
        id="albums"
        className="px-8 py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-16 text-center text-red-500 drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]"
        >
          Featured Albums
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {albums.map((album, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={album.img}
                alt={album.title}
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black/70 transition">
                <h4 className="text-2xl font-bold mb-4">{album.title}</h4>
                <button className="px-6 py-2 bg-red-600 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.8)] hover:bg-red-700 transition flex items-center">
                  Listen Now <FaPlay className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Section with Accordion */}
      <section id="news" className="px-8 py-20 bg-gray-950">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-16 text-center text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.9)]"
        >
          Breaking News
        </motion.h3>

        <div className="space-y-6 max-w-3xl mx-auto">
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-2xl shadow-lg border-l-4 border-red-600 overflow-hidden"
            >
              <button
                onClick={() => toggleNews(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h4 className="text-xl font-bold text-white tracking-wide flex items-center">
                  {item.icon} {item.title}
                </h4>
                <motion.span
                  animate={{ rotate: openNewsIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-500 text-3xl font-bold"
                >
                  {openNewsIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openNewsIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-6 pb-6 text-gray-300 leading-relaxed bg-gradient-to-r from-black via-gray-900 to-black"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="border-l-2 border-red-600 pl-4"
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Biography Section */}
      <section
        id="bio"
        className="px-8 py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Eminem Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.5)]"
          >
            <Image
              src="https://imobie-resource.com/en/ai-voice-changer/img/eminem@2x.png"
              alt="Eminem"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>

          {/* Biography Text */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-5xl font-extrabold text-red-500 drop-shadow-[0_0_25px_rgba(255,0,0,0.8)]">
              Biography
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Marshall Bruce Mathers III, better known as{" "}
              <span className="text-red-500 font-semibold">Eminem</span>, is one
              of the most influential rappers of all time. Rising from the
              underground battle rap scene in Detroit, he broke into the
              mainstream with his sharp lyrics, raw storytelling, and alter ego
              Slim Shady. With multiple Grammy Awards, an Academy Award, and
              record-breaking albums, Eminem has defined hip-hop for over two
              decades.
            </p>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(255,0,0,0.9)",
              }}
              className="px-8 py-4 bg-red-600 rounded-xl text-lg font-bold shadow-[0_0_15px_rgba(255,0,0,0.6)]"
            >
              Read Full Bio →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
