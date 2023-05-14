

function Navigation(props) {

    return (
        <nav>
          <a 
            href="#" 
            className={props.activeLink === "AboutMe" ? "active" : ""}
            onClick={() => props.setActiveLink("AboutMe")}
          >
            About Me
          </a>
          <span>|</span>
          <a 
            href="#" 
            className={props.activeLink === "Project" ? "active" : ""}
            onClick={() => props.setActiveLink("Project")}
          >
            Portfolio
          </a>
          <span>|</span>
          <a 
            href="#" 
            className={props.activeLink === "Contact" ? "active" : ""}
            onClick={() => props.setActiveLink("Contact")}
          >
            Contact
          </a>
          <span>|</span>
          <a href="/AustinLDeveloperResume.pdf" download>Download My Resume 📩</a>
        </nav>
      );
}

export default Navigation