import React, { useContext } from "react";
import { TextContext } from "../App";

const CharacterCount = ({ show }) => {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return <div>Character Count: {text.length}</div>;
};

export default CharacterCount;
