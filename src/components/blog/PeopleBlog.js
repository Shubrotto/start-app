import React from "react";
import "./peopleblog.css";
import PeopleLeftImg from "../../assets/images/people_left.jpeg";
import PeopleCenterImg from "../../assets/images/people_center.jpg";
import PeopleRightImg from "../../assets/images/people_right.jpg";
import PeopleRight2Img from "../../assets/images/people_right-2.jpg";

const PeopleBlog = () => {
  return (
    <div className="people_blog margin_left_right">
      <div className="people_blog_top">
        <h2 className="top_title">Popular blog post we update everyday</h2>
        <p className="top_desc top_desc_people">
          Focus only on the meaning. we take care of the desogn. As soon as the
          meeting end you can expert in one click.
        </p>
      </div>
      <div className="people_blog_bottom">
        <div className="people_blog_bottom_left people_width">
          <img className="People_left_img" src={PeopleLeftImg} alt="" />
          <h4 className="People_left_heading">
            How to work with prototype desgin with adobe xd featuring tools
          </h4>
          <p className="People_left_desc">
            The 2019 Inovation by Design Awards honor the designers and
            businesses solving the problem of today and tomorrow. It is one of
            the most sought-after design
          </p>
        </div>
        <div className="people_blog_bottom_center people_width">
          <h4 className="people_center_heading">
            Antibias receives honorable gift mention at Fast Company's most
            Invation by Design Awards
          </h4>
          <img className="people_center_img" src={PeopleCenterImg} alt="" />
          <h4 className="people_center_heading_2">
            Multiple arbard prototype with Figma
          </h4>
          <p className="people_center_desc">
            Beyond lanched antibias, a Chrome extension that replace LinkedIn
            profile photos
          </p>
        </div>
        <div className="people_blog_bottom_right people_width">
          <div className="people_blog_bottom_img_head">
            <img
              className="people_blog_bottom_img"
              src={PeopleRightImg}
              alt=""
            />
            <h4 className="people_blog_bottom_heading">
              Multiple task wireframing with team management perform better
            </h4>
          </div>
          <div className="people_blog_bottom_img_head">
            <img
              className="people_blog_bottom_img"
              src={PeopleRight2Img}
              alt=""
            />
            <h4 className="people_blog_bottom_heading">
              Team presentation with Latest user interface & experience reach
              more
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleBlog;
