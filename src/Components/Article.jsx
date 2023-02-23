import React from "react";

import img1 from "../Assets/Article-img.png";
import bar from "../Assets/Bar.png";
import Sarthak from "../Assets/Sarthak.png";
import View from "../Assets/View.png";
import Share from "../Assets/Share.png";

const Article = () => {
  return (
    <div>
      <img src={img1} alt="" />
      <div className="text-section">
        <div className="text1">
          <h2>✍️ Article</h2>
        </div>
        <div className="lgtext">
          <div className="text2">
            <h2>What if famous brands had regular fonts? Meet <br /> RegulaBrands!</h2>
          </div>
          <img src={bar} alt="" />
        </div>
        <div className="text3">
          <h3>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </h3>
        </div>
        <div className="user">
          <img src={Sarthak} alt="" />
          <div className="text4">
            <h2>Sarthak Kamra</h2>
          </div>
          <img src={View} alt="" />
          <div className="text4">
            <h3>1.4k views</h3>
          </div>
          <div className="share">
            <img src={Share} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
