import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

export type ButtonProps = ComponentProps<'button'> & {
  size?: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ className, size = 'medium', variant, ...props }: ButtonProps) => {
  const cls = clsx(styles['button'], styles[variant], styles[size], className);

  return <button className={cls} {...props} />;
};
