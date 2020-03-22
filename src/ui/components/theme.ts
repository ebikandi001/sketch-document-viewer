type Theme = {
  color: any;
  font: any;
};

/**
 * TODO
 * Review optional
 */
export type ComponentStyleProps = {
  className?: string;
  theme?: Theme;
};
export const theme = {
  color: '#656465',
  font: {
    weight: 'normal',
    sizes: { normal: 'min(1vw, 16px)', big: 'min(1vw, 32px)' },
  },
};
