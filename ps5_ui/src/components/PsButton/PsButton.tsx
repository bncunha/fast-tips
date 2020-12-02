import React from 'react';
import { PsButtonIcon, PsButtonStyle } from './styled';

const PsButton: React.FC = () => {
  return (
    <PsButtonStyle>
      <PsButtonIcon> X </PsButtonIcon>
      <span> Tap to sign in </span>
    </PsButtonStyle>
  );
};

export default PsButton;