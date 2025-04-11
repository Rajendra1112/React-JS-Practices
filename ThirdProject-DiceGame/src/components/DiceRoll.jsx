import styled from "styled-components";

function DiceRoll({ currentDice, setDiceAccordingToRN }) {
  return (
    <DiceRollContainer>
      <div className="dice_image">
        <img
          src={`/images/dice_${currentDice}.png`}
          alt="dice image 1"
          onClick={setDiceAccordingToRN}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceRollContainer>
  );
}

export default DiceRoll;

const DiceRollContainer = styled.div`
  .dice_image {
    img {
      cursor: pointer;
    }
  }
  p {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 500;
  }
`;
