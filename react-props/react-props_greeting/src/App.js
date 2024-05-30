import "./styles.css";

/*export default function App() {
  return <Greeting name="Rahaf" isCoach={true} />;
}

function Greeting({ name, isCoach }) {
  return <h1>{isCoach ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
*/
/////////////////////////////////////////////////
export default function App() {
  return <Greeting name="Andrea" />;
}
function Greeting({ name }) {
  return (
    <h1>
      Hello,{" "}
      {name === "Andrea" || name === "Feline" || name === "Jessica"
        ? "Coach"
        : name}
      !
    </h1>
  );
}
