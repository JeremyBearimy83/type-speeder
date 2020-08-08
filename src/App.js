import React, { useState } from "react";
import "./App.css";
import text from "./text";
import KeyboardEventHandler from "react-keyboard-event-handler";
function App() {
  const [typo, setTypo] = useState(true);
  const [index, setIncrement] = useState(0);
  const textArr = text.split("");
  return (
    <div className="App">
      <p
        style={{
          margin: "30px auto",
          width: "50ch",
          fontSize: "24px",
          backgroundColor: "yellow",
          lineHeight: "40px",
          letterSpacing: "4px",
        }}
      >
        {text}
      </p>

      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => {
          e.key === textArr[index]
            ? setIncrement(index + 1)
            : console.log(`You pressed: ${e.key} \n press: ${textArr[index]}`);
        }}
      />
    </div>
  );
}

export default App;
