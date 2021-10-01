import React from 'react'
import { InputStyle } from './Input.styles';

interface IProps {
  name?: string;
  value?: string;
  onChange?: (event: any) => any;
  placeholder?: string;
}

const InputView: React.FC<IProps> = (props) => {

  const { 
    name = '', 
    value = '', 
    onChange = () => {}, 
    placeholder = '' 
  } = props;

  return <InputStyle name={name} value={value} onChange={onChange} placeholder={placeholder} />
}

export default InputView
