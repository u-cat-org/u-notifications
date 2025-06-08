import styles from './Button.module.scss';
import { forwardRef } from 'react';


import { ButtonHTMLAttributes } from 'react';

export const UButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function UButton(props, ref) {
  return (
    <button className={ styles.uButton } { ...props } ref={ ref }>
      { props.children }
    </button>
  );
});

