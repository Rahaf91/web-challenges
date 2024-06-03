import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

/*Look at the `./src/App.js` file: there is a `<main>` element containing three `Box` components with different colors.

Note that the `<main>` wrapper is a flex container which is why the `Box` components are aligned horizontically.

Task: Outsource the three `Box` components to a `Boxes` component.

- In the `App.js` file, create a `Boxes` component which
  - returns the same three `Box` components as given above.
  - For now, use a `<div>` component as a wrapper in the return statement of the `Boxes` component.
- In the `App` component, replace the three `Box` components with the `Boxes` component.

Check the browser: the boxes are now vertically aligned! 😱

The reason is this: a flexbox refers only to its direct child elements; however, using a `<div>` element in `Boxes` creates a new layer so that the three `Box` elements are no longer flex items!

Use the developer tools of your browser to check this fact.

To fix this, replace the `<div>` with fragments `<></>`: they won't create an HTML element and thus break the layout! */
