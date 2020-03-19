import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import Breadcrumb from '../assets/breadcrumb.svg';

type NavigationProps = {
  goPrev: any;
  goNext: any;
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 8vw;
`;

export const Navigation = ({ goPrev, goNext }: NavigationProps) => (
  <NavigationContainer className="navigation">
    <Image src={ArrowLeft} className="navigation__left" onClick={goPrev} />
    4
    <Image src={Breadcrumb} className="navigation__separator" />
    10
    <Image src={ArrowRight} className="navigation__right" onClick={goNext} />
  </NavigationContainer>
);
