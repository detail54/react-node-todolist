import React from 'react'
import ButtonView from './ButtonView';

interface IProps {
  onClick: Function;
  children: any;
}

const Button: React.FC<IProps> = (props) => {

  const { onClick, children } = props;

  return <ButtonView onClick={onClick} children={children} />
}

export default Button
