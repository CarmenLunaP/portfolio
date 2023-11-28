import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-8 md:pl-20 xl:pl-40 pt-12 md:pt-16 lg:pt-20 xl:pt-10 pr-8 md:pr-20 xl:pr-5 pb-20">
      <div className="font-merriweather text-5xl font-extrabold">
        <span className="lg:pl-5 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700">
          Contacto
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20 mt-4 md:ml-40">
        <a
          href="https://www.linkedin.com/in/carmen-luna-cllp/"
          target="_blank"
          rel="noreferrer" 
          className="contact-button"
        >
          <img
            src="https://content.linkedin.com/content/dam/me/about/LinkedIn_Icon.jpg.original.jpg"
            alt="Logo Linkedin"
            className="w-14 h-14"
          />
        </a>

        <a
          href="https://github.com/CarmenLunaP"
          target="_blank"
          rel="noreferrer" 
          className="contact-button"
      
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Logo GitHub"
            className="w-14 h-14"
          />
        </a>

        <div className="flex flex-row items-center gap-4 mt-4 md:ml-0">
          <img
            src="data:image/png;base64,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"
            alt="GMail"
            className="w-14 h-14"
          />
          <a
            href="mailto:carmen.luna.cllp@gmail.com"
            className="text-black text-lg"
          >
            carmen.luna.cllp@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
