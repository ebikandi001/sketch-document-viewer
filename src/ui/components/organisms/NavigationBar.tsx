import React from 'react';
import styled from 'styled-components';
import { CloseButton, Navigation } from '../molecules';
import { Label } from '../atoms';

type DetailBarProps = {
  onClose: any;
  goPrev: any;
  goNext: any;
  text: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1%;
  & > * {
    margin: 0 1%;
  }

  .detail-bar__navigation {
    width: 10%;
  }

  .detail-bar__label {
    flex-grow: 1;
    text-align: center;
  }
`;

export const NavigationBar = ({
  onClose,
  goPrev,
  goNext,
  text,
}: DetailBarProps) => (
  <Container className="detail-bar">
    <CloseButton className="detail-bar__close" onClick={onClose} />
    <Navigation
      className="detail-bar__navigation"
      goPrev={goPrev}
      goNext={goNext}
    />
    <Label className="detail-bar__label" text={text} isBold={true} />
  </Container>
);
