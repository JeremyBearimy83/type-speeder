import React, { useState } from "react";
import "./App.css";
import text from "./text";
import KeyboardEventHandler from "react-keyboard-event-handler";
function App() {
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
        handleKeys={textArr[index] === " " ? ["space"] : [textArr[index]]}
        onKeyEvent={(key, e) => {
          console.log(key, index);
          setIncrement(index + 1);
        }}
      />
    </div>
  );
}

export default App;
