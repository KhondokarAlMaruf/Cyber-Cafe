import React, { useEffect, useState } from "react";
import "./Container.css";

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
        <h2>Programmers : {programmers.length}</h2>
      </div>
      <div className="bookmarks-container">
        <h2>Bookmarks summery</h2>
      </div>
    </div>
  );
};

export default Container;
