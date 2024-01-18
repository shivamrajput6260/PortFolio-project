import React, { useState, useEffect } from "react";
import "./HeaderNew.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";


const HeaderNew = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("HomePage");
  const [scrolled, setScrolled] = useState(false);
  const [cookies, setCookies] = useCookies(["login"]);
  const [login, setLogin] = useState(cookies.login);

  useEffect(() => {
    let data = cookies.login;
    setLogin(data);
  });

  const HandleLogout = () => {
    setCookies("login", "false");
    setLogin(false);
    navigate("/login");
  }

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="wrapper">
        <img
          src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png"
          alt="logo-symbol-dark"
        />
        <div className="menu" style={{ display: isOpen ? "block" : "none" }}>
          <ul className="nav-item">
            <li className={` ${activeLink === "HomePage" ? "active" : ""}`}>
              <Link
                to="HomePage"
                onClick={() => handleLinkClick("HomePage")}
                className="scroll"
              >
                <span>Home</span>
              </Link>
            </li>

            <li className={` ${activeLink === "About" ? "active" : ""}`}>
              <Link
                to="About"  // Check that "About" matches the ID of the About section
                smooth={true}
                duration={500}
                className="scroll"
                onClick={() => handleLinkClick("About")}
              >
                <span> About</span>
              </Link>
            </li>
            <li className={` ${activeLink === "Service" ? "active" : ""}`}>
              <Link
                to="Service"  // Check that "Service" matches the ID of the Service section
                smooth={true}
                duration={500}
                className="scroll"
                onClick={() => handleLinkClick("Service")}
              >
                <span>  Service</span>
              </Link>
            </li>


            <li className={` ${activeLink === "PortFolio" ? "active" : ""}`}>
              <Link
                to="PortFolio"
                smooth={true}
                duration={500}
                className="scroll"
                onClick={() => handleLinkClick("PortFolio")}
              >
                <span>PortFolio</span>
              </Link>
            </li>

            <li className={` ${activeLink === "Blog" ? "active" : ""}`}>
              <Link
                to="Blog"
                smooth={true}
                duration={500}
                className="scroll"
                onClick={() => handleLinkClick("Blog")}
              > 
                <span>Blog</span>
              </Link>
            </li>

            <li className={` ${activeLink === "Contact" ? "active" : ""}`}>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="scroll"
                onClick={() => handleLinkClick("Contact")}
              >
                <span>Contact</span>
              </Link>
            </li>

            {/* ... other list items ... */}
          </ul>
        </div>
      </div>

      <div className="header-icons">
        <div>
          <a href="#">
            <FaFacebook className="icons" />
          </a>
          <a href="#">
            <IoLogoLinkedin className="icons" />
          </a>
          <a href="#">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="#">
            <AiFillTwitterCircle className="icons" />
          </a>
        </div>

        <div className="btn_now">
          <button className="btn-buy-now">Buy now</button>

          {login ? (
            <button type="button" className="btn-buy-now" onClick={HandleLogout}>Logout

            </button>) : <button type="button" className="btn-buy-now"><RouterLink to="/Register"
            >Sign Up</RouterLink>
          </button>}



        </div>
      </div>
    </div>

  );
};

export default HeaderNew;
