import React, { useEffect } from "react";
import formCached from "./form.css";

const Form = () => {
  useEffect(() => {
    const formCachedCSS = localStorage.getItem("formCachedCSS");
    if (formCachedCSS) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = formCachedCSS;
      document.head.appendChild(styleTag);
    } else {
      const stringifyStyles = (stylesObject) => {
        let styleString = "";
        for (const selector in stylesObject) {
          styleString += `${selector} { ${stylesObject[selector]} } `;
        }
        return styleString;
      };

      const cachedStylesString = stringifyStyles(formCached);

      localStorage.setItem("formCachedCSS", cachedStylesString);

      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedStylesString;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <div className="form">
      <div className="background_img">
        <div className="form_wrapper margin_left_right">
          <div className="form_left form_margin">
            <h2>Like our service? Subscribe us</h2>
            <p>
              We have more than thousand of creative entreneurs and start
              joining our business
            </p>
          </div>
          <div className="form_right form_margin">
            <form>
              <div className="form_div">
                <input placeholder="Enter Email address" type="email" />
                <button>Subscribe</button>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <label htmlFor="check">
                  Don't provide any promotional message.
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
