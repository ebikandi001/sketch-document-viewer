import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';
import { Image, Label } from '../atoms';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import Breadcrumb from '../assets/breadcrumb.svg';
import { Link } from 'react-router-dom';

export type NavigationProps = ComponentStyleProps & {
  goPrevRoute: string;
  goNextRoute: string;
  current: number;
  total: number;
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = ({
  goPrevRoute,
  goNextRoute,
  current,
  total,
  className,
}: NavigationProps) => (
  <NavigationContainer className={className}>
    <Link to={goPrevRoute}>
      <Image src={ArrowLeft} className={`${className}__left`} />
    </Link>
    <Label text={current.toString()} />
    <Image src={Breadcrumb} className={`${className}__separator`} />
    <Label text={total.toString()} />
    <Link to={goNextRoute}>
      <Image src={ArrowRight} className={`${className}__right`} />
    </Link>
  </NavigationContainer>
);
