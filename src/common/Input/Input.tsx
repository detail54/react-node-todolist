import React from 'react'
import InputView from './InputView';

interface IProps {
  name?: string;
  value?: string;
  onChange?: (event: any) => any;
  placeholder?: string;
}

const Input: React.FC<IProps> = (props) => {

  const { name, value, onChange, placeholder } = props;

  const viewProps = {
    name,
    value,
    onChange,
    placeholder
  }

  return <InputView {...viewProps} />
}

export default Input
