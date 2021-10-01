import Styled from 'styled-components';

const Root = Styled.section`
  border: 3px solid black;
  border-radius: 10px;
`;

const Header = Styled.h1`
  border-radius: 10px 10px 0px 0px;
  margin: 0px;
  padding: 20px;
  text-align: center;
  font-size: 50px;
  border-bottom: 3px solid black;
  color: #767676;
  background: #cee6eb;
`;

const Body = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 0px 30px;
`;

const Footer = Styled.div`
  height: 50px;
  border-radius: 0px 0px 10px 10px;
  border-top: 3px solid black;
  background: #cee6eb;
`;

export const TodoIndexStyles = {
  Root,
  Header,
  Body,
  Footer,
}