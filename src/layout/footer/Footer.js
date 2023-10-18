import React, { useEffect } from "react";
import footerCached from "./footer.css";
import Img from "../../assets/svg/s-1.svg";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import { PiDribbbleLogoFill } from "react-icons/pi";

const Footer = () => {
  useEffect(() => {
    const footercachedCSS = localStorage.getItem("footercachedCSS");
    if (footercachedCSS) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = footercachedCSS;
      document.head.appendChild(styleTag);
    } else {
      const stringifyStyles = (stylesObject) => {
        let styleString = "";
        for (const selector in stylesObject) {
          styleString += `${selector} { ${stylesObject[selector]} } `;
        }
        return styleString;
      };

      const cachedStylesString = stringifyStyles(footerCached);

      localStorage.setItem("footercachedCSS", cachedStylesString);

      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedStylesString;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <div className="footer">
      <div className="footer_wrapper margin_left_right">
        <div className="footer_row footer_row_1">
          <div className="logo_title">
            <img src={Img} alt="" />
            <h2>StartupLanding</h2>
          </div>
          <a href="term">Terms of use | privacy</a>
          <p>Copyright by 2023 Shubrotto,Inc</p>
        </div>
        <div className="footer_row">
          <h4 className="footer_title">About Us</h4>
          <ul className="footer_list">
            <li className="footer_list_item">Support Center</li>
            <li className="footer_list_item">Customer Support</li>
            <li className="footer_list_item">About Us</li>
            <li className="footer_list_item">Copyright</li>
          </ul>
        </div>
        <div className="footer_row">
          <h4 className="footer_title">Our Information</h4>
          <ul className="footer_list">
            <li className="footer_list_item">Return Policy</li>
            <li className="footer_list_item">Privacy Policy</li>
            <li className="footer_list_item">Term & Conditions</li>
            <li className="footer_list_item">Site Map</li>
          </ul>
        </div>
        <div className="footer_row">
          <h4 className="footer_title">My Account</h4>
          <ul className="footer_list">
            <li className="footer_list_item">Press inquires</li>
            <li className="footer_list_item">Social Media</li>
            <li className="footer_list_item">directoris</li>
            <li className="footer_list_item">Images & B-roll</li>
          </ul>
        </div>
        <div className="footer_row">
          <h4 className="footer_title">Connect</h4>
          <ul className="footer_list_social">
            <li className="footer_list_item">
              <MdOutlineFacebook className="footer_social_icon color_icon" />
              Facebook
            </li>
            <li className="footer_list_item">
              <AiOutlineTwitter className="footer_social_icon color_icon" />{" "}
              Twitter
            </li>
            <li className="footer_list_item">
              <BiLogoGithub className="footer_social_icon color_icon_2" />
              Github
            </li>
            <li className="footer_list_item">
              <PiDribbbleLogoFill className="footer_social_icon color_icon_3" />
              Dribble
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
