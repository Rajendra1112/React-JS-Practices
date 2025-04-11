import styled from "styled-components";
import { Button } from "../styled/Button";

function FirstPageOfGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="images/dices 1.png" alt="dice image of first page" />
      </div>

      <div>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default FirstPageOfGame;

// to create button using styled component

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10px;
// `;

// to create container component and styled them using styled component

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  margin: 0 auto;

  h1 {
    font-weight: 600;
    font-size: 96px;
    white-space: nowrap;
    text-transform: uppercase;
  }
`;
