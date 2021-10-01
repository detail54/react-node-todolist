import React from 'react'
import { OpenSectionStyles } from './OpenSection.styles';
import { FiXCircle } from "react-icons/fi";


interface IProps {
  osTitle: string;
  osBody: JSX.Element | string;
  onCloseSection: () => void;
}

const OpenSectionView: React.FC<IProps> = (props) => {

  const { osTitle, osBody, onCloseSection } = props;

  return (
    <OpenSectionStyles.Root>
      <OpenSectionStyles.CloseButtonDiv>
        <button onClick={onCloseSection}><FiXCircle /></button>
      </OpenSectionStyles.CloseButtonDiv>
      <OpenSectionStyles.Header>
        <OpenSectionStyles.OSTitle>{osTitle}</OpenSectionStyles.OSTitle>
      </OpenSectionStyles.Header>
      <OpenSectionStyles.OSBody className='open-section-body'>
        {osBody}
      </OpenSectionStyles.OSBody>
    </OpenSectionStyles.Root>
  )
}

export default OpenSectionView
