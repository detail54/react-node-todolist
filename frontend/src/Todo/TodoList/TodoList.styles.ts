import Styled from 'styled-components'

const Root = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;
  border-left: 3px dashed gray;
  border-right: 3px dashed gray;
`;

const List = Styled.div`
  height: 516px;
`;

export const TodoListStyles = {
  Root,
  List
}