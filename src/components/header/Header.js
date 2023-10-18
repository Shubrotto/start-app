import React, { useEffect } from "react";
import headerCached from "./header.css";
import top_img from "../../assets/images/illustration-1.png";

const Header = () => {
  useEffect(() => {
    const headercachedCSS = localStorage.getItem("headercachedCSS");
    if (headercachedCSS) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = headercachedCSS;
      document.head.appendChild(styleTag);
    } else {
      const stringifyStyles = (stylesObject) => {
        let styleString = "";
        for (const selector in stylesObject) {
          styleString += `${selector} { ${stylesObject[selector]} } `;
        }
        return styleString;
      };

      const cachedStylesString = stringifyStyles(headerCached);

      localStorage.setItem("headercachedCSS", cachedStylesString);

      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedStylesString;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_top">
          <h1 className="header_title">
            Creativity starts with viewing the whole world defferently
          </h1>
          <p className="header_paragraph">
            A service agency with customer satisfaction
          </p>
          <button className="header_btn" type="submit">
            Get Started
          </button>
        </div>
        <div className="header_bottom">
          <img className="top_services_img" src={top_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
