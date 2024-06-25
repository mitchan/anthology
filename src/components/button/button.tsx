import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button-variants';

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ size = 'medium', variant, ...props }: ButtonProps) => {
  return <button className={variants({ size, variant })} {...props} />;
};
