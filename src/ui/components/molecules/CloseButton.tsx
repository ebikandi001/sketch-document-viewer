import React from 'react';
import { Image } from '../atoms';
import { ComponentStyleProps } from '../theme';
import Close from '../assets/close.svg';
import { Link } from 'react-router-dom';

type CloseButtonProps = ComponentStyleProps & {
  route: string;
};

export const CloseButton = ({ route, className }: CloseButtonProps) => (
  <Link to={route}>
    <Image src={Close} className={`${className}__button`} />
  </Link>
);
