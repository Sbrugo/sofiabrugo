/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../App.css";
export const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="font-mono text-lg"
    >
      {displayedText}
      {/* <span className="after:content-['|'] after:animate-blink after:ml-1" /> */}
      <span className="animate-pulse inline-block w-2 h-5 bg-indigo-900 ml-1 align-middle"></span>
    </motion.span>
  );
};
