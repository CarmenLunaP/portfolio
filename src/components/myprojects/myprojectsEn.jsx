import React from "react";
import { motion } from "framer-motion";
import { MyProjectsEnglish } from "./DataEn.js";
import { FaEye, FaGithub } from "react-icons/fa";

const MyProjectsEn = () => {
  const projectsSortedById = MyProjectsEnglish.slice().sort((a, b) => b.id - a.id);

  return (
    <section className="bg-primary p-5 md:p-16">
      <div className="font-merriweather text-5xl font-extrabold pb-8 lg:ml-40 xl:p-0">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700">
          My Projects
        </span>
      </div>
      <div className="lg:ml-40 lg:pl-10 lg:pt-5 ">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {projectsSortedById.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              className="p-4 bg-primary border border-tertiary rounded-lg flex flex-col justify-between"
            >
              <div className="w-full max-h-96 lg:h-60  md:max-h-60 mx-auto mb-6 overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-contain"
                  src={proyecto.image}
                  alt={proyecto.name}
                />
              </div>
              <div className="flex flex-col items-center  lg:items-center ">
                <h3 className="font-cutivemono text-xl text-primary font-bold lg:text-black">
                  {proyecto.name}
                </h3>
                <p className="font-cutivemono text-sm text-primary leading-normal pl-3 lg:text-black">
                  {proyecto.description}
                </p>
                <p className="font-cutivemono text-xs italic text-primary pl-3 pt-2">
                  {proyecto.technologies}
                </p>
                <div className="flex justify-between mt-4 space-x-4">
                  <a
                    href={proyecto.linkDeploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-quaternary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300 flex items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <FaEye className="mr-2" />
                    View Project
                  </a>
                  <a
                    href={proyecto.linkGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-quinternary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300 flex items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <hr className="border-t-2 border-tertiary my-8 absolute left-0 right-0" />
      </div>
    </section>
  );
};

export default MyProjectsEn;
