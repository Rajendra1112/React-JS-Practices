import DiceRoll from "./DiceRoll";
import NumberSelector from "./NumberSelector";
import ScoreBoard from "./ScoreBoard";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlinedButton } from "../styled/Button";
import Rules from "./Rules";

function SecondPageOfGame() {
  // here required useStates that we define in different components are kept together in one place and that is in their parent component
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  // we also need to move DiceRoll component here so that it's state will get changed on event
  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const setDiceAccordingToRN = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = randomNumberGenerator(1, 7);
    // here we used call back function inside setCurrentDice method so that react update the state on each click not just consider the update statements as a batch of statement as consider the updation of same state multiple times as one

    // in one word on each click the state must be update no like if the task is same then there is no need to update
    setCurrentDice((prev) => randomNumber);

    // if else condition for game if selected no is equal to dice roll no then score will be updated by random number otherwise score will be decreased by 2
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <ScoreBoard score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <div className="body_section">
        <DiceRoll
          currentDice={currentDice}
          setDiceAccordingToRN={setDiceAccordingToRN}
        />
      </div>
      <div className="buttons">
        <Button onClick={resetScore}>reset score</Button>
        <OutlinedButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "hide" : "show"} rules
        </OutlinedButton>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default SecondPageOfGame;

const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 0;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body_section {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    width: fit-content;
    margin: 0 auto;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
