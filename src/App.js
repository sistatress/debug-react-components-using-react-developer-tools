import React, { createContext, useState } from "react";
import "./styles.css";
import TextInformation from "./Components/TextInformation";

export const TextContext = createContext();
TextContext.displayName = "TexContext"; // for react dev tools

export default function App() {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">
          Add Your Text Here:
          <br />
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  );
}
