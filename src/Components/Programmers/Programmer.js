import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  console.log(props);
  const { id, img, name, description, date, icon } = props.programmer;
  return (
    <div className="progmmer">
      <img className="cover" src={img} alt="" />
      <div className="icon-container">
        <div className="icon">
          <img className="icon-img" src={icon} alt="" />
          <div>
            <p id="name">{name}</p>
            <p>{date}</p>
          </div>
        </div>
        <div>
          <p>
            05 min read <button>!</button>
          </p>
        </div>
      </div>
      <h2>{description}</h2>
      <a href="">Mark as read</a>
    </div>
  );
};

export default Programmer;
