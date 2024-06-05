import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "Apple", color: "DarkSeaGreen" },
    { id: 1, name: "Cherry", color: "Maroon" },
    { id: 2, name: "Watermelon", color: "LimeGreen" },
    { id: 3, name: "Peach", color: "LightCoral" },
    { id: 4, name: "Banana", color: "yellow" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <p key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </p>
        );
      })}
    </div>
  );
}
