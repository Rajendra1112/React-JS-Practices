import styled from "styled-components";
// to create and styling button component using styled component
export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 18px;
  text-transform: capitalize;
  border: 1px solid transparent;
  border-radius: 5px;
  min-width: 220px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #9aeb9a;
    color: black;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;
  }
`;

export const OutlinedButton = styled(Button)`
  &:hover {
    background-color: #e6aaaa;
    color: white;
  }
`;
