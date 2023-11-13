import React from "react";

const Footer = () => {
  return (
    <div className="FooterSection">
      <div className="footermiddleway">
        <div className="footergalaxyTab">
          <div className="footergalaxybox">
            <div className="footergalaxy">
              <span>GALAXY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footeraddress">
        <h1>About Us</h1>
        <div>
          <h3>Careers</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms & Conditions</h3>
        </div>
      </div>
      <div className="footercontact">
        <div className="contactbackground">
          <h2>Contact us</h2>
        </div>
        <div className="contactbackground">
          <div className="input-group">
            <input
              type="email"
              className="inputs"
              id="Email"
              name="Email"
              placeholder="Input Email"
              autoComplete="on"
            />
            <input className="button--submit" value="Subscribe" type="submit" />
          </div>
        </div>
        <div className="email">
          <h3>Email : </h3>{" "}
          <h4 style={{ marginLeft: "8px" }}>
            getyourforecast@weathergalore.com
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
