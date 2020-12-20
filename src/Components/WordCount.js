import React, { useContext } from "react";
import { TextContext } from "../App";

const WordCount = ({ show }) => {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return (
    <div>
      {/* {text.split(' ').length} */}
      Word Count: {text.split(" ").length}
    </div>
  );
};

export default WordCount;
