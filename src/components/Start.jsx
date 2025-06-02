import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Computer, Programming } from "./MorseCode";
import image from "../assets/medium.jpg";
import image2 from "../assets/image_2.png";
import image3 from "../assets/image_3.png";
import html from "../assets/html.png";
import Stack from "./Stack";

const Start = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:justify-start md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <img src={image} className="rounded-full w-2/5 hidden sm:block" />
          <img src={html} className="rounded-lg h-1/10 hidden sm:block" />
          <img
            src={image3}
            className="rounded-lg w-2/4 h-1/4 hidden sm:block"
          /> */}
          <Stack />
        </motion.div>
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-indigo-600">Sofía</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Full Stack Developer · Junior Engineer · Cybersecurity Student
          </p>
          <p className="text-md md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            I blend structured thinking, software development and a passion for
            learning into building scalable, efficient systems. Currently
            focused on backend & security.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Start;
