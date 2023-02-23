import React from "react";
import img1 from "../Assets/Education.png";
import bar from "../Assets/Bar.png";
import Sarah from "../Assets/Sarah.png";
import View from "../Assets/View.png";
import Share from "../Assets/Share.png";
import Calender from "../Assets/Calender.png";
import location from "../Assets/Location.png";

const Event = () => {
  return (
    <div className="event">
      <img src={img1} alt="" />
      <div className="text1">
        <h3>🗓️ Meetup</h3>
      </div>
      <div className="lgtext">
        <div className="text2">
          <h2>
            Tax Benefits for Investment under National Pension <br /> Scheme
            launched by Government
          </h2>
        </div>
        <img src={bar} alt="" />
      </div>
      <div className="event-details">
        <div className="date">
          <img src={Calender} alt="" />
          <h2>Fri, 12 Oct, 2018</h2>
        </div>
        <div className="location"></div>
          <img src={location} alt="" />
          <h2>Ahmedabad, India</h2>
      </div>



      <div className="user">
        <div className="sarthak">
          <img src={Sarah} alt="" />
        </div>
        <div className="text4">
          <h2>Sarah West</h2>
        </div>
        <div className="view">
          <img src={View} alt="" />
        </div>
        <div className="text4">
          <h3>1.4k views</h3>
        </div>
        <div className="share">
          <img src={Share} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Event;
