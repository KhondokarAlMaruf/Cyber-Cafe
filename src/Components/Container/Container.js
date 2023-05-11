import React, { useEffect, useState } from "react";
import "./Container.css";
import Programmers from "../Programmers/Programmer";
import { toast } from "react-hot-toast";

const Container = () => {
  const [programmers, setProgrammers] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);

  const handleButton = (programmer) => {
    if (buttonClicked) {
      toast.error("Button already clicked!");
      const newBookmark = [...bookmark, programmer];
      setBookmark(newBookmark);
    } else {
      setButtonClicked(true);
      const newBookmark = [...bookmark, programmer];
      setBookmark(newBookmark);
    }
  };

  const handleButtonMarkRead = () => {
    let timeToAdd = 0;
    for (const book of bookmark) {
      timeToAdd += book.time;
    }
    const newTotalTime = totalTime + timeToAdd;
    setTotalTime(newTotalTime);
  };
  return (
    <div className="body-container">
      <div className="programmers-container">
        {programmers.map((programmer) => (
          <Programmers
            key={programmer.id}
            programmer={programmer}
            handleButton={handleButton}
            handleButtonMarkRead={handleButtonMarkRead}
          ></Programmers>
        ))}
      </div>
      <div className="bookmarks-container">
        <p className="time">Spent time on read : {totalTime}</p>
        <div className="bookmark">
          <h4>Bookmarked Blogs: {bookmark.length}</h4>
          {bookmark.map((b) => (
            <p>{b.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
