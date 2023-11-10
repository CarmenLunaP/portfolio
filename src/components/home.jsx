import React from 'react';
import Header from './header/header.jsx';
import About from './aboutme/aboutme.jsx';
import MyProjects from './myprojects/myprojects.jsx';
import MyTools from './mytools/mytools.jsx';
import Certifications from './certifications/certifications.jsx';
import Contact from './contact/contact.jsx';
import DownloadCV from './downloadcv/downloadcv';


const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <MyProjects />
      <MyTools />
      <Certifications />
      <Contact />
      {/* <DownloadCV /> */}
    </div>
  );
};

export default Home;
