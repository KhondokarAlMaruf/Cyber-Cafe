import React, { useEffect, useState } from "react";
import "./Container.css";
import Programmers from "../Programmers/Programmer";

const Container = () => {
  const [programmers, setProgrammers] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);
  const handleButton = (programmer) => {
    const newBookmark = [...bookmark, programmer];
    setBookmark(newBookmark);
  };

  return (
    <div className="body-container">
      <div className="programmers-container">
        {programmers.map((programmer) => (
          <Programmers
            key={programmer.id}
            programmer={programmer}
            handleButton={handleButton}
          ></Programmers>
        ))}
      </div>
      <div className="bookmarks-container">
        <h4>Bookmarked Blogs: {bookmark.length}</h4>
        <p>name: {bookmark[0]?.title}</p>
      </div>
    </div>
  );
};

export default Container;
