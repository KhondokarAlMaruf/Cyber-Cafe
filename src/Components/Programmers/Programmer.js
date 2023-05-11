import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  const { id, img, name, title, date, icon, time } = props.programmer;
  const handleButton = props.handleButton;

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
            {time}{" "}
            <button onClick={() => handleButton(props.programmer)}>!</button>
          </p>
        </div>
      </div>
      <h2>{title}</h2>
      <a href="">Mark as read</a>
    </div>
  );
};

export default Programmer;
