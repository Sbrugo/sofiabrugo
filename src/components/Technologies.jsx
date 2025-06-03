import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../App.css";
import Squares from "./Squares";
import { technologies } from "../default_verbiage";
import img from "../assets/image_2.png";
const Technologies = () => {
  return (
    <section id="projects" className="py-20 px-6 w-full">
      <div className="mx-auto text-center">
        <motion.div
          key={""}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl inria-sans-bold md:text-4xl font-bold mb-4">
            Worked on lately
          </h2>
          <p className="text-lg mb-12">
            Each tool was part of a real process where I learned real techniques
            and solved concrete challenges, depending on the project purpose.
          </p>
          <div className="space-y-8 flex flex-col gap-2 justify-around">
            <div>
              <p className="font-bold underline">Projects</p>
              <Squares props={technologies} isProject={true} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
