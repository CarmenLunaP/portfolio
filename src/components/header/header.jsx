import React from "react";
import fondo from "../../img/fondo.jpg";
import spFlag from "../../img/sp.png";
import enFlag from "../../img/en.png";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "40px 20px",
    textAlign: "left",
  };

  return (
    <div
      style={headerStyle}
      className="h-70 md:h-150 font-raleway bg-cover bg-no-repeat bg-center relative"
    >
       <div className="flex items-center justify-end">
          <button className="rounded-fullpx-4 py-1 mx-2">
            <img
              src={spFlag}
              alt="Spanish Flag"
              className="w-10 h-10 mr-2 rounded-full"
            />
          </button>
          <button className="rounded-full px-4 py-1 mx-2">
            <img
              src={enFlag}
              alt="English Flag"
              className="w-10 h-10 mr-2 rounded-full"
            />
          </button>
        </div>
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="font-inconsolata text-6xl lg:ml-40 md:text-8xl text-quaternary font-bold p-2"
            style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)" }}
          >
            Carmen Luna
          </h1>
          <p className="font-cutivemono text-2xl lg:ml-40 md:text-3xl font-bold text-white pl-4 md:pl-8 pb-8 md:pb-20">
            FrontEnd Developer
          </p>
        </div>
        
      </div>

     

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
//     padding: "40px 20px",
//     textAlign: "left",
//   };

//   return (
//     <div
//       style={headerStyle}
//       className="h-70 md:h-150 font-raleway bg-cover bg-no-repeat bg-center"
//     >
//       <h1
//         className="font-inconsolata text-6xl lg:ml-40 md:text-8xl text-quaternary font-bold p-2"
//         style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.9)" }}
//       >
//         Carmen Luna
//       </h1>
//       <p className="font-cutivemono text-2xl lg:ml-40  md:text-3xl font-bold text-white pl-4 md:pl-8 pb-8 md:pb-20">
//         FrontEnd Developer
//       </p>
//     </div>
//   );
// };

// export default Header;
