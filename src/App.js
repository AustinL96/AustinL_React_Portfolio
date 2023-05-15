import { useState } from "react";
import Header from "./Components/UI/Header";
import AboutMe from "./Components/Pages/AboutMe";
import Project from "./Components/Pages/Project";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/UI/Footer";

function App() {
  const [activeLink, setActiveLink] = useState("AboutMe");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  let activePage;
  switch (activeLink) {
    case "AboutMe":
      activePage = <AboutMe />;
      break;
    case "Project":
      activePage = <Project />;
      break;
    case "Contact":
      activePage = <Contact />;
      break;
    default:
      activePage = null;
  }

  return (
    <>
      <Header setActiveLink={handleSetActiveLink} activeLink={activeLink} />
      {activePage}
      <Footer />
    </>
  );
}

export default App;