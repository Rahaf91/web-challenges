import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import React, { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  // this should be a state variable
  //const isFavorite = false;
  function handleClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

/*## Task

Locate the component with the favorite button. Here it's called `FavoriteButton`.

The component has an `isFavorite` boolean variable. This variable is used to determine if the star icon should be filled in or not.

- Make `isFavorite` a state variable.
- This state variable needs to be toggled when the user clicks the favorite button.
- Happy Hacking!
*/
