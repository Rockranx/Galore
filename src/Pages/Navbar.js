import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="navContainer">
        <div className="nav-ulBox">
          <div className="first-box">
            <div className="mb-box">
              <span>Weather Galore</span>

          <div className="displayed">
             

          </div>
            </div>
          </div>
          {openMenu === false ? (
            <div></div>
          ) : (
            <div className="second-box">
              <ul className="nav-ul">
                <div className="li-b">
                  <li>
                    <div className="li-box">
                      <span>Weather</span>
                    </div>
                  </li>
                  <li>
                    <div className="li-box">
                      <span>Monitor</span>
                    </div>
                  </li>
                  <li>
                    <div className="li-box">
                      <span>Profile</span>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          )}
          <div className="second-box">
              {/* <ul className="nav-ul">
                <div className="li-b">
                  <li>
                    <div className="li-box">
                      <span>Weather</span>
                    </div>
                  </li>
                  <li>
                    <div className="li-box">
                      <span>Monitor</span>
                    </div>
                  </li>
                  <li>
                    <div className="li-box">
                      <Link to="/signin" className="link">
                      <span>Profile</span>
                      </Link>
                    </div>
                  </li>
                </div>
              </ul> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
