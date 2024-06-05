import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <section key={user.id}>
            <Card user={user} />
          </section>
        ))}
      </div>
    </main>
  );
}

/*## Task

1. Use `Array.map` to create a card for each user in the `USERS` array. Make sure to add a unique key to each card.

2) Switch to the card component and use `Array.map` to create a `Tag` for each role in the roles array of a user. Make sure to add a unique key to each tag - in this instance, feel free to use the role itself as a key.

3. At last, refactor the `Tag` component: it should receive an additional class called 'tag--highlight' if the `tag` prop equals the string 'admin' (compare the `Tag.css` file). */
