import React from "react";
import "./services.css";
import MarketImg from "../../assets/images/image-58.png";
import DevelopImg from "../../assets/images/image-62.png";
import BussinesImg from "../../assets/images/image-64.png";
import UserImg from "../../assets/images/image-11.png";
import GoogleImg from "../../assets/images/image-12.png";
import PaypalImg from "../../assets/images/image-13.png";
import MicrosoftImg from "../../assets/images/image-14.png";
import DribbleImg from "../../assets/images/image-15.png";
import QuoteImg from "../../assets/images/quote@2x.png";

const Services = () => {
  return (
    <div className="services">
      <div className="top">
        <h2 className="top_title">Growp your startup with our Service</h2>
        <p className="top_desc">
          Build an incredible workplace and grow your business with Gusto's
          all-in-one platform with amazing contents.
        </p>
      </div>
      <div className="center_margin">
        <div className="center_wrapper">
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
              </div>
            </div>
            <div className="service_item">
              <div className="service_item_left">
                <img src={BussinesImg} alt="" />
              </div>
              <div className="service_item_right">
                <h4>Business Enterprise</h4>
                <p>
                  Get your info tests delivered at home collect a sample from
                  the progress tests
                </p>
              </div>
            </div>
          </div>
          <div className="quotes">
            <hr className="quote_hr_2" />
            <hr className="quote_hr" />
            <img src={QuoteImg} alt="" />
            <p>
              "Whatever we create in Qwilr looks absolutely brillian. It helps
              show our work in the best light, and is downright impressive when
              client see a Qwilr Page we havr made for them."
            </p>
            <span>By Denny Albuz, Adviser of Paypal</span>
          </div>
          <div className="hr">
            <hr className="hr_services" />
          </div>
        </div>
      </div>
      <div className="bottom center_margin">
        <div className="logo_items">
          <img className="log_company_logo" src={UserImg} alt="" />
          <img className="log_company_logo" src={GoogleImg} alt="" />
          <img className="log_company_logo" src={PaypalImg} alt="" />
          <img className="log_company_logo" src={MicrosoftImg} alt="" />
          <img className="log_company_logo" src={DribbleImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
