import { useState, useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const isProgrammaticScroll = useRef(false);

  const handleLinkClick = (link: string): void => {
    isProgrammaticScroll.current = true;
    setActiveLink(link);
    setMenuOpen(false);

    const targetElement = document.getElementById(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 800);
    }
  };

  const handleScroll = (): void => {
    if (isProgrammaticScroll.current) {
      return;
    }
    const sections = ["home", "about", "resume", "contact"];
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector(".Navbar") as HTMLElement;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const elementTop =
          element.offsetTop -
          navbarHeight -
          parseFloat(getComputedStyle(element).scrollMarginTop || "0");
        const elementHeight = element.offsetHeight;

        if (
          scrollPosition >= elementTop &&
          scrollPosition <= elementTop + elementHeight
        ) {
          setActiveLink(section);
          break;
        }
      }
    }
  };

  const handleToggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`Navbar ${menuOpen && "menu-open"}`}>
      <header className="header-wrapper">
        <div className="logo">. io</div>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={handleToggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`ul-header ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeLink === "resume" ? "active" : ""}
              onClick={() => handleLinkClick("resume")}
            >
              CV
            </a>
          </li>
          {/* <li>
            <a href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => handleLinkClick('projects')}>
              Projects
            </a>
          </li> */}
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Navbar;
