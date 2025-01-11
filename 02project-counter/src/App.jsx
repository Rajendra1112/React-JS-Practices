import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>this is the counter project which add and subtract value</h1>
      <h2>value of counter is:{counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={subtractValue}>subtract value {counter}</button>
    </>
  );
}

export default App;
