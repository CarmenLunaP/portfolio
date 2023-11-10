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
            src="https://i.pinimg.com/474x/0b/37/08/0b3708dfbb8f16c4ea3b80b374765159.jpg"
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

// import React from "react";

// const Contact = () => {
//   return (
//     <section className="bg-primary pl-40 pt-5 pr-20 pb-20">
//       <div className="font-merriweather text-5xl font-extrabold">
//         <span className="lg:pl-5 bg-clip-text text-transparent bg-gradient-to-r  from-orange-500 only:to-yellow-700">
//           Contacto
//         </span>
//       </div>

//       <div className=" flex row">

//         <div className="flex items-center gap-4 mt-4 ml-40">
//           <a
//             href=" https://www.linkedin.com/in/carmen-luna-cllp/ "
//             target="_blank"
//             className="contact-button"
//           >
//             <img
//               src="https://content.linkedin.com/content/dam/me/about/LinkedIn_Icon.jpg.original.jpg"
//               alt="Logo Linkedin"
//               className="w-14 h-14 "
//             />
//           </a>
//         </div>

//         <div className="flex items-center gap-4 mt-4 ml-40">
//           <a
//             href=" https://github.com/CarmenLunaP "
//             target="_blank"
//             className="contact-button"
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
//               alt="Logo GitHub"
//               className="w-14 h-14 "
//             />
//           </a>
//         </div>

//         <div className="flex col items-center gap-4 mt-4 ml-40">
//           <div>
//             <img
//               src=" https://i.pinimg.com/474x/0b/37/08/0b3708dfbb8f16c4ea3b80b374765159.jpg "
//               alt="GMail"
//               className="w-14 h-14 "
//             />
//           </div>
//           <div>
//             {/* <p className="text-tertiary text-lg">Correo Electrónico:</p> */}
//             <a
//               href="mailto:tu-email@example.com"
//               className="text-black text-lg"
//             >
//               carmen.luna.cllp@gmail.com
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };
// export default Contact;
