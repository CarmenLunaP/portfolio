import React from "react";
import { MyCertification } from "./list";

const Certifications = () => {
  const uniqueTypes = Array.from(
    new Set(MyCertification.map((certification) => certification.type))
  );

  return (
    <section className="bg-primary pl-8 md:pl-20 xl:pl-40 pt-5 md:pt-16 lg:pt-20 xl:pt-10 pr-8 md:pr-20 xl:pr-5 xl:pb-10  ">
      <div className="font-merriweather text-5xl font-extrabold">
        <span className="lg:p-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700 ">
          Certificaciones y Educación
        </span>
      </div>

      <div className="flex">
        <div className="lg:p-10 flex-1 mb-8 md:mb-8 lg:mb-0">
          {uniqueTypes.map((type, index) => (
            <div key={index} className="mb-8 md:mb-8 lg: ">
              <h3 className="font-cutivemono text-xl font-bold mt-5 ml-5">{type}</h3>
              <ul className="list-disc ml-10 ">
                {MyCertification.filter(
                  (certification) => certification.type === type
                ).map((certification, index) => (
                  <li key={index} className="font-cutivemono text-lg">
                    {certification.name} - {certification.institute} - {certification.date}
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

        <div className="flex-1 mt-8 md:mt-0 ml-5 xl:ml-20 xl:mt-20">
          

          <div className="mt-8 lg:mt-0">
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
                borderRadius: "90px",
               
              }}
            >
              <img
                src="../../img/pexelsa.jpg"
                alt="Pexels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
     
      </div>
      <hr className="border-t-2 border-tertiary my-8 absolute left-0 right-0" />
    </section>
    
  );
};

export default Certifications;


// import React from "react";
// import { MyCertification } from "./list";

// const Certifications = () => {
//   const uniqueTypes = Array.from(
//     new Set(MyCertification.map((certification) => certification.type))
//   );

//   return (
//     <section className="bg-primary flex flex-col lg:flex-row pl-8 md:pl-20 xl:pl-40 pt-0 md:pt-16 lg:pt-20 xl:pt-40 pr-8 md:pr-20 xl:pr-20">
//       <div className="flex-1 mb-8 lg:mb-0">
//         <div className="font-merriweather text-5xl font-extrabold xl:mb-5">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 only:to-yellow-700 ">
//             Certificaciones y Educación.
//           </span>
//         </div>

//         {uniqueTypes.map((type, index) => (
//           <div key={index} className="mb-8 lg:mb-0">
//             {/* <h3 className="font-cutivemono text-xl font-bold mt-5 ml-5">{type}</h3> */}
//             {MyCertification.filter(
//               (certification) => certification.type === type
//             ).map((certification, index) => (
//               <div
//                 key={index}
//                 className="mb-4 ml-5 md:ml-10 border border-quaternary rounded-lg lg:w-600 lg:h-500 bg-secondary xl:p-3"
//                 style={{ backgroundColor: 'rgba(251, 226, 209, 0.5)' }}
//              >
//                 <h4 className="font-cutivemono text-lg font-bold">
//                   {certification.name}
//                 </h4>
//                 {/* <p className="font-cutivemono text-base text-gray-600">{certification.institute} |</p>
//                   <p className="font-cutivemono text-base text-gray-600">{certification.date}</p> */}
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex-1 mt-8 lg:mt-0 ml-5 xl:ml-10 xl:mt-20">
//           <div className="flex justify-between">
//             <img
//               src="../../img/laboratoria.png"
//               alt="Imagen 1"
//               className="w-50 h-40 object-cover rounded-lg mr-4 transition-transform transform hover:scale-150"
//             />
//             <img
//               src="../../img/reflexion.png"
//               alt="Imagen 2"
//               className="w-50 h-40 object-cover rounded-lg mr-4 transition-transform transform hover:scale-150"
//             />
//             <img
//               src="../../img/PrimerLugar.png"
//               alt="Imagen 3"
//               className="w-50 h-40 object-cover rounded-lg mr-4 transition-transform transform hover:scale-150"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 mt-8 lg:mt-0 ml-5 xl:ml-10 xl:mt-20 xl:w-20 flex items-center">
//         <div
//           className="w-full h-full rounded-full overflow-hidden"
//           style={{
//             boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
//             background:
//               "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
//             borderRadius: "90px",
//             width: '600px',
//             height: '900px',
//           }}
//         >
//           <img
//             src="../../img/pexelsa.jpg"
//             alt="Pexels"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <hr className="border-t-2 border-tertiary my-8 md:hidden" />
//     </section>
//   );
// };

// export default Certifications;
