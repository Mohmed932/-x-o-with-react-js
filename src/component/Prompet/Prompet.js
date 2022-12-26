import React, { useRef } from "react";
import "./Prompet.css";

const Prompet = ({ setPromppet, setInputValue, inputValue }) => {
  const text = useRef();
  window.onload = () => {
    text.current.focus();
  };
  const handelName = () => {
    inputValue !== "" ? setPromppet(false) : setPromppet(true);
  };
  return (
    <div className="Prompet">
      <div className="Prompet-Content">
        <h3>Enter Your Name</h3>
        <input
          type="text"
          className="Client_name"
          onChange={(e) => setInputValue(e.target.value)}
          ref={text}
        />
        <button className="btn" onClick={handelName}>
          Send Name
        </button>
      </div>
    </div>
  );
};

export default Prompet;
