import React, { useState } from 'react';
import Header from './components/header/header.jsx';
import About from './components/aboutme/aboutme.jsx';
import AboutEn from './components/aboutme/aboutmeEn.jsx';
import MyProjects from './components/myprojects/myprojects.jsx';
import MyProjectsEn from './components/myprojects/myprojectsEn.jsx';
import MyTools from './components/mytools/mytools.jsx';
import MyToolsEn from './components/mytools/mytoolsEn.jsx';
import Certifications from './components/certifications/certifications.jsx';
import CertificationsEn from './components/certifications/certificationsEn.jsx';
import Contact from './components/contact/contact.jsx';
import ContactEn from './components/contact/contactEn.jsx';

const App = () => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <Header switchLanguage={switchLanguage} />
      {language === 'es' ? <About /> : <AboutEn />}
      {language === 'es' ? <MyProjects /> : <MyProjectsEn />}
      {language === 'es' ? <MyTools /> : <MyToolsEn />}
      {language === 'es' ? <Certifications  /> : <CertificationsEn />}
      {language === 'es' ? <Contact  /> : <ContactEn />}
     
    </div>
  );
};





export default App;
