
import React from 'react';
import { MyCertification } from './list';

const Certifications = () => {
  // Obtén todos los tipos únicos presentes en MyCertification
  const uniqueTypes = Array.from(new Set(MyCertification.map(certification => certification.type)));

  return (
    <section className="bg-primary flex flex-col lg:flex-row pl-8 md:pl-20 xl:pl-40 pt-0 md:pt-16 lg:pt-20 xl:pt-40 pr-8 md:pr-20 xl:pr-20">
      <div className="flex-1 mb-8 lg:mb-0">
        <div className="font-merriweather text-5xl font-extrabold xl:mb-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700 ">
            Certificaciones y Educación
          </span>
        </div>

        {uniqueTypes.map((type, index) => (
          <div key={index} className="mb-8 lg:mb-0">
            {/* <h3 className="font-cutivemono text-xl font-bold mt-5 ml-5">{type}</h3> */}
            {MyCertification
              .filter(certification => certification.type === type)
              .map((certification, index) => (
                <div key={index} className="mb-4 ml-5 md:ml-10 border border-quaternary rounded-lg lg:w-500 lg:h-500 bg-secondary xl:p-3">
                  <h4 className="font-cutivemono text-lg font-bold">{certification.name}</h4>
                  {/* <p className="font-cutivemono text-base text-gray-600">{certification.institute} |</p>
                  <p className="font-cutivemono text-base text-gray-600">{certification.date}</p> */}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="flex-1 mt-8 lg:mt-0 ml-5 xl:ml-10 xl:mt-20 xl:w-20 flex items-center">
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))',
            borderRadius: '90px', // Puedes ajustar este valor según tus preferencias
          }}
        >
          <img
            src="../../img/pexelsa.jpg"
            alt="Pexels"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <hr className="border-t-2 border-tertiary my-8 md:hidden" />
    </section>
  );
};

export default Certifications;

// import React from 'react';
// import { MyCertification } from './list';
// const Certifications = () => {
//   // Obtén todos los tipos únicos presentes en MyCertification
//   const uniqueTypes = Array.from(new Set(MyCertification.map(certification => certification.type)));

//   return (
//     <section className="bg-primary pl-40 pt-20 pr-20">
//        <div className="font-merriweather text-5xl font-extrabold">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r  from-orange-500 only:to-yellow-700">
//           Certificaciones y Educación
//           </span>
//         </div>
      
//       {uniqueTypes.map((type, index) => (
//         <div key={index}>
//           <h3 className="font-cutivemono text-xl font-bold mt-5 ml-5">{type}</h3>
//           {MyCertification
//             .filter(certification => certification.type === type)
//             .map((certification, index) => (
//               <div key={index} className="mb-4 ml-10 border border-quaternary rounded-lg w-500 h-500 bg-secondary p-6">
//                 <h4 className="font-cutivemono  text-lg font-bold">{certification.name}</h4>
//                 <p className="font-cutivemono text-base text-gray-600">{certification.institute}</p>
//                 <p className="font-cutivemono text-base text-gray-600">{certification.date}</p>
//               </div>
//             ))}
//         </div>
//       ))}
//           <hr className="border-t-2 border-tertiary my-8 absolute left-0 right-0" />
//     </section>
//   );
// };

// export default Certifications;


