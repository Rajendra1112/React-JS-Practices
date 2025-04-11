import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <ul className="list_of_rules">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ul>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  h2 {
    text-transform: capitalize;
  }
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #e6aaaa;
  border: 2px solid transparent;
  border-radius: 10px;
  .list_of_rules {
    padding: 10px;
    list-style: none;
    li {
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
