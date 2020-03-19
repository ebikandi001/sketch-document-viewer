import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';
import { ComponentStyleProps } from '../theme';
import Close from '../assets/close.svg';

type CloseButtonProps = ComponentStyleProps & {
  onClick: any;
};

const CloseContainer = styled.div``;

export const CloseButton = ({ onClick, className }: CloseButtonProps) => (
  <CloseContainer className={className}>
    <Image src={Close} onClick={onClick} className={`${className}__button`} />
  </CloseContainer>
);
