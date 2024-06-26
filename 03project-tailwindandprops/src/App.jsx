import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-200 text-black p-10 rounded-md mb-5">
        tailwindtest
      </h1>

      <Card userName="rajendra" btnText="click me" />
      <Card userName="thapa" btnText="visit here" />
      <Card />
      <Card btnText="read more" />
    </>
  );
}

export default App;
