/*Fix the `handleIncrement` function so that it increments the `count` state by 3.
 For the sake of this challenge, make sure to still call `setCount` three times, incrementing by 1 each time.

You can use the following hint as guideline:

- How can you update state based on the previous state? */

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const nextCount = count + 3;
  function handleIncrement() {
    // setCount(nextCount);
    // setCount(count + 1);
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
