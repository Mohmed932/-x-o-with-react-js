import React from "react";
import "./Win.css";

const Win = ({ winner, playAgain }) => {
  return (
    <div className="Win">
      <div className="Win-Content">
        <h3>Congratulations {winner}</h3>
        <div className="play-again">
          <button onClick={playAgain} className="btn">
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Win;
