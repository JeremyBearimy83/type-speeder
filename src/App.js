//todo make a component for each element of array (letter) and pass color change prop if key is pressed correctly
import React, { useState, useEffect } from "react";
import "./App.css";
import text from "./text";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Word from "./word.component";
function App() {
  const [typo, setTypo] = useState(true);
  const [index, setIncrement] = useState(0);
  const textArr = text.split("");
  const wordsArr = text.split(" ");
  const words = wordsArr.map((word) => <Word word={word} />);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <div className="text-container">{words}</div>

      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => {
          if (e.key === textArr[index]) {
            setIncrement(index + 1);
          } else {
            console.log(`You pressed: ${e.key} \n press: ${textArr[index]}`);
          }
        }}
      />
    </div>
  );
}

export default App;
