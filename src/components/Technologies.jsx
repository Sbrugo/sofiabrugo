import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../App.css";
import Squares from "./Squares";
import { technologies } from "../default_verbiage";
import img from "../assets/algorithm.png";

const Technologies = () => {
  return (
    <section id="projects" className="py-24 px-6 w-full bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          key=""
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1 className="text-md sm:text-3xl md:text-4xl lg:text-5xl font-extrabold inria-sans-bold mb-6 leading-tight">
            Projects & Technologies
          </h1>

          <p className="text-sm sm:text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 px-2 sm:px-0">
            These are some of the technologies I’ve used professionally or in
            personal projects. My experience ranges from frontend to full stack
            with a strong focus on building solid, scalable user interfaces.
          </p>

          <div className="mb-12 px-4 sm:px-0">
            <img
              src={img}
              alt="Tech visual"
              className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col items-center gap-10 px-4 sm:px-0">
            <div className="w-full">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-4 font-semibold">
                Work | Stack | Tools
              </p>
              <Squares props={technologies} isProject={true} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
