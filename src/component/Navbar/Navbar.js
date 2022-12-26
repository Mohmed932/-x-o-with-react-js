import React from "react";
import "./Navbar.css";

const Navbar = ({ playAgain, inputValue, computer, player }) => {
  return (
    <div className="Navbar">
      <div className="Game players">
        <h4>
          {inputValue} :<span>{player}</span>
        </h4>
        <h4>
          Computer :<span>{computer}</span>
        </h4>
      </div>
      <div className="Game game-name">
        <h1>
          X <span>|</span> O Game
        </h1>
      </div>
      <div className="Game">
        <button onClick={playAgain} className="btn">
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Navbar;
