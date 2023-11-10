module.exports = {
  purge: [
    "./src/components/header/header.jsx",
    "./src/components/aboutme/aboutme.jsx",
    "./src/components/myprojects/myprojects.jsx",
    "./src/components/mytools/mytools.jsx",
    "./src/components/certifications/certifications.jsx",
    "./src/components/contact/contact.jsx",
    "./src/components/downloadcv/downloadcv.jsx",
  ],
  content: [
    "./src/components/header/header.jsx",
    "./src/components/aboutme/aboutme.jsx",
    "./src/components/myprojects/myprojects.jsx",
    "./src/components/mytools/mytools.jsx",
    "./src/components/certifications/certifications.jsx",
    "./src/components/contact/contact.jsx",
    "./src/components/downloadcv/downloadcv.jsx",
  ],
  theme:{
    extend:  {
      fontFamily: {
       
        inconsolata: ["Inconsolata", "monospace"], 
        montserrat: ["Montserrat", "sans"], 
        anton: ["Anton", "sans"], 
        cutivemono: ['Cutive Mono', 'monospace'],
        merriweather: ["merriweather", "monospace" ]
      },
      backgroundColor: {
        'primary': '#FFF8F0',
        'secondary': '#FBE2D1',
        'tertiary': '#C3CDC1',
        'quaternary': '#D2600F',
        'quinternary': '#a9b3a7',
      
      },
      textColor: {
        'primary': '#2C3F42',
        'secondary': '#FBE2D1',
        'tertiary': '#C3CDC1',
        'quaternary': '#D2600F',

        
      },
      borderColor: {
        'primary': '#FFF8F0',
        'secondary': '#FBE2D1',
        'tertiary': '#C3CDC1',
        'quaternary': '#D2600F',
       
       
      },
      gradientColorStopPositions: {
        'primary': '0%',
        'tertiary': '33%',
        'quaternary': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
};
