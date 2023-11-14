import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";
import vud from "../asdw.mp4";
import sun from "../sunny.jpg";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./Loader";
const Home = () => {
  const [stateName, setStateName] = useState("");
  const [weatherResponse, setWeatherReponse] = useState(false);
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [geo, setGeo] = useState([]);
  const [respond, setRespond] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherResults, setWeatherResults] = useState([]);
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, setSubmitted] = useState(false);
  const APIkey = process.env.REACT_APP_NOT_OPENWEATHER_API;

  let data = "";
  useEffect(() => {
    async function acquire() {
      try {
        // setIsLoading(true);
        const response = await fetch(
          // `http://api.openweathermap.org/geo/1.0/direct?q=${stateName}&limit=&appid=${APIkey}`
          `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&appid=${APIkey}`
          // `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIkey}`
        );
        if (response.ok) {
          // await // console.log(response.json());
          data = await response.json();
          await setRespond(true);
          setGeo(data[0]);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setLoading(false);
      }
    }
    acquire();
  }, [searchTerm]);
  async function weatherRespond() {
    try {
      setLoading(true);
      if (lat && long) {
        const weatherResponder = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${APIkey}`
        );
        if (weatherResponder.ok) {
          data = await weatherResponder.json();

          setWeatherResults(data.daily);
          setStateName(data.timezone);
          setLoading(false);
          setSubmitted(false);
          setWeatherReponse(true);
        }
      } else {
      }
    } catch (error) {
      // console.log(error);
    }
  }
  useEffect(() => {
    // Unix timestamp
    const timestamp = 1684929490;

    // Convert to milliseconds by multiplying by 1000
    const unixTimestamp = timestamp * 1000;

    // Create a Date object
    const date = new Date(unixTimestamp);

    // Get the individual date and time components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Create an array to map day numbers to day names
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week

    // Construct formatted date and time strings
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    //  console.log("Date: ", formattedDate);
    //  console.log("Time: ", formattedTime);
    //  console.log(dayOfWeek);
  });
  useEffect(() => {
    if (respond === true) {
      try {
        setLong(geo.lon);
        setLat(geo.lat);
        setIsLoaded(true);
      } catch (error) {
        // console.log(error);
      }
    } else {
    }
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    if (searchTerm.length > 4) {
    } else {
      setSearchResults([]);
    }
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <>
      <Navbar />
      <div className="homeSection">
        <div className="middleway">
          <div className="galaxyTab">
            <div className="galaxybox">
              <div className="galaxy">
                <span>GALAXY</span>
              </div>
            </div>
          </div>
          <div className="imagesSection">
            <div className="imagesBlock1">
              <div className="divider1">
                <div className="block1">
                  <div className="innerblock1">
                    <div className="higherdiv">
                      <div className="line"></div>
                      <span>
                        Unleash the power of personalized weather monitoring
                        with Weather Galore! <br />
                        Never be caught off guard by Mother Nature’s whims
                        again!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider2">
                <div className="block2">
                  <div className="innerblock2"></div>
                </div>
              </div>
            </div>
            <div className="imagesBlock2">
              <div className="divider22">
                <div className="block5"></div>
              </div>
              <div className="divider11">
                <div className="block4">
                  <div className="blockbox"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="realtime">
        <div className="realtime-display">
          <div className="display">
            <div className="displayBox">
              <div className="outerlayer">
                <div className="weatherdisplay">
                  <div className="imagedisplay">
                    {weatherResponse === false ? (
                      <>
                        <span className="big">
                          Tailor-made Forecasts for Your Location
                        </span>
                        <p style={{ fontSize: "20px" }}>
                          Get personalized weather reports and forecasts based
                          on your specific location. Stay safe and prepared for
                          whatever the weather brings.
                        </p>
                      </>
                    ) : (
                      <>
                        {weatherResults.map((info, index) => {
                          const timestamp = info.dt;
                          // const timestamp = 1684929490;

                          // Convert to milliseconds by multiplying by 1000
                          const unixTimestamp = timestamp * 1000;

                          // Create a Date object
                          const date = new Date(unixTimestamp);

                          // Get the individual date and time components
                          const year = date.getFullYear();
                          const month = (date.getMonth() + 1)
                            .toString()
                            .padStart(2, "0"); // Month is zero-based
                          const day = date
                            .getDate()
                            .toString()
                            .padStart(2, "0");
                          const hours = date
                            .getHours()
                            .toString()
                            .padStart(2, "0");
                          const minutes = date
                            .getMinutes()
                            .toString()
                            .padStart(2, "0");
                          const seconds = date
                            .getSeconds()
                            .toString()
                            .padStart(2, "0");

                          // Create an array to map day numbers to day names
                          const daysOfWeek = [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                          ];
                          const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week

                          // Construct formatted date and time strings
                          const formattedDate = `${year}-${month}-${day}`;
                          const formattedTime = `${hours}:${minutes}:${seconds}`;
                          return (
                            <>
                              <div className="displayed" key={index}>
                                {info.weather.map((ick, index) => {
                                  return (
                                    <>
                                      <div className="icon">
                                        <div className="iconImage">
                                          <svg
                                            space="preserve"
                                            viewBox="0 0 100 100"
                                            height="50px"
                                            width="50px"
                                            y="0px"
                                            x="0px"
                                            id="Layer_1"
                                            version="1.1"
                                            classname="weather"
                                          >
                                            <image
                                              key={index}
                                              href={`https://openweathermap.org/img/wn/${ick.icon}@4x.png`}
                                              y="0"
                                              x="0"
                                              height="100"
                                              width="100"
                                              id="image0"
                                            />
                                          </svg>
                                        </div>
                                        <div className="iconDesc">
                                          <h5
                                            style={{
                                              textTransform: "capitalize",
                                            }}
                                          >
                                            {ick.description}
                                          </h5>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                                <div className="details">
                                  <div className="top">
                                    <h2>
                                      {dayOfWeek} {formattedDate}
                                    </h2>
                                  </div>
                                  <div className="bottom">
                                    <div className="bottom-upper">
                                      <h5>{info.summary} </h5>
                                    </div>
                                    <div className="bottom-lower">
                                      <div className="mini">
                                        <div
                                          style={{
                                            height: "40%",
                                            width: "100%",
                                            // border: "2px solid red",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: "10px",
                                          }}
                                        >
                                          <h4>Min</h4>
                                        </div>
                                        <div
                                          style={{
                                            height: "60%",
                                            width: "100%",
                                            // border: "2px solid red",/
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        >
                                          <p>{info.temp.min}°K</p>
                                        </div>
                                      </div>
                                      <div className="maxi">
                                        <div
                                          style={{
                                            height: "40%",
                                            width: "100%",
                                            // border: "2px solid red",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: "10px",
                                          }}
                                        >
                                          <h4>Max</h4>
                                        </div>
                                        <div
                                          style={{
                                            height: "60%",
                                            width: "100%",
                                            // border: "2px solid red",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                          }}
                                        >
                                          <p>{info.temp.max}°K</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
                    <div className="slider">
                      <Slider {...settings}>
                        {weatherResults.map((info, index) => {
                          const timestamp = info.dt;
                          // const timestamp = 1684929490;

                          // Convert to milliseconds by multiplying by 1000
                          const unixTimestamp = timestamp * 1000;

                          // Create a Date object
                          const date = new Date(unixTimestamp);

                          // Get the individual date and time components
                          const year = date.getFullYear();
                          const month = (date.getMonth() + 1)
                            .toString()
                            .padStart(2, "0"); // Month is zero-based
                          const day = date
                            .getDate()
                            .toString()
                            .padStart(2, "0");
                          const hours = date
                            .getHours()
                            .toString()
                            .padStart(2, "0");
                          const minutes = date
                            .getMinutes()
                            .toString()
                            .padStart(2, "0");
                          const seconds = date
                            .getSeconds()
                            .toString()
                            .padStart(2, "0");

                          // Create an array to map day numbers to day names
                          const daysOfWeek = [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                          ];
                          const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week

                          // Construct formatted date and time strings
                          const formattedDate = `${year}-${month}-${day}`;
                          const formattedTime = `${hours}:${minutes}:${seconds}`;
                          return (
                            <div style={{}}>
                              <div className="card" key={index}>
                                <p className="city">{formattedDate}</p>
                                <p className="city">{dayOfWeek}</p>
                                {days.map((dtt, index) => {
                                  return (
                                    <>
                                      {/* <p className="weather">{dtt.day}</p> */}
                                    </>
                                  );
                                })}
                                <p className="weather">{info.summary}</p>
                                <svg
                                  space="preserve"
                                  viewBox="0 0 100 100"
                                  height="50px"
                                  width="50px"
                                  y="0px"
                                  x="0px"
                                  id="Layer_1"
                                  version="1.1"
                                  className="weather"
                                >
                                  {" "}
                                  {info.weather.map((ick, index) => {
                                    return (
                                      <>
                                        <image
                                          key={index}
                                          href={`https://openweathermap.org/img/wn/${ick.icon}@4x.png`}
                                          y="0"
                                          x="0"
                                          height="100"
                                          width="100"
                                          id="image0"
                                        />
                                        <div>{ick.description}</div>
                                      </>
                                    );
                                  })}
                                </svg>
                                <p className="temp">32°</p>
                                <div className="minmaxContainer">
                                  <div className="min">
                                    <p className="minHeading">Min</p>
                                    <p className="minTemp">{info.temp.min}°K</p>
                                  </div>
                                  <div className="max">
                                    <p className="maxHeading">Max</p>
                                    <p className="maxTemp">{info.temp.max}°K</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="displayInput">
              {isLoading === false ? (
                <>
                  <div>
                    <div className="inputBox">
                      <input
                        type="text"
                        placeholder="Enter City"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="input"
                      />
                      <button
                        className="button"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        disabled={!searchTerm}
                        onClick={() => {
                          setSubmitted(true);
                          weatherRespond();
                        }}
                      >
                        {submited === false ? (
                          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Submit
                          </div>
                        ) : (
                          <>{loading && <Loader />}</>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {isLoaded === true ? (
                    <div></div>
                  ) : (
                    <div className="loader">
                      <span />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
