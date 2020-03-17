import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import Breadcrumb from '../assets/breadcrumb.svg';

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 8vw;
`;

export const Navigation = () => (
  <NavigationContainer>
    <Image src={ArrowLeft} />
    4
    <Image src={Breadcrumb} />
    10
    <Image src={ArrowRight} />
  </NavigationContainer>
);
