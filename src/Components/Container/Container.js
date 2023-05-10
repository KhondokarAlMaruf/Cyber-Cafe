import React, { useEffect, useState } from "react";
import "./Container.css";
import Programmers from "../Programmers/Programmer";

const Container = () => {
  const [programmers, setProgrammers] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);
  return (
    <div className="body-container">
      <div className="programmers-container">
        {programmers.map((programmer) => (
          <Programmers
            key={programmer.id}
            programmer={programmer}
          ></Programmers>
        ))}
      </div>
      <div className="bookmarks-container">
        <h2>Bookmarks summery</h2>
      </div>
    </div>
  );
};

export default Container;
