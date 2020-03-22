import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type LabelProps = ComponentStyleProps & {
  text: string;
  isBold?: boolean;
};

const StyledLabel = styled.label`
  font-weight: ${(props: LabelProps) =>
    props.isBold ? 'bold' : props.theme?.font.weight};
  color: ${(props: LabelProps) =>
    props.isBold ? 'black' : props.theme?.color};
  font-size: 1.8vh; // fallback for FF
  font-size: ${(props: LabelProps) => props.theme?.font.sizes.normal};
`;

// TODO check any
export const Label = (props: LabelProps) => (
  <StyledLabel {...props}>{props.text}</StyledLabel>
);
