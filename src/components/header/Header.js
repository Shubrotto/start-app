import React from "react";
import "./header.css";
import top_img from "../../assets/images/illustration-1.png";

const Header = () => {
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
