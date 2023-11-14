import React from "react";
import carmen from "../../img/carmen.png";

const About = () => {
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
            Acerca de mí
          </span>
        </div>
        <div className="text-justify">
          <p className="font-cutivemono text-xl text-primary mt-8">
            ¡Hola! Soy una apasionada desarrolladora Frontend con un espíritu
            creativo inagotable. Mi misión es dar vida a experiencias digitales
            que dejen una huella duradera. Me encanta combinar diseño y código
            para crear soluciones innovadoras que cautiven a quienes las utilizan.
          </p>
          <p className="font-cutivemono text-xl text-primary mt-3">
            Soy una apasionada de la tecnología, y a lo largo de mi carrera, he
            tenido la oportunidad de trabajar en proyectos desafiantes y
            colaborativos. Mi dominio de diversas tecnologías se traduce en la
            creación de interfaces atractivas y funcionales, siempre con la
            optimización en mente para ofrecer una experiencia de usuario
            excepcional.
          </p>
          <p className="font-cutivemono text-xl text-primary mt-3">
            En este portafolio, tengo la oportunidad de compartir una parte de mi
            trabajo contigo. Cada proyecto representa una oportunidad para aplicar
            mi creatividad y conocimientos técnicos. Mi objetivo es inspirar e
            impresionar a través de la innovación y el diseño. Te invito a
            explorar estos proyectos y a unirte a mí en este emocionante viaje.
          </p>
          <hr className="border-t-2 border-tertiary my-8 md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default About;


