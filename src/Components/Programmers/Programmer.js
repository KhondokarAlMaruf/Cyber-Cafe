import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  console.log(props);
  const { id, img, name, description, date } = props.programmer;
  return (
    <div>
      <img src={img} alt="" />
      Name : {name}
    </div>
  );
};

export default Programmer;
