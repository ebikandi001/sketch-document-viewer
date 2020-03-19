import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';
import Close from '../assets/close.svg';

type CloseButtonProps = {
  onClose: any;
};

const CloseContainer = styled.div``;

export const CloseButton = ({ onClose }: CloseButtonProps) => (
  <CloseContainer className="closebutton">
    <Image src={Close} onClick={onClose} className="closebutton__button" />
  </CloseContainer>
);
