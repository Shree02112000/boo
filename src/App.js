// App.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    switch (yesSize) {
      case 1:
        setMessage("En Pasama Pesamata!");
        break;
      case 2:
        setMessage("Papa Pavam!");
        break;
      case 3:
        setMessage("Hey Gundu Adichi Parakavitruvan!");
        break;
      case 4:
        setMessage(
          "Hey Gundu! Yes Press Panu Idhuku Mela Onu Ila No Press Panna Varadhuku!"
        );
        break;
      default:
        setMessage(null);
        break;
    }
    setYesSize((prevSize) => prevSize + 1);
  };

  const handleYesClick = () => {
    // Redirect to "/boo" using React Router v6
    navigate("/boo");
  };

  return (
    <div className="container">
      <h1>Question: Pasama Pesuviya?</h1>
      <img
        src="https://i.pinimg.com/originals/74/c8/b9/74c8b9ec15202192a09c540d75e14aa6.gif"
        alt="Bubududu GIF"
        style={{ width: "300px" }}
      />
      <button className="no-button" onClick={handleNoClick}>
        No
      </button>
      <button
        id="yesButton"
        className={`yes-button ${yesSize > 1 ? "larger" : ""}`}
        onClick={handleYesClick}
      >
        Yes
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
