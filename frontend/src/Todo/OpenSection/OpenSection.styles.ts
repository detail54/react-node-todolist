import Styled from 'styled-components';

const Root = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;
  border-left: 3px dashed gray;
  border-right: 3px dashed gray;
`;

const CloseButtonDiv = Styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: right;
  align-items: center;

  button {
    font-size: 25px;
    background: none;
    border: none;
    color: #85999e;
    cursor: pointer;
  }

  button:hover {
    color: #c2d1d4;
  }
`;

const Header = Styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

const OSTitle = Styled.span`
  display: block;
  border-radius: 10px;
  background: #d1cece;
  color: white;
  padding: 30px;
  font-size: 30px;
`;

const OSBody = Styled.div`

`;

export const OpenSectionStyles = {
  Root,
  CloseButtonDiv,
  Header,
  OSTitle,
  OSBody
}