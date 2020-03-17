import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type LabelProps = ComponentStyleProps & {
  isBold: boolean;
};

const StyledLabel = styled.label`
  font-weight: ${(props: LabelProps) =>
    props.isBold ? 'bold' : props.theme.fontWeight};
  color: ${(props: LabelProps) =>
    props.isBold ? 'black' : props.theme.fontWeight};
`;

// TODO check any
export const Label = (props: any) => (
  <StyledLabel {...props}>{props.text}</StyledLabel>
);
