"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Music Industry Force Graph",
    description: "Interactive 3D visualization of relationships in the music industry, built from a Python-processed dataset of 900,000+ connections and rendered in JavaScript",
    gitUrl: "https://github.com/johnlamair/music-force-graph",
  },
    {
    id: 2,
    title: "Multithreaded RLE Encoder",
    description: "A run-length encoder built in C that uses a POSIX thread pool",
    gitUrl: "https://github.com/johnlamair/multithreaded-rle-encoder",
  },

  {
    id: 3,
    title: "Personal Website",
    description: "Personal portfolio website built in Next.js, hosted with Vercel",
    gitUrl: "https://github.com/johnlamair/personal-website",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <section id="projects" className="pt-20 pb-20">
        <h2 className="text-black mb-12 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center">
          My Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
              <motion.li
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    gitUrl={project.gitUrl}
                />
              </motion.li>
          ))}
        </ul>
      </section>
  );
};

export default ProjectsSection;
