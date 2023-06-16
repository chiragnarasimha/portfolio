import "./_navBar.scss";
import { useEffect, useState } from "react";
// import logo from "../../assets/img/logo.svg";
import navSocialIconFB from "../../assets/img/nav-social-icon-fb.svg";
import navSocialIconInsta from "../../assets/img/nav-social-icon-insta.svg";
import navSocialIconLn from "../../assets/img/nav-social-icon-ln.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // const onUpdateActiveLink = (linkName: string) => {
  //   setActiveLink(linkName);
  // };

  return (
    <nav className={`navbar${scrolled ? " navbar__scrolled" : ""}`}>
      <div id="basic-navbar-nav" className="navbar__container">
        <a href="#home" className={"navbar__logo"}>
          {/* <img src={logo} alt="Logo" /> */}
          CNM
        </a>
        <div className="navbar__links">
          <a
            href="#home"
            className={`${activeLink === "home" ? "active " : ""}navbar__link`}
            onClick={() => {
              setActiveLink("home");
            }}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`${
              activeLink === "skills" ? "active " : ""
            }navbar__link`}
            onClick={() => {
              setActiveLink("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`${
              activeLink === "projects" ? "active " : ""
            }navbar__link`}
            onClick={() => {
              setActiveLink("projects");
            }}
          >
            Projects
          </a>
        </div>
        <span className="navbar__contact">
          <div className="navbar__contact__social__icons">
            <a href="#">
              <img src={navSocialIconFB} alt="" />
            </a>
            <a href="#">
              <img src={navSocialIconInsta} alt="" />
            </a>
            <a href="#">
              <img src={navSocialIconLn} alt="" />
            </a>
          </div>
          <button
            className="navbar__contact__button"
            onClick={() => console.log("Contact Me")}
          >
            <span>Contact Me</span>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
