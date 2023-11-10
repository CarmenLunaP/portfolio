import React from "react";
import fondo from "../../img/fondo.jpg";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "40px 20px", // Ajuste para dispositivos móviles
    textAlign: "left",
  };

  return (
    <div
      style={headerStyle}
      className="h-70 md:h-150 font-raleway bg-cover bg-no-repeat bg-center"
    >
      <h1
        className="font-inconsolata text-6xl lg:ml-40 md:text-8xl text-quaternary font-bold p-2"
        style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)" }}
      >
        Carmen Luna
      </h1>
      <p className="font-cutivemono text-2xl lg:ml-40  md:text-3xl font-bold text-white pl-4 md:pl-8 pb-8 md:pb-20">
        FrontEnd Developer
      </p>
    </div>
  );
};

export default Header;



// import React from "react";
// import fondo from "../../img/fondo.jpg";

// const Header = () => {
//   const headerStyle = {
//     backgroundImage: `url(${fondo})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     padding: "60px 20px 20px 120px",
//     textAlign: "left",
//   };

//   return (
//     <div
//       style={headerStyle}
//       className=" h-160 font-raleway bg-cover bg-no-repeat bg-center "
//     >
//       <h1
//         className="font-inconsolata text-8xl text-quaternary font-bold p-2"
//         style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)" }}
//       >
//         Carmen Luna
//       </h1>
//       <p className="font-cutivemono text-3xl font-bold text-white pl-8 pb-20">
//         FrontEnd Developer
//       </p>
//     </div>
//   );
// };

// export default Header;
