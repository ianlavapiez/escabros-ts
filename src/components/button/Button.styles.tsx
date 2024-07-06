import styled from "styled-components";
import Button from "antd/es/button";

export const ButtonContainer = styled(Button)`
  width: 200px;
  height: 50px;
  border-radius: 0.5rem;
  background-color: #0ab99d;
  border-color: #0ab99d;
  margin-top: 0.5rem;

  &:focus {
    background-color: #0ab99d;
    border-color: #0ab99d;
    color: white;
  }

  &:hover {
    background-color: white;
    color: #0ab99d;
    border-color: #0ab99d;
  }
`;
