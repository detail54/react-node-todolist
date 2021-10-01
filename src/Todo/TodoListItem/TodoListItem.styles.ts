import Styled from 'styled-components';

const Root = Styled.div`
  border-bottom: 1px dotted black;
  padding: 10px;

  span {
    display: flex;
    align-items: center;
  }

  span:nth-child(1) {
    flex-grow: 0;
  }
  span:nth-child(2) {
    flex-grow: 2;
  }
  span:nth-child(3) {
    flex-grow: 0;
  }
`;

const Todo = Styled.div`
  display: flex;
`;

const Number = Styled.span`
  color: white;
  background-color: #d1cece;
  width: 30px;
  height: 30px;
  margin: 0px;
  border-radius: 100px;
  justify-content: center;
  cursor: auto;
`;

const Title = Styled.span`
  margin-left: 5px;

  span {
    cursor: pointer;
  }
`;

const OpenButton = Styled.div`
  cursor: pointer;
  font-size: 26px;
`;

const Buttons = Styled.span`

  button {
    margin-left: 5px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TodoListItemStyles = {
  Root,
  Todo,
  Number,
  Title,
  OpenButton,
  Buttons
}