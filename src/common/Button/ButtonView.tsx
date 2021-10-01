import React from 'react';
import { ButtonStyle } from './Button.styles';

interface IProps {
  onClick: Function;
  children: any;
}

const ButtonView: React.FC<IProps> = (props) => {

  const { onClick, children } = props;

  return <ButtonStyle onClick={() => onClick()}>{children}</ButtonStyle>
}

export default ButtonView
