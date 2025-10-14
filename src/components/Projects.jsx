import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Amazon Clone",

        description: "A full-featured e-commerce web application inspired by Amazon, built to simulate real-world shopping functionality. The project includes user authentication, product browsing, dynamic cart management, payment gateway integration (e.g., Stripe), and responsive UI for both desktop and mobile. Designed to mimic the customer experience of a professional online store.",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Music App",
        description: "A music app that allows users to stream, search, and discover songs from various genres and artists. Users can create playlists, like tracks, and enjoy a personalized listening experience based on their preferences. The app supports real-time playback syncing using WebSockets, enabling features like collaborative playlists and group listening sessions.",
        technologies: ["Next.js"]
    },
];
function Projects() {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h2>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
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
                            className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 text-2xl font-semibold">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-stone-500">
                                {project.description}
                            </p>
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
        </div >
    );
}


export default Projects
