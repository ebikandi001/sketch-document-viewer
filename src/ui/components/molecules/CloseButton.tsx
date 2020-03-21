import React from 'react';
import { Image } from '../atoms';
import { ComponentStyleProps } from '../theme';
import Close from '../assets/close.svg';

type CloseButtonProps = ComponentStyleProps & {
  onClick: any;
};

export const CloseButton = ({ onClick, className }: CloseButtonProps) => (
  <Image src={Close} onClick={onClick} className={`${className}__button`} />
);
