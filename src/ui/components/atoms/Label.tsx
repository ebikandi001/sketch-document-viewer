import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type LabelProps = ComponentStyleProps & {
  text: string;
  isBold?: boolean;
};

const StyledLabel = styled.label`
  font-weight: ${(props: LabelProps) =>
    props.isBold ? 'bold' : props.theme?.fontWeight};
  color: ${(props: LabelProps) =>
    props.isBold ? 'black' : props.theme?.color};
  font-size: min(1vw, 16px);
`;

// TODO check any
export const Label = (props: LabelProps) => (
  <StyledLabel {...props}>{props.text}</StyledLabel>
);
