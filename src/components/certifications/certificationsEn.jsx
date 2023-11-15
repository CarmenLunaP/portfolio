import React from "react";
import { MyCertificationEn } from "./listEn";

const CertificationsEn = () => {
  const uniqueTypes = Array.from(
    new Set(MyCertificationEn.map((certification) => certification.type))
  );

  return (
    <section className="bg-primary pl-8 md:pl-20 xl:pl-40 pt-5 md:pt-16 lg:pt-20 xl:pt-10 pr-8 md:pr-20 xl:pr-5 xl:pb-10">
    <div className="flex justify-between flex-col lg:flex-row">
      <div className="font-merriweather text-5xl font-extrabold mb-4 lg:mb-0 text-center lg:text-left">
        <span className="lg:p-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700">
        Certifications and Education
        </span>
      </div>
      <div className="ml-450 lg:pt-2 text-center">
        <div className="mb-25 lg:mb-0 lg:mr-80">
          <a
            href={"https://drive.google.com/drive/folders/1_JMpJJBX4qxzmqswXOGoPwCBaOb-zDxc?usp=drive_link"}
            target="_blank"
            rel="noreferrer"
            className="bg-quaternary text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 w-30 md:w-full text-center block mx-auto lg:w-60"
          >
            CV
          </a>
        </div>
      </div>
    </div>

      <div className="flex">
        <div className="lg:p-10 flex-1 mb-8 md:mb-8 lg:mb-0">
          {uniqueTypes.map((type, index) => (
            <div key={index} className="mb-8 md:mb-8 lg: ">
              <h3 className="font-cutivemono text-xl font-bold mt-5 ml-5">
                {type}
              </h3>
              <ul className="list-disc ml-10 ">
                {MyCertificationEn.filter(
                  (certification) => certification.type === type
                ).map((certification, index) => (
                  <li key={index} className="font-cutivemono text-lg">
                    {certification.name} - {certification.institute} -{" "}
                    {certification.date}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex justify-between">
            <img
              src="../../img/laboratoria.png"
              alt="Imagen 1"
              className="w-1/3 md:w-1/4 object-cover rounded-lg mr-4 transition-transform transform hover:scale-150"
            />
            <img
              src="../../img/reflexion.png"
              alt="Imagen 2"
              className="w-1/3 md:w-1/4 object-cover rounded-lg mr-4 transition-transform transform hover:scale-150"
            />
            <img
              src="../../img/PrimerLugar.png"
              alt="Imagen 3"
              className="w-1/3 md:w-1/4 object-cover rounded-lg mr-4 transition-transform transform hover:scale-150"
            />
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0 ml-5 xl:ml-40 xl:mt-20">
          <div className="mt-8 lg:mt-0">
            <div
              className="w-full h-full rounded-full overflow-hidden lg:w-2/3"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
                borderRadius: "90px",
              }}
            >
              <img
                src="../../img/notas.jpg"
                alt="Pexels"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-tertiary my-8 absolute left-0 right-0" />
    </section>
  );
};

export default CertificationsEn;