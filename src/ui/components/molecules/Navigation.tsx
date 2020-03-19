import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';
import { Image } from '../atoms';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import Breadcrumb from '../assets/breadcrumb.svg';

type NavigationProps = ComponentStyleProps & {
  goPrev: any;
  goNext: any;
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = ({ goPrev, goNext, className }: NavigationProps) => (
  <NavigationContainer className={className}>
    <Image src={ArrowLeft} className={`${className}__left`} onClick={goPrev} />
    4
    <Image src={Breadcrumb} className={`${className}__separator`} />
    10
    <Image
      src={ArrowRight}
      className={`${className}__right`}
      onClick={goNext}
    />
  </NavigationContainer>
);
