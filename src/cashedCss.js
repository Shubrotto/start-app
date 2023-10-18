import React, { useEffect } from "react";
const cachedStyles = {
  /* resuable css */
  /* title and desc */

  ".margin_left_right": "margin: 0 200px",

  ".top_title": "font-size: 34px; margin-bottom: 20px; color: #0f2137",

  ".top_desc": " width: 34%; text-align: center; color: #0f2137;",
};

function CachedCSS() {
  useEffect(() => {
    const cachedCSS = localStorage.getItem("cachedCSS");
    if (cachedCSS) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedCSS;
      document.head.appendChild(styleTag);
    } else {
      // Convert the CSS object to a string
      const stringifyStyles = (stylesObject) => {
        let styleString = "";
        for (const selector in stylesObject) {
          styleString += `${selector} { ${stylesObject[selector]} } `;
        }
        return styleString;
      };

      // Convert styles object to a string
      const cachedStylesString = stringifyStyles(cachedStyles);

      // Store the styles in localStorage
      localStorage.setItem("cachedCSS", cachedStylesString);

      // Apply the styles
      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedStylesString;
      document.head.appendChild(styleTag);
    }
  }, []);

  return null; // This component doesn't render any content
}

export default CachedCSS;
