import React from "react";
import carmen from "../../img/carmen.png";

const AboutEn = () => {
  return (
    <section className="bg-primary p-8 md:p-16 flex flex-col md:flex-row items-center">
      <img
        src={carmen}
        alt="Imagen de Acerca de mí"
        className="w-60 md:w-1/5 h-auto mb-8 md:mb-0 md:mr-8 md:ml-0 rounded-full"
      />

      <div className="md:w-4/5">
        <div className="font-merriweather text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700">
            About me.
          </span>
        </div>
        <div className="text-justify">
          <p className="font-cutivemono text-xl text-primary mt-8">
            ¡Hello! I am a passionate Frontend developer with an inexhaustible
            creative spirit. My mission is to bring to life digital experiences
            that leave a lasting impression. I love combining design and code to
            create innovative solutions that captivate those who use them.
          </p>
          <p className="font-cutivemono text-xl text-primary mt-3">
            I am passionate about technology, and throughout my career, I have
            had the opportunity to work on challenging and collaborative
            projects. My mastery of various technologies translates into
            creating attractive and functional interfaces, always with
            optimization in mind to provide an exceptional user experience.
          </p>
          <p className="font-cutivemono text-xl text-primary mt-3">
            In this portfolio, I have the opportunity to share a part of my work
            with you. Each project represents an opportunity to apply my
            creativity and technical knowledge. My goal is to inspire and
            impress through innovation and design. I invite you to explore these
            projects and join me on this exciting journey.
          </p>
          <hr className="border-t-2 border-tertiary my-8 md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default AboutEn;