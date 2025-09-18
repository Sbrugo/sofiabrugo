/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "../App.css";
import Squares from "./Squares";
import { books } from "../../default_verbiage";

const Books = () => {
  return (
    <section className="py-20 px-6 w-full">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          key=""
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inria-sans-bold mb-4">
            Books I recommend
          </h2>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Here you'll find helpful books that I’ve found useful for gaining
            academic depth and exploring technical topics. These books are
            either in the public domain, have expired copyrights, or are offered
            for free by their authors or publishers as part of a marketing
            strategy.
          </p>

          <div className="flex flex-col gap-6 items-center">
            <Squares props={books} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Books;
