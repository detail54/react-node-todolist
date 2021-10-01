import Styled from 'styled-components';

const Root = Styled.div`
  padding: 10px;
`;

const Header = Styled.h2`
  margin-bottom: 10px;
    color: #8e8e8e;
`;

const Title = Styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
`;

const Content = Styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
  height: 315px;
`;

const Footer = Styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const TodoRewriteStyles = {
  Root,
  Header,
  Title,
  Content,
  Footer,
}