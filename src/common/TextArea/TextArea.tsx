import React from 'react'
import TextAreaView from './TextAreaView';

interface IProps {
  name?: string;
  value?: string;
  onChange?: (event: any) => any;
  placeholder?: string;
}

const TextArea: React.FC<IProps> = (props) => {

  const { name, value, onChange, placeholder } = props;

  const viewProps = {
    name,
    value,
    onChange,
    placeholder
  }

  return <TextAreaView {...viewProps} />
}

export default TextArea
