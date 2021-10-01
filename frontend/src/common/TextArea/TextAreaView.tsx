import React from 'react'
import { TextAreaStyle } from './TextArea.styles';

interface IProps {
  name?: string;
  value?: string;
  onChange?: (event: any) => any;
  placeholder?: string;
}

const TextAreaView: React.FC<IProps> = (props) => {

  const { name, value, onChange, placeholder } = props;

  return <TextAreaStyle name={name} value={value} onChange={onChange} placeholder={placeholder} />
}

export default TextAreaView
