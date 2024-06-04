/*## Task

Refactor the code so that React re-renders the `App` component when `isActive` is changed.

You can use the following hints as guideline:

- Instead of `let`, consider the `useState` function.
  - Don't forget to import the function.
  - The initial state value should be `false`.
- Inside of the `handleClick` function, use the `set` function of the `useState` function to set the new value of the `isActive` state.

You should now be able to toggle the boxes color with the button! 🎉

## Bonus:

Can you use your newly created state to toggle the text on the button itself between "Activate" and "Deactivate"?*/

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(true);

  //let isActive = false;

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {" "}
        {isActive ? <p>Activate</p> : <p>Deactivate</p>}
      </button>
    </main>
  );
}
