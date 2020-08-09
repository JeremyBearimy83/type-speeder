//todo make a component for each element of array (letter) and pass color change prop if key is pressed correctly
import React, { useState } from "react";
import "./App.css";
import text from "./text";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Word from "./word.component";
function App() {
  const [typo, setTypo] = useState(true);
  const [index, setIncrement] = useState([0, 0]);
  const textArr = text.split("");
  console.log(`Type of textArr: ${typeof textArr}`);
  const wordsArr = text.split(" ");
  const wordsArr2 = wordsArr.map((word) => word.split(""));
  const wordsArr3 = wordsArr2.map((word) => [...word, " "]);
  const words = wordsArr3.map((word, idx) => {
    return <Word word={word} key={idx} wordIndex={idx} currentIndex={index} />;
  });
  return (
    <div className="App">
      <div className="text-container">{words}</div>

      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => {
          if (e.key === wordsArr3[index[0]][index[1]]) {
            setIncrement(([i1, i2]) => {
              if (i2 === wordsArr3[i1].length - 1) {
                console.log(`${i1 + 1}-${0}`);
                return [i1 + 1, 0];
              } else {
                console.log(`${i1}-${i2 + 1}`);
                return [i1, i2 + 1];
              }
            });
          } else {
            console.log(
              `You pressed: ${e.key} \n press: ${
                wordsArr3[[index[0]][index[1]]]
              }\n${index}`
            );
          }
        }}
      />
    </div>
  );
}

export default App;
