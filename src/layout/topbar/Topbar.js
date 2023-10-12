import React, { useState } from "react";
import "./topbar.css";
import HeaderImg from "../../assets/svg/s-1.svg";
import GetStartedImg from "../../assets/svg/path-49.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiMenu } from "react-icons/bi";

function Topbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="topbar">
      <div className="topbar_left">
        <div className="topbar_title_img">
          <img className="topbar_icon" src={HeaderImg} alt="" />
          <h1 className="topbar_title">StartupLanding</h1>
        </div>
        <BiMenu onClick={() => setToggle(!toggle)} className="menu_icon" />
        {toggle && (
          <ul className="topbar_list">
            <li className="topbar_list_item">
              <a href="index.html">Home</a>
            </li>
            <li className="topbar_list_item">
              <a href="adversite">Adversite</a>
              <IoMdArrowDropdown className="list_icon" />
            </li>
            <li className="topbar_list_item">
              <a href="supports">Supports</a>
              <IoMdArrowDropdown className="list_icon" />
            </li>
            <li className="topbar_list_item">
              <a href="about">About</a>
            </li>
          </ul>
        )}
      </div>
      <div className="topbar_right">
        <div className="topbar_right_btn-get">
          <button className="btn btn_login" type="submit">
            Login
          </button>
          <button className="btn btn_get" type="submit">
            Get Started
            <img className="get_start_icon" src={GetStartedImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
