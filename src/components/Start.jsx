import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Computer, Programming } from "./MorseCode";
import { Typewriter } from "./Typewriter";

const Start = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center flex flex-col items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Intro Text */}
      <div className="flex flex-col gap-16 my-12 sm:my-16 md:my-20 max-w-4xl w-full">
        {/* Name Heading with animated underline */}
        <Typewriter text="Hello, my name is Sofia" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold inria-sans-bold mb-4">
          Jr. Developer
        </h2>

        {/* Animated Computer Icon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <Computer />
        </motion.div>

        {/* First Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group border bg-slate-50 border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 p-6 rounded-xl shadow hover:shadow-indigo-200"
        >
          <p className="text-base sm:text-lg inria-sans-regular text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 text-justify">
            I’m a full stack developer with a background in Applied Computing
            and Systems Analysis. Currently studying Cybersecurity at Palermo
            University (Buenos Aires), I work combining logical thinking,
            digital tools, and structured methodologies. My technical skills are
            grounded in logic, structured problem-solving, and real-world coding
            experience.
          </p>
        </motion.div>

        {/* Second Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="group bg-slate-50 border border-gray-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 p-6 rounded-xl shadow hover:shadow-indigo-200"
        >
          <p className="text-base sm:text-lg inria-sans-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 text-justify">
            By studying these subjects I aim to bring a comprehensive and
            technical approach to problem-solving and system design. I work with
            a variety of tools and contribute to building solid, scalable
            systems by prioritizing clean, correct code and well-designed
            algorithms. My focus is on ensuring efficiency, clarity, and
            long-term success from the very beginning of each project.
          </p>
        </motion.div>
      </div>

      {/* Animated Programming Icon */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="mb-10 flex justify-center"
      >
        <Programming />
      </motion.div>
    </motion.div>
  );
};

export default Start;
