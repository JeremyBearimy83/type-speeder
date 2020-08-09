import React from "react";
import "./word.styles.css";
import Letter from "./letter.component";
const Word = ({ word, ...restProps }) => {
  const lettersArr = word.split("");
  const letters = lettersArr.map((letter) => <Letter letter={letter} />);
  return <div className="Word">{letters}</div>;
};
export default Word;
