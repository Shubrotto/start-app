import React from "react";
import "./form.css";

const Form = () => {
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
