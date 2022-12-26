/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Prompet from "./component/Prompet/Prompet";
import Win from "./component/Win/Win";

const App = () => {
  let Step = "X";
  const [winner, setwinner] = useState("Some one");
  const [player, setplayer] = useState(0);
  const [computer, setcomputer] = useState(0);
  const [show, setShow] = useState(false);
  const [Promppet, setPromppet] = useState(true);
  const [inputValue, setInputValue] = useState("");
  let box_one = useRef("");
  let box_two = useRef("");
  let box_three = useRef("");
  let box_four = useRef("");
  let box_five = useRef("");
  let box_six = useRef("");
  let box_seven = useRef("");
  let box_eigth = useRef("");
  let box_nine = useRef("");

  const boxs = [
    box_one,
    box_two,
    box_three,
    box_four,
    box_five,
    box_six,
    box_seven,
    box_eigth,
    box_nine,
  ];
  const takeValue = (e) => {
    if (e.target.firstChild.textContent === "") {
      e.target.firstChild.textContent = Step;
      Step === "X" ? (Step = "O") : (Step = "X");
    } else {
      e.target.firstChild.textContent.blur();
    }
    //  if computer play with you

    
    // let custom = Math.floor(Math.random() * boxs.length);
    // if (boxs[custom].current.textContent === "") {
    //   boxs[custom].current.textContent = "O";
    //   Step = "X";
    //   console.log(custom);
    // } else {
    //   if (custom >= 6) {
    //     custom = Math.floor(Math.random() * boxs.length - 6);
    //   }
    //   custom = Math.floor(Math.random() * boxs.length - 6);
    // }
    if (
      box_one.current.textContent === "O" &&
      box_two.current.textContent === "O" &&
      box_three.current.textContent === "O"
    ) {
      setcomputer(computer + 1);
      setShow(true);
      setwinner("Computer");
    } else if (
      box_one.current.textContent === "X" &&
      box_two.current.textContent === "X" &&
      box_three.current.textContent === "X"
    ) {
      setplayer(player + 1);
      setShow(true);
      setwinner(inputValue);
    }
    if (
      box_one.current.textContent === "O" &&
      box_four.current.textContent === "O" &&
      box_seven.current.textContent === "O"
    ) {
      setcomputer(computer + 1);
      setShow(true);
      setwinner("Computer");
    } else if (
      box_one.current.textContent === "X" &&
      box_four.current.textContent === "X" &&
      box_seven.current.textContent === "X"
    ) {
      setplayer(player + 1);
      setShow(true);
      setwinner(inputValue);
    }
    if (
      box_three.current.textContent === "O" &&
      box_six.current.textContent === "O" &&
      box_nine.current.textContent === "O"
    ) {
      setcomputer(computer + 1);
      setShow(true);
      setwinner("Computer");
    } else if (
      box_three.current.textContent === "X" &&
      box_six.current.textContent === "X" &&
      box_nine.current.textContent === "X"
    ) {
      setplayer(player + 1);
      setShow(true);
      setwinner(inputValue);
    }
    if (
      box_seven.current.textContent === "O" &&
      box_eigth.current.textContent === "O" &&
      box_nine.current.textContent === "O"
    ) {
      setcomputer(computer + 1);
      setShow(true);
      setwinner("Computer");
    } else if (
      box_seven.current.textContent === "X" &&
      box_eigth.current.textContent === "X" &&
      box_nine.current.textContent === "X"
    ) {
      setplayer(player + 1);
      setShow(true);
      setwinner(inputValue);
    }
    if (
      box_two.current.textContent === "O" &&
      box_eigth.current.textContent === "O" &&
      box_five.current.textContent === "O"
    ) {
      setcomputer(computer + 1);
      setShow(true);
      setwinner("Computer");
    } else if (
      box_two.current.textContent === "X" &&
      box_eigth.current.textContent === "X" &&
      box_five.current.textContent === "X"
    ) {
      setplayer(player + 1);
      setShow(true);
      setwinner(inputValue);
    }
    if (
      box_four.current.textContent === "O" &&
      box_six.current.textContent === "O" &&
      box_five.current.textContent === "O"
    ) {
      setcomputer(computer + 1);
      setShow(true);
      setwinner("Computer");
    } else if (
      box_four.current.textContent === "X" &&
      box_six.current.textContent === "X" &&
      box_five.current.textContent === "X"
    ) {
      setplayer(player + 1);
      setShow(true);
      setwinner(inputValue);
    }
  };

  const playAgain = () => {
    box_one.current.textContent = "";
    box_two.current.textContent = "";
    box_three.current.textContent = "";
    box_four.current.textContent = "";
    box_five.current.textContent = "";
    box_six.current.textContent = "";
    box_seven.current.textContent = "";
    box_eigth.current.textContent = "";
    box_nine.current.textContent = "";
    Step = "X";
    setShow(false);
  };
  return (
    <div className="App">
      <Navbar
        playAgain={playAgain}
        inputValue={inputValue}
        player={player}
        computer={computer}
      />
      {Promppet ? (
        <Prompet
          setPromppet={setPromppet}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      ) : (
        ""
      )}
      <div className="App-Content">
        <div className="box">
          <div className="Square" onClick={(e) => takeValue(e)} number="0">
            <h3 ref={box_one}></h3>
          </div>
          <div className="Square" onClick={(e) => takeValue(e)} number="1">
            <h3 ref={box_two}></h3>
          </div>
          <div className="Square" onClick={(e) => takeValue(e)} number="2">
            <h3 ref={box_three}></h3>
          </div>
        </div>
        <div className="box">
          <div className="Square" onClick={(e) => takeValue(e)} number="3">
            <h3 ref={box_four}></h3>
          </div>
          <div className="Square" onClick={(e) => takeValue(e)} number="4">
            <h3 ref={box_five}></h3>
          </div>
          <div className="Square" onClick={(e) => takeValue(e)} number="5">
            <h3 ref={box_six}></h3>
          </div>
        </div>
        <div className="box">
          <div className="Square" onClick={(e) => takeValue(e)} number="6">
            <h3 ref={box_seven}></h3>
          </div>
          <div className="Square" onClick={(e) => takeValue(e)} number="7">
            <h3 ref={box_eigth}></h3>
          </div>
          <div className="Square" onClick={(e) => takeValue(e)} number="8">
            <h3 ref={box_nine}></h3>
          </div>
        </div>
      </div>

      {show ? <Win winner={winner} playAgain={playAgain} /> : ""}
    </div>
  );
};

export default App;
