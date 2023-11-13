import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Slider1 = () => {
  return (
    <div>  <Slider {...settings}>
    {weatherResults.map((info, index) => {
      return (
        <div style={{}}>
          <div className="card" key={index}>
            <p className="city">{searchTerm}</p>
            {days.map((dtt, index) => {
              return <>{/* <p className="weather">{dtt.day}</p> */}</>;
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
  </Slider></div>
  )
}
