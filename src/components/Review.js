import React from "react";
import "../styles/App.css";

const Review = (props) => {
  return <div className="review">
    <img src={props.image} className="person-img" alt="person"/>
    <p id={"author-"+props.id} className="author">Name: {props.name}</p>
    <p className="job">Job: {props.job}</p>
    <p className="info">Info: {props.info}</p>
    <button className="prev-btn" onClick={props.handlePrev}>Previous</button>
    <button className="next-btn" onClick={props.handleNext}>Next</button>
    <button className="random-btn" onClick={props.handleRandom}>surprise me</button>
  </div>;
};

export default Review;
