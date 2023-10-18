import React, { useEffect } from "react";
import meetCached from "./meetsuper.css";
import Meet_super from "../../assets/images/image@2x.png";
import Meet_super_2 from "../../assets/images/image-1@2x.png";
import Meet_super_3 from "../../assets/images/image-2@2x.png";
import Meet_super_4 from "../../assets/images/image-3@2x.png";
import Social_icon from "../../assets/images/social@2x.png";
import Social_icon_2 from "../../assets/images/social-1@2x.png";
import Social_icon_3 from "../../assets/images/social-2@2x.png";
import { IoMdArrowDropright } from "react-icons/io";

const MeetSuper = () => {
  useEffect(() => {
    const meetcachedCSS = localStorage.getItem("meetcachedCSS");
    if (meetcachedCSS) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = meetcachedCSS;
      document.head.appendChild(styleTag);
    } else {
      const stringifyStyles = (stylesObject) => {
        let styleString = "";
        for (const selector in stylesObject) {
          styleString += `${selector} { ${stylesObject[selector]} } `;
        }
        return styleString;
      };

      const cachedStylesString = stringifyStyles(meetCached);

      localStorage.setItem("meetcachedCSS", cachedStylesString);

      const styleTag = document.createElement("style");
      styleTag.innerHTML = cachedStylesString;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <div className="meet_super">
      <div className="meet_super_top margin_left_right">
        <h2 className="top_title">Meet our superheros</h2>
        <p className="top_desc top_desc_width">
          Build an incredble workplace and grow your business with Gusto's
          all-in-one platform with amazing contents.
        </p>
      </div>
      <div className="meet_super_bottom">
        <div className="meet_super_items">
          <div className="meet_super_item">
            <img className="meet_super_img" src={Meet_super} alt="" />
            <h4>Emmalee Mclain</h4>
            <p>Product Designer</p>
            <img className="meet_social_icon" src={Social_icon} alt="" />
          </div>
          <div className="meet_super_item">
            <img className="meet_super_img" src={Meet_super_2} alt="" />
            <h4>Daisy Morgan</h4>
            <p>Lead developer</p>
            <img className="meet_social_icon-2" src={Social_icon_2} alt="" />
          </div>
          <div className="meet_super_item meet_super_item_positon">
            <img className="meet_super_img" src={Meet_super_3} alt="" />
            <h4>Ariyanna Hicks</h4>
            <p>Experience Designer</p>
            <img className="meet_social_icon-2" src={Social_icon_3} alt="" />
            <button className="next_button">
              <IoMdArrowDropright className="next_item" />
            </button>
          </div>
          <div className="meet_super_item meet_super_item_opacity">
            <img
              className="meet_super_img meet_super_img_width"
              src={Meet_super_4}
              alt=""
            />
            <h4>Yamilet Hooker</h4>
            <p>User interface Designer</p>
            <img className="meet_social_icon" src={Social_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetSuper;
