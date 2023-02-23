import React from 'react'
import img1 from "../Assets/Education.png";
import bar from "../Assets/Bar.png";
import Sarah from "../Assets/Sarah.png";
import View from "../Assets/View.png";
import Share from "../Assets/Share.png";

const Education = () => {
  return (
    <div className="education">
      <img src={img1} alt="" />
      <div className="text-section">
        <div className="text1">
          <h2>🔬️ Education</h2>
        </div>
        <div className="lgtext">
          <div className="text2">
            <h2>
            Tax Benefits for Investment under National Pension <br /> Scheme launched by Government
            </h2>
          </div>
          <div className="pop"><button><img src={bar} alt="" /></button></div>
        </div>
        <div className="text3">
          <h3>
          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
          </h3>
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
    </div>
  )
}

export default Education
