import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./App.css";
import Articles from "./components/Articles";
import Technologies from "./components/Technologies";
import Start from "./components/Start";
import Books from "./components/Books";

const morse_code_phrase =
  ". - - .    . - .    - - -    - - .    . - .   . -    - - -    - - -    . .    - .    - - .";
const soft_skills = [
  "Logical and critical thinking.",
  "Analytical and abstract thinking ability.",
  "Teamwork and technical communication skills.",
  "Focus on continuous improvement and process optimization.",
  "Algorithm design and implementation.",
  "Problem solving.",
  "Long term success.",
];

const academic_profile = [
  {
    title: "Strong knowledge of programming",
    detail:
      "Proficiency in one or more programming languages, algorithms, data structures, and problem-solving skills in computing.",
  },
  {
    title: "Systemic approach",
    detail:
      "I understand the interrelationships of components within complex systems, applicable both to computer systems and organizations.",
  },
  {
    title: "Analytical and modeling skills: Systems and Methods",
    detail:
      "I analyze processes, model solutions, and propose improvements using structured methodologies.",
  },
  {
    title: "Practical application of computing",
    detail:
      "Applied Computing often focuses on solving real-world problems using computing tools, which involves both software and hardware interaction and process automation.",
  },
];

const articles = [
  {
    name: "Legal problems of Information Technologies and what to know as a professional",
    subjects: [
      "Legal problems",
      "Information Technology",
      "Civic Responsibility",
      "Software",
    ],
    url: "https://medium.com/p/400ed5ad4c10/settings",
  },
];
export default function App() {
  return (
    <>
      <div className="min-h-screen p-4 space-y-16 bg-slate-100 text-gray-950">
        {/* Start section */}
        <Start />

        {/* Technologies section */}
        <Technologies />
        {/* Soft Skills Section */}
        <section className="py-20 px-6 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Soft Skills
              </h2>
              <ul className="list-disc text-lg text-left space-y-2 mx-auto max-w-3xl">
                {soft_skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Academic Profile Section */}
        <section className="py-20 px-6 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Academic Profile
              </h2>
              <ul className="list-disc text-lg text-left space-y-2 mx-auto max-w-3xl">
                {academic_profile.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                  >
                    <strong>{item.title}</strong>: {item.detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
        <Articles></Articles>
        <Books />
      </div>
    </>
  );
}
