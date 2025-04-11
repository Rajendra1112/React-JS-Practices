import styled from "styled-components";

function NumberSelector({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const errorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberBoxContainer>
      <p className="error_message">{error}</p>
      <div className="number_boxes_section">
        {
          //   using loop to display all six boxes
          arrNumber.map((value, i) => (
            // when we used map method then we need to pass key(note: key should be unique so we used index of the array) to the element that is inside loop so that react can trace that element
            <Box
              key={i}
              onClick={() => errorHandler(value)}
              isSelected={selectedNumber == value}
            >
              {value}
            </Box>
          ))
        }
      </div>
      <p>select number</p>
    </NumberBoxContainer>
  );
}

export default NumberSelector;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  border: 2px solid black;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;

const NumberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 30px;

  .number_boxes_section {
    display: flex;
    gap: 18px;
  }

  p {
    font-weight: 700;
    font-size: 24px;
    text-transform: capitalize;
  }

  .error_message {
    color: red;
  }
`;
