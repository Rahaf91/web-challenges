/*Task

You can use the following hints as a guideline:

- Most importantly, you need to import a built-in React function you'll be using during this challenge.
- You need to make sure to declare a state variable.
- Write a `handleClick` function that updates the state variable according to which emoji button was clicked.
  - Hint: `event.target.textContent` (use `code + event.target.textContent` to append the new emoji) 
  ..........................
  Looking at the `validCode` variable, we understand that the code consists of a sequence of three emojis. Each button click should "lock in" one emoji. If the code that was entered matches the passcode, your code will be confirmed as valid. The reset button should reset the code, so you can start over. 
  Toward the bottom of the `App` function you'll find a line that conditionally generates a `p` element as soon as the input code matches the `validCode` declared at top of the function.
  */

import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  console.log(code);
  //let code = "?";

  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }
  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {/*I want to append the emojis directly to the body*/}
      <p>Emoji Passcode Checker</p>
      <div className="code-container">{code}</div>
      {/*.................................................y*/}
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
