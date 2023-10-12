import React from "react";
import "./otherservices.css";
import { IoIosArrowForward } from "react-icons/io";
import DModelImg from "../../assets/images/image-65.png";
import DigitalImg from "../../assets/images/image-66.png";
import BusinessImg from "../../assets/images/image-67.png";
import MarketImg from "../../assets/images/image-58.png";
import DevelopImg from "../../assets/images/image-62.png";
import OnlineImg from "../../assets/images/image-68.png";

const OtherServices = () => {
  return (
    <div className="other_services">
      <div className="margin_left_right">
        <div className="other_services_top">
          <h2 className="top_title">Other services you must appreciate</h2>
          <p className="top_desc top_desc-2">
            Focus only on the meeting we take care of the design. As soon as the
            meeting end you can export in one click into your preferred.
          </p>
        </div>
        <div className="other_services_bottom">
          <div className="other_services_wrapper">
            <div className="services_items">
              <div className="service_item">
                <div className="service_item_left">
                  <img src={DModelImg} alt="" />
                </div>
                <div className="service_item_right">
                  <h4>3D modeling & art</h4>
                  <p>
                    Get your info tests delivered at home collect a sample from
                    the progress tests
                  </p>
                  <button className="learn_more">
                    Learn more{" "}
                    <IoIosArrowForward className="learn_more_button" />
                  </button>
                </div>
              </div>
              <div className="service_item">
                <div className="service_item_left">
                  <img src={DigitalImg} alt="" />
                </div>
                <div className="service_item_right">
                  <h4>Digital promotion</h4>
                  <p>
                    Get your info tests delivered at home collect a sample from
                    the progress tests
                  </p>
                  <button className="learn_more">
                    Learn more{" "}
                    <IoIosArrowForward className="learn_more_button" />
                  </button>
                </div>
              </div>
              <div className="service_item">
                <div className="service_item_left">
                  <img src={BusinessImg} alt="" />
                </div>
                <div className="service_item_right">
                  <h4>Business Enterprise</h4>
                  <p>
                    Get your info tests delivered at home collect a sample from
                    the progress tests
                  </p>
                  <button className="learn_more">
                    Learn more{" "}
                    <IoIosArrowForward className="learn_more_button" />
                  </button>
                </div>
              </div>
            </div>
            <div className="services_items">
              <div className="service_item">
                <div className="service_item_left">
                  <img src={MarketImg} alt="" />
                </div>
                <div className="service_item_right">
                  <h4>Marketing & Advertising</h4>
                  <p>
                    Get your info tests delivered at home collect a sample from
                    the progress tests
                  </p>
                  <button className="learn_more">
                    Learn more{" "}
                    <IoIosArrowForward className="learn_more_button" />
                  </button>
                </div>
              </div>
              <div className="service_item">
                <div className="service_item_left">
                  <img src={DevelopImg} alt="" />
                </div>
                <div className="service_item_right">
                  <h4>Ultimate development</h4>
                  <p>
                    Get your info tests delivered at home collect a sample from
                    the progress tests
                  </p>
                  <button className="learn_more">
                    Learn more{" "}
                    <IoIosArrowForward className="learn_more_button" />
                  </button>
                </div>
              </div>
              <div className="service_item">
                <div className="service_item_left">
                  <img src={OnlineImg} alt="" />
                </div>
                <div className="service_item_right">
                  <h4>Online Support</h4>
                  <p>
                    Get your info tests delivered at home collect a sample from
                    the progress tests
                  </p>
                  <button className="learn_more">
                    Learn more{" "}
                    <IoIosArrowForward className="learn_more_button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
