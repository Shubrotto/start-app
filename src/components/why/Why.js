import React from "react";
import "./why.css";
import { IoIosArrowForward, IoIosCheckmarkCircle } from "react-icons/io";
import IdeaImg from "../../assets/images/images.png";

const Why = () => {
  return (
    <div className="why">
      <div className="why_top margin_left_right">
        <ul className="why_list">
          <li className="why_list_item">
            <a href="#">Why you choose our servcies?</a>
          </li>
          <li className="why_list_item">
            <a href="#">What's our business promise?</a>
          </li>
          <li className="why_list_item">
            <a href="#">What's our role model plan?</a>
          </li>
        </ul>
        <hr className="why_hr" />
        <hr className="why-hr-2" />
      </div>
      <div className="why_bottom margin_left_right">
        <div className="why_bottom_left">
          <h3 className="why_heading">
            We will turn your idea in the successful business model framework{" "}
            <img
              className="h3_emoji"
              src="https://whatemoji.org/wp-content/uploads/2020/07/Smiling-Face-With-Halo-Emoji.png"
              alt=""
            />
          </h3>
          <p className="why_desc">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design systme guidlines over
          </p>
          <div className="benefit">
            <p>
              <IoIosCheckmarkCircle className="mark" /> Medical and vision
            </p>
            <p>
              <IoIosCheckmarkCircle className="mark" /> HSAs and FSAs
            </p>
            <p>
              <IoIosCheckmarkCircle className="mark" /> Life insurance
            </p>
            <p>
              <IoIosCheckmarkCircle className="mark" /> Computer benefits
            </p>
          </div>
          <button className="why_explorer_btn">
            Explore more <IoIosArrowForward className="explore_icon" />
          </button>
        </div>
        <div className="why_bottom_right">
          <img className="why_idea_img" src={IdeaImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Why;
