import React from "react";
import "./FooterPage.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="footer-content">
          <img
            src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
            alt="logo-symbol-dark"
          />
        </div>

        <div className="social_icon">
          <div className="icon1">
            <FacebookIcon />
          </div>
          <div className="icon1">
            <LinkedInIcon />
          </div>
          <div className="icon1">
            <InstagramIcon />
          </div>
          <div className="icon1">
            <TwitterIcon />
          </div>
        </div>
        <div className="copy">
          <div className="copyright">
            Copyright © 2022 Rainbow-Themes. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
