import React from "react";
import "./Header.css";
import Maruf from "../../Image/Maruf.jpg";

const Header = () => {
  return (
    <div className="header">
      <h2>Cyber Cafe</h2>
      <img src={Maruf} alt="" />
    </div>
  );
};

export default Header;
