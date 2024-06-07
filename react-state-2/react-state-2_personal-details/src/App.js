import React from "react";
import "./styles.css";
import Form from "./components/Form.js";
import { useState } from "react";

export default function App() {
  //First Step
  //copy these lines from form.js
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /////////////////////////////////////////////////

  //Second Step
  //Create a function called handleCreateUser with two parameters and we should here set the new state of both name and email to be the current state
  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
  }
  //.......................................
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form handleCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>{" "}
        {/*Fifth Step : display name state in the output field  */}
      </p>
      <p>
        Email: <span className="output">{email}</span>
        {/*Fifth Step: display email state in the output field  */}
      </p>
    </div>
  );
}
