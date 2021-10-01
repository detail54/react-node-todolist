import Styled from 'styled-components';

const Root = Styled.div`
  padding: 10px;
`;

const Title = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
`;

const Content = Styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
`;

const Footer = Styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 10px;
`;

export const TodoInsertStyles = {
  Root,
  Title,
  Content,
  Footer,
}