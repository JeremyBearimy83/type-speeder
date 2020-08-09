import React from "react";
import "./letter.styles.css";
const Letter = (props) => {
  return (
    <>
      <span className={`${props.green && "correct"} Letter`}>
        {props.letter}
      </span>
    </>
  );
};
export default Letter;
