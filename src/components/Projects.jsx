import { motion } from "framer-motion";
import { title } from "framer-motion/client";

const PROJECTS = [
  {
    title: "Multiplayer Quiz Game",
    description:
      "A real-time multiplayer quiz platform where users can join live quiz rooms and compete with other players. The application includes authentication, synchronized gameplay, real-time answer submission, live score updates, and a dedicated socket server for multiplayer communication.",
    technologies: [
      "Next.js",
      "Drizzle ORM",
      "PostgreSQL",
      "NextAuth",
      "Socket.IO",
    ],
  },
  {
    title: "Real-Time Video Calling & Chat Application",
    description:
      "A real-time communication platform that enables users to make video calls and exchange instant messages. The application uses real-time communication technologies to provide live audio and video calling, messaging, and user-to-user connections.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "WebRTC",
      "Socket.IO",
      "MongoDB",
    ],
  },
  {
    title: "AI Image Generation App",
    description:
      "An AI-powered web application that generates images from text prompts using the FLUX.1 Schnell model through the Pixazo API. The application provides an interactive and responsive interface for creating AI-generated visuals from user prompts.",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "Pixazo API",
      "FLUX.1 Schnell",
    ],
  },
];

function Projects() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded shadow-md"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-500">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
