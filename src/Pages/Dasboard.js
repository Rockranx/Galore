import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { IoHome } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  AiOutlineMonitor,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseAuth/firebase-config";
import Loader from "./Loader";
const Dasboard = ({ logout }) => {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      // After 5 seconds, set showPage to true
      setShowPage(true);
    }, 50);

    // Clear the timer if the component unmounts before the 5 seconds
    return () => clearTimeout(timer);
  }, []);
  const navigate = useNavigate();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigate("/");
  //     }
  //   });
  // });
  return (
    <div className="flex-j-a width">
      {showPage ? (
        <>
          <div className="wrapper twenty">
            <div className="sidebar">
              <div className=" profile">
                <img
                  src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                  alt="profile_picture"
                />
                <h3> Demo </h3>
                <p> designer </p>
              </div>

              <ul>
                <li>
                  <a href="#" className="active">
                    <span className="icon">
                      <IoHome />
                    </span>
                    <span className="item">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <FaMapLocationDot />
                    </span>
                    <span className="item">My Locations</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <AiOutlineMonitor />
                    </span>
                    <span className="item">Monitor</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <AiOutlineSetting />
                    </span>
                    <span className="item">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="boxes">
            <div className="eighty">
              <div className="logout">
                <button className="logoutIcon" onClick={logout}>
                  <AiOutlineLogout />
                </button>
              </div>
            </div>
            <div className="entire">
              <div className="padds">
                <div className="separateboxes">temp of current locations</div>
                <div className="separateboxes">
                  <div className="profilebox">
                    <div className="sectionboxes1">
                      <h1>Profile</h1>
                    </div>
                    <div className="sectionboxes2">
                      <div className="first">
                        <h2>Name :</h2>
                      </div>
                      <div className="second">
                        <h3>who the fuck know</h3>
                      </div>
                    </div>
                    <div className="sectionboxes2">
                      <div className="first">
                        <h2>Username :</h2>
                      </div>
                      <div className="second">
                        <h3>who the fuck know</h3>
                      </div>
                    </div>
                    <div className="sectionboxes2">
                      <div className="first">
                        <h2>Country :</h2>
                      </div>
                      <div className="second">
                        <h3>who the fuck know</h3>
                      </div>
                    </div>
                    <div className="sectionboxes2">
                      <div className="first">
                        <h2>Password :</h2>
                      </div>
                      <div className="second">
                        <h3>***********************</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="padds">
                <div className="separateboxes">
                  Locations small column of weather of select dropdown item
                </div>
                <div className="separateboxes">Maps</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="fullLoader">
            <Loader />
          </div>
        </>
      )}
    </div>
  );
};

export default Dasboard;
