import React from "react";
import { Route, Routes } from "react-router";
import { Router } from "react-router-dom";
import DA from "../Assets/DA.png";
import GL from "../Assets/Group.png";
import AllPosts from "./AllPosts";
import Article from "./Article";
import Education from "./Education";
import Event from "./Event";

const PostNav = () => {
  return (
    <div className="postnav">
      <div className="posts">
        <div className="all active">
          <a href="/allPosts">All Posts(32)</a>
        </div>
        <div className="other active">
          <a href="/article">Article</a>
        </div>
        <div className="other active">
          <a href="/event">Event</a>
        </div>
        <div className="other active">
          <a href="/education">Education</a>
        </div>
        <div className="other active">
          <a href="/job">Job</a>
        </div>
      </div>
      <div className="buttons">
        <div className="btn1">
          <h2>Write a Post</h2>
          <img src={DA} alt="" />
        </div>
        <div className="btn2">
          <img src={GL} alt="" />
          <h2>Join Group</h2>
        </div>
      </div>
      
    </div>
  );
};

export default PostNav;
