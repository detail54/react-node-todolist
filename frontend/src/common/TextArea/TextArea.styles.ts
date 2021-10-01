import Styled from "styled-components";

export const TextAreaStyle = Styled.textarea`
  width: 99%;
  height: 315px;
  background: white;
  border: none;
  font-size: 20px;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d9d9;
  }
`;