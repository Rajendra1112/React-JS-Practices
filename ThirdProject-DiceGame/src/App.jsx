import FirstPageOfGame from "./components/FirstPageOfGame";
import SecondPageOfGame from "./components/SecondPageOfGame";
import "./App.css";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePage = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
        <SecondPageOfGame />
      ) : (
        <FirstPageOfGame toggle={toggleGamePage} />
      )}
    </>
  );
}

export default App;
