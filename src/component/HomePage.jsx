import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const randomData = ["UI/UX Designer.", "JS Developer.", "Content Writter."];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index === randomData.length) {
      setIndex(0);
    }
    setTimeout(() => {

      setIndex(index + 1);
    }, 2000);
  }, [index, randomData.length]);

  return (
    <div className="home-container" id="HomePage">
      <div className="text-welcome">
        <span className="welcom-my">WELCOME TO MY WORLD</span>

        <h1 className="text-title">Hi, I’m Jone Doe</h1>

        <span className="slide">{randomData[index]}</span>

        <h2 className="text-color">
          based in USA</h2>
      </div>
    </div>
  );
};

export default HomePage;
