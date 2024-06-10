/*
Look at the `./src/components/StatusCheck/index.js` file.

There is a function named `handleCheckApiStatus`. The function is called when you click the button.

Inside of this function use `fetch()` to load status information from the API URL given in the variable `apiStatusUrl`. You will receive a different random result every time you call the API.

Your task is to write the logic for `handleCheckApiStatus` so that - depending on `response.ok` - the icon displays either ✅ or ❌.

You can use the following hints as guideline:

- `fetch()` returns a promise, so make sure to wait for the result.
- Check whether `response.ok` is truthy;
- if so, the icon should display ✅
- if not, the icon should display ❌*/
import "./StatusCheck.css";
import { useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  // Something needs to change here…
  // ↙️
  async function handleCheckApiStatus() {
    /**
     * Hint 1:
     * Use the `fetch()` function and pass the `apiStatusUrl` into it
     *
     * Hint 2:
     * The fetch function returns a promise which resolves to a Response
     * object once it is ready.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--
    try {
      const response = await fetch(apiStatusUrl);
      response.ok ? setStatusIcon("✅") : setStatusIcon("❌");
    } catch (error) {
      console.error("HTTP error! status", error);
    }
  }
  // --^-- write your code here --^--

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
