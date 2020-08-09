import React from "react";
import "./word.styles.css";
import Letter from "./letter.component";
const Word = ({ word, wordIndex }) => {
  const letters = word.map((letter, idx) => {
    const index = `${wordIndex}-${idx}`;
    return <Letter letter={letter} key={index} />;
  });
  return <div className="Word">{letters}</div>;
};
export default Word;
