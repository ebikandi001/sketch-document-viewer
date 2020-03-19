import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';
import Close from '../assets/close.svg';

const CloseContainer = styled.div`
  border: solid;
`;

export const CloseButton = () => (
  <CloseContainer className="closebutton">
    <Image src={Close} className="closebutton__button" />
  </CloseContainer>
);
