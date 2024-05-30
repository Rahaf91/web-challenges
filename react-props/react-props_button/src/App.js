import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <Button
      textColor="White"
      buttonbackgroundColor="blue"
      isdisabled={false}
      text="Click Me"
      onClick={handleClick}
    />
  );
}

function Button({
  textColor,
  buttonbackgroundColor,
  isdisabled,
  text,
  onClick,
}) {
  return (
    <button
      //  onClick={() => alert("You clicked me!")}
      onClick={onClick}
      style={{ color: textColor, backgroundColor: buttonbackgroundColor }}
      disabled={isdisabled}
    >
      {text}
    </button>
  );
}
