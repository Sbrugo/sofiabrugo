import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";
import "../App.css";

const Technologies = () => {
  const technologies = [
    {
      number: "01",
      title: "CRUD",
      highlight: "NestJs, MongoDB, Validations",
      description: `For a technical interview I built a backend on Nest.js. I focused on properly separating the logic and keeping the code as clean as possible. I applied validations, MongoDB, and concepts from MVC pattern.`,
      code_url: "https://github.com/Sbrugo/nestjs-backend-lean",
    },
    {
      number: "02",
      title: "Frontend Dev.",
      highlight: "React, styled-components, Git, Redux",
      description: `For 3 months we built the user interface of a credit eligibility platform used by agents of a US-based financial company to input and manage client data. The tool helped assess client eligibility for credit in real time. Worked with a team following coding standards, using React, styled-components, and Redux.`,
    },
    {
      number: "03",
      title: "Website",
      highlight: "NextJs, Tailwind CSS",
      description: `To move from google forms to a more professional view we decided to develop an app in Next creating a clean, accessible, and fast design. The result was a platform where the owner can edit the view without writing any code and share to contact people.`,
    },
  ];
  const stack = [
    { name: "HTML", url: "/html.png" },
    { name: "CSS", url: "/css.png" },
    { name: "Javascript", url: "/javascript.png" },
    { name: "React", url: "/react.png" },
    { name: "Next.js", url: "/nextjs.png" },
    { name: "NestJS", url: "/nestjs.png" },
    // { name: "Java", url: "/java.png" },
    { name: "MongoDb", url: "/mongo.png" },
    { name: "Git", url: "/git.png" },
    { name: "Jira", url: "/jira.png" },
  ];

  return (
    <section className="py-20 px-6 w-full">
      <div className="mx-auto text-center">
        <motion.div
          key={""}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Typewriter text="This are projects I..." />
          <h2 className="text-3xl inria-sans-bold md:text-4xl font-bold mt-8 mg-4">
            Worked on lately
          </h2>
          <p className="text-lg mb-12">
            Each tool was part of a real process where I learned real techniques
            and solved concrete challenges, depending on the project purpose.
          </p>
          <div className="space-y-8 flex flex-col gap-2 justify-around">
            {/* <p className="font-bold underline">Used Stack</p>
            <div className="p-4 md:p-8 flex flex-col justify-between text-left w-full">
              <p className="text-gray-400 mb-4">00</p>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                  {stack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <img src={tech.url} className="max-h-[100px]" />
                    </motion.div>
                  ))}
                  <p>
                    Javascript Frameworks for Full Stack web development and web
                    styling. MERN stack.
                  </p>
                </div>
              </div>
            </div> */}
            <div>
              <p className="font-bold underline">Projects</p>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative p-6 md:p-8 flex flex-col gap-4 text-left w-[300px] rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl hover:shadow-indigo-200 transition-shadow duration-300 my-4 hover:bg-indigo-100 hover:border-indigo-200 group-hover:text-shadow-2xl"
                  >
                    {" "}
                    <span className="text-sm font-bold text-indigo-500 group-hover:text-indigo-600 transition-colors">
                      {tech.number}
                      {tech.code_url ? (
                        <>
                          {" "}
                          | <a href={tech.code_url}>code</a>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                    <h3 className="text-gray-900 text-2xl font-semibold leading-snug">
                      {tech.title}
                    </h3>
                    <p className="text-gray-700 font-medium text-base">
                      {tech.highlight}
                    </p>
                    {/* <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {tech.description}
                  </p> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
