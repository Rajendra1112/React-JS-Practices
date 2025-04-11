import styled from "styled-components";

function ScoreBoard({ score }) {
  return (
    <ScoreArea>
      <h1>{score}</h1>
      <p>total score</p>
    </ScoreArea>
  );
}

export default ScoreBoard;

const ScoreArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  /* border: 1px solid black; */
  h1 {
    min-width: 100px;
    min-height: 100px;
    text-align: center;
    font-size: 100px;
    line-height: 100px;
    padding: 15px;
    border-radius: 10px;
    background-color: black;
    color: white;
  }
  p {
    margin-top: 3px;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;
