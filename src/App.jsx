import "./App.css";
import { motion } from "framer-motion";

const technologies = [
  {
    title: "Next.js",
    highlight: "Tailwind CSS",
    color: "text-green-400",
    description: `Una reclutadora necesitaba algo más profesional que Google Forms. 
    Desarrollé una app fullstack con Next.js (frontend y backend integrados), 
    y usé Tailwind para lograr un diseño limpio, accesible y rápido. 
    El resultado fue una plataforma donde puede gestionar postulantes sin escribir código.`,
  },
  {
    title: "React",
    highlight: "Git, Redux",
    color: "text-pink-400",
    description: `Trabajé en equipo en una plataforma de créditos. 
    Primero armamos toda la interfaz con React, y luego implementamos Redux 
    para el manejo global del estado. Aprendí muchísimo de trabajo en conjunto y Git.`,
  },
  {
    title: "Nest.js",
    highlight: "MongoDB, Validaciones",
    color: "text-blue-400",
    description: `Durante una entrevista técnica hice un backend con Nest.js. 
    Me enfoqué en separar bien la lógica y mantener el código ordenado. 
    Apliqué validaciones, usé MongoDB y conceptos de Java con Spring Boot para estructurar el proyecto.`,
  },
];

export default function TechnologiesSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b p-8 space-y-16">
      {/* Inicio fluido con una frase grande */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl text-left md:text-7xl font-bold">
          Buenas, me llamo Sofi Brugo
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl"
        >
          Trabajé en varios, diferentes, proyectos. Adaptando tecnologías para
          cumplir criterios y representando la escencia y el objetivo del
          negocio planteado.
        </motion.p>
      </motion.div>

      <section className="py-20 px-6 w-full">
        <div className="mx-auto text-center">
          <motion.div
            key={""}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnologías con las que trabajé
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Cada herramienta fue parte de un proceso real donde aprendí y
              resolví desafíos concretos.
            </p>
            <div className="space-y-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg text-left"
                >
                  <h3 className={`${tech.color} text-xl font-semibold mb-2`}>
                    {tech.title}
                  </h3>
                  <p className="text-white/90 font-medium mb-1">
                    Otra herramienta: {tech.highlight}
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
