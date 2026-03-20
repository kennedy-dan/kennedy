"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Somewhere between the PowerPoint decks and performance reviews, we forgot what it feels like to be alive. To compete. To sweat. To win — or lose — and feel something real.",
  "Lympix was born from a simple belief: that the best version of any team isn't found in a conference room. It's found on a track, on a court, in the dust of a tug-of-war pit where titles don't matter and effort does.",
  "We design high-energy, competitive experiences for professionals who refuse to be bored. Not team-building. Not corporate wellness. Something entirely different — something that makes you want to come back.",
];

export default function Manifesto() {
  return (
    <section className="bg-[#f9f9f7] py-20 px-6 border-b border-gray-200">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12"
        >
          The Manifesto
        </motion.h2>

        <div className="flex flex-col gap-7">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
