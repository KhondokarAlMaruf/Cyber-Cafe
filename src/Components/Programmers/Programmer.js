import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  const { id, img, name, title, date, icon, time } = props.programmer;
  const handleButton = props.handleButton;
  const handleButtonMarkRead = props.handleButtonMarkRead;

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
            {time} min read
            <button onClick={() => handleButton(props.programmer)}>!</button>
          </p>
        </div>
      </div>
      <h2>{title}</h2>
      <button onClick={() => handleButtonMarkRead(props.programmer)}>
        Mark as read
      </button>
    </div>
  );
};

export default Programmer;
