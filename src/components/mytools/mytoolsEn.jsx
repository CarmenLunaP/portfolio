import React from 'react';
import { Mytechnologies } from "./Tecnology.js";

const ToolsEn = () => {
  const typeColors = {
    Frontend: 'bg-white',
    Tools: 'bg-white',
    Other: 'bg-white',
  };

  const uniqueTypes = Array.from(new Set(Mytechnologies.map(skill => skill.type)));

  return (
    <section className="bg-primary p-8 md:p-16 lg:p-10 xl:pl-40">
      <div className="font-merriweather text-5xl font-extrabold">
        <span className="lg:p-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700">
        Tools and Technologies
        </span>
      </div>

      {uniqueTypes.map((type, index) => (
        <div key={index} className="mb-8">
          <h3 className="font-cutivemono text-xl font-bold mt-5 ml-5 lg:pl-10" >{type}</h3>
          <div className="flex flex-wrap gap-4 justify-center md:ml-0 p-5 lg:pl-10">
            {Mytechnologies.filter(skill => skill.type === type).map((skill, index) => (
              <div
                key={index}
                className={`p-2 border border-orange-600 ${typeColors[type]} rounded-md w-40 h-20 flex items-center gap-2 justify-center`}
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-7 h-7"
                />
                <span className="text-lg font-mono font-bold text-black">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <hr className="border-t-2 border-tertiary my-8 absolute left-0 right-0" />
    </section>
  );
};

export default ToolsEn;
