import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type ImageProps = ComponentStyleProps & {
  src: string;
};

export const Image = styled.img.attrs({
  src: (props: ImageProps) => props.src,
} as any)`
  height: 42px;
`;
