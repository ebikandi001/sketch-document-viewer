import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type LabelProps = ComponentStyleProps & {
  style: {
    fontWeight?: string;
    color?: string;
  };
};

const StyledLabel = styled.label`
  font-weight: ${(props: LabelProps) =>
    props.style.fontWeight || props.theme.fontWeight};
  color: ${(props: LabelProps) => props.style.color || props.theme.color};
`;

// TODO check any
export const Label = (props: any) => (
  <StyledLabel {...props}>{props.text}</StyledLabel>
);
