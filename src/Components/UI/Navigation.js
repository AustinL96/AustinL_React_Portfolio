

function Navigation(props) {
  const handleLinkClick = (link, event) => {
    event.preventDefault();
    props.setActiveLink(link);
  };

  return (
    <nav>
      <a
        href="/aboutme"
        className={props.activeLink === "AboutMe" ? "active" : ""}
        onClick={(e) => handleLinkClick("AboutMe", e)}
      >
        About Me
      </a>
      <span>|</span>
      <a
        href="/portfolio"
        className={props.activeLink === "Project" ? "active" : ""}
        onClick={(e) => handleLinkClick("Project", e)}
      >
        Portfolio
      </a>
      <span>|</span>
      <a
        href="/contact"
        className={props.activeLink === "Contact" ? "active" : ""}
        onClick={(e) => handleLinkClick("Contact", e)}
      >
        Contact
      </a>
      <span>|</span>
      <a href="/AustinLDeveloperResume.pdf" download>
        Download My Resume 📩
      </a>
    </nav>
  );
}

export default Navigation;