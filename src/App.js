import { useState } from "react";

import Header from './Components/UI/Header.js';
import AboutMe from './Components/Pages/AboutMe.js';
import Project from './Components/Pages/Project.js';
import Contact from './Components/Pages/Contact.js';
import Footer from './Components/UI/Footer.js';

function App() {
  const [activeLink, setActiveLink] = useState('AboutMe');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Header setActiveLink={handleSetActiveLink} activeLink={activeLink} />
      {activeLink === "AboutMe" && <AboutMe />}
      {activeLink === "Project" && <Project />}
      {activeLink === "Contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;
