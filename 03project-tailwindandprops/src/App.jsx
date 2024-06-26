import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-slate-100 text-black p-10 rounded-xl mb-5">
        tailwindtest
      </h1>

      <Card userName="rajendra" btnText="click me" />
      <Card userName="thapa" btnText="visit here" />
    </>
  );
}

export default App;
