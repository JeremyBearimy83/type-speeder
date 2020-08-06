import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import "./App.css";
function App() {
  return (
    <div className="App">
      <KeyboardEventHandler
        handleKeys={["alphabetic"]}
        onKeyEvent={(key, e) => console.log(`You pressed ${key}`)}
      />
    </div>
  );
}

export default App;
