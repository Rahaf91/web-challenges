import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function HandleToggleLight(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnOn() {
    const updatedLights = lights.map((light) => ({ ...light, isOn: true }));
    setLights(updatedLights);
  }

  function handleTurnOff() {
    const updatedLights = lights.map((light) => ({ ...light, isOn: false }));
    setLights(updatedLights);
  }

  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        HandleToggleLight={HandleToggleLight}
        handleTurnOff={handleTurnOff}
        handleTurnOn={handleTurnOn}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </Layout>
  );
}
