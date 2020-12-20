import React, { useReducer } from "react";
import CaracterCount from "./CaracterCount";

const reducer = (state, action) => {
  return {
    ...state, //previous state value
    [action]: !state[action] //new value
  };
};

const TextInformation = () => {
  const [tabs, toggleTabs] = useReducer(reducer, {
    characterCount: true,
    wordCount: true,
    characterMap: true
  });

  return (
    <div>
      <button onClick={() => toggleTabs("characterCount")}>
        Character Count
      </button>
      <button onClick={() => toggleTabs("wordCount")}>Word Count</button>
      <button onClick={() => toggleTabs("characterMap")}>Character Map</button>
      <CaracterCount show={tabs.characterCount} />
    </div>
  );
};

export default TextInformation;
