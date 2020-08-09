import React from "react";
import "./word.styles.css";
import Letter from "./letter.component";
const Word = ({ word, wordIndex, currentIndex }) => {
  const letters = word.map((letter, idx) => {
    const index = `${wordIndex}-${idx}`;
    const currentIdx = `${currentIndex[0]}-${currentIndex[1]}`;
    const green = index === currentIdx ? true : false;
    return <Letter letter={letter} key={index} green={green} />;
  });
  return <div className="Word">{letters}</div>;
};
export default Word;
