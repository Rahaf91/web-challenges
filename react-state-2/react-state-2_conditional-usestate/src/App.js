import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState("false");
  const [message, setMessage] = useState("Secret message incoming...");
  //React Hooks must be called in the exact same order in every component render.
  /*
Only Call Hooks at the Top Level
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function,
 before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders.
 That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
(https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level) 
....................................................................................
When React renders a component, it calls the hooks in the order they are defined in the function component.
 This order must be consistent across every render to ensure that the hooks are correctly matched with their corresponding state and effect values.

  */

  if (!showMessage) {
    return (
      <div className="container">
        <h1>
          Message is hidden{" "}
          <span role="img" aria-label="scream">
            😱
          </span>
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => setShowMessage(false)}
      >
        Hide Message
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          setMessage("The secret of Monkey Island is ... wait, no spoilers!")
        }
      >
        Now really show the message!
      </button>
      <h2>{message}</h2>
    </div>
  );
}
