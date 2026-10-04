import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2025 - Present",
    title: " Full Stack Developer",
    description: " Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
    stack: ["MERN","JavaScript", "React.js", "Next.js", "MongoDB","PostgreSQL"],
  },

];

function Experience() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Experience</motion.h2>
      <div className="space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="border-b pb-6">
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-xl font-semibold">{experience.title} - {experience.company}</motion.h3>
            <p className="text-sm text-gray-500">{experience.year}</p>
            <p className="mt-2">{experience.description}</p>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mt-2 flex flex-wrap gap-2">
              {experience.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience