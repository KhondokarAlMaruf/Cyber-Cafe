import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  console.log(props);
  const { id, img, name, description, date } = props.programmer;
  return (
    <div className="progmmer">
      <img className="cover" src={img} alt="" />
      <div className="icon">
        <img className="icon-img" src={img} alt="" />
      </div>
      <h2>{description}</h2>
      <a href="">Mark as read</a>
    </div>
  );
};

export default Programmer;
