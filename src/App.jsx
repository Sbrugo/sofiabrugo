import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const technologies = [
  {
    number: "01",
    title: "Job Listing Site",
    highlight: "Tailwind CSS",
    description: `A person I know needs something more professional than Google Forms, so she asks for a Wix website. As I do not use Wix, (I should try sometime), we decided to go for a full-stack app and integrate logic in Next creating a clean, accessible, and fast design. The result was a platform where she can edit the view without writing any code and get in contact with people and companies.`,
  },
  {
    number: "02",
    title: "Credit Platform",
    highlight: "Git, Redux",
    description: `I worked on a credit platform. First, we built the entire interface with React, and then implemented Redux for global state management. I learned a lot about teamwork and Git, PR Requests, ESLint, Jira, Scrum, Kanban, styled-components, etc.`,
  },
  {
    number: "03",
    title: "CRUD",
    highlight: "MongoDB, Validations",
    description: `During a technical interview, I built a backend with Nest.js. I focused on properly separating the logic and keeping the code clean. I applied validations, used MongoDB, and incorporated concepts from Java with Spring Boot to structure the project.`,
  },
];

const soft_skills = [
  "Logical and critical thinking.",
  "Analytical and abstract thinking ability.",
  "Teamwork and technical communication skills.",
  "Focus on continuous improvement and process optimization.",
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

const stack = [
  "React",
  "Node.js",
  "MERN",
  "Angular",
  "Java",
  "Tailwind",
  "Nextjs",
  "Docker",
  "MySQL",
  "MongoDB",
  "Git",
  "Jira",
  "Scrum",
  "Kanban",
  "NestJS",
  "Yup",
  "Redux",
];

const experienceDescription =
  "With a solid background in both frontend and backend development, I have worked extensively with the MERN stack, React, Angular, and Node.js, and built web applications. I used various CSS/JS libraries and frameworks and have fun creating UIs. On the backend, I have built microservices, as well as managed databases. I have a grasp of version control with Git and Agile methodologies (Scrum & Kanban) and I also worked with Docker.";

export default function App() {
  return (
    <div className="min-h-screen p-8 space-y-16 py-30 bg-gradient-to-t from-blue-950 via-pink-200 to-slate-100 text-gray-950">
      {/* Start section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <div className="text-center space-y-6">
          <div className="flex flex-col">
            <span className="font-mono text-5xl md:text-7xl font-bold text-gray-950">
              Hi,
            </span>
            <span className="text-lg">my name is Sofi</span>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-justify font-sans text-gray-700 leading-relaxed">
              I have a background in applied computing, programming, and systems
              analysis. I specialize in supporting, understanding, modeling, and
              optimizing both technical and organizational processes by
              combining logical thinking, digital tools, and structured
              methodologies.
            </p>
            <p className="text-lg text-justify font-sans text-gray-700 leading-relaxed">
              With a background in these key areas, I have developed a
              comprehensive and technical approach to problem-solving and system
              design. I work with a variety of tools and understand complex
              systems, model processes, and structured methodologies focusing on
              optimization.
            </p>
            <p className="text-lg text-justify font-sans text-gray-700 leading-relaxed">
              I studied fashion for a semester (that was short). And right now I
              study cybersecurity.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Technologies section */}
      <section className="py-20 px-6 w-full">
        <div className="mx-auto text-center bg-gradient-to-b from-bg-slate-50 via-pink-100 to-slate-400">
          <motion.div
            key={""}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Worked on lately
            </h2>
            <p className="text-lg mb-12">
              Each tool was part of a real process where I learned techniques
              and solved concrete challenges, depending on the project purpose.
            </p>
            <div className="space-y-8 flex flex-col gap-2 justify-around">
              <div className="px-4 md:p-8 w-full flex flex-col gap-4 m-0">
                <p className="text-gray-950">00</p>
                <p className="font-bold">Technologies</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {stack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-left min-w-fit pr-4 w-1/6">
                        {tech}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="p-4 md:p-8 w-full"
                >
                  <p className="text-gray-950 mb-4">{tech.number}</p>
                  <h3 className="text-gray-900 text-xl font-semibold mb-2">
                    {tech.title}
                  </h3>
                  <p className="font-medium mb-1">
                    Other tools on this project: {tech.highlight}
                  </p>
                  <p className="leading-relaxed text-sm md:text-base">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 px-6 w-full">
        <div className="text-center text-slate-100 drop-shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soft Skills</h2>
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
        <div className="text-center text-slate-100 drop-shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
    </div>
  );
}
