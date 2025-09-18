"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Timeline events for Eminem's life and career
const timeline = [
  { year: 1972, event: "Born in St. Joseph, Missouri, USA." },
  { year: 1996, event: "Released first major album 'Infinite'." },
  { year: 1999, event: "Breakthrough with 'The Slim Shady LP' and won first Grammy." },
  { year: 2000, event: "Released 'The Marshall Mathers LP', became a worldwide star." },
  { year: 2002, event: "Released 'The Eminem Show', another critical and commercial success." },
  { year: 2013, event: "Returned with 'The Marshall Mathers LP 2', topping charts globally." },
  { year: 2020, event: "Released 'Music To Be Murdered By', continuing his legacy." },
];

// Eminem's major awards and achievements
const awards = [
  "15 Grammy Awards",
  "1 Academy Award (Best Original Song 'Lose Yourself')",
  "Multiple Billboard Music Awards",
  "Rock and Roll Hall of Fame Induction",
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white font-sans min-h-screen px-8 py-20">
      
      {/* Hero Section with background image and title */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <Image
          src="https://wallpapercave.com/wp/wp10470049.jpg"
          alt="Eminem"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl md:text-7xl font-extrabold text-red-600 drop-shadow-[0_0_35px_rgba(255,0,0,1)] text-center"
        >
          About Eminem
        </motion.h1>
      </section>

      {/* Timeline Section showing important life events */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-red-600 mb-12 text-center drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]">Timeline</h2>
        <div className="relative border-l-2 border-red-600 ml-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="mb-10 ml-6"
            >
              {/* Timeline marker */}
              <div className="absolute -left-4 w-8 h-8 rounded-full bg-red-600 border-2 border-black" />
              <span className="text-red-500 font-bold">{item.year}</span>
              <p className="text-gray-300 mt-2">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements & Awards Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-600 mb-12 text-center drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]">Achievements & Awards</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg border-l-4 border-red-600 hover:scale-105 transition-transform cursor-pointer"
            >
              <p className="text-white font-bold">{award}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
