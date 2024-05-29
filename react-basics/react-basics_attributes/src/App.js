import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Learn About Atlas (Gebirge)</h2>

      <label htmlFor="input" className="article__label">
        Atlas (Gebirge)
      </label>
      <input id="input" type="text" className="article__input" />

      <a
        href="https://de.wikipedia.org/wiki/Atlas_(Gebirge)"
        className="article__link"
        target="blank"
      >
        Read the Article
      </a>
    </article>
  );
}
