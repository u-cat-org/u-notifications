import styles from './Input.module.scss';
import React, { forwardRef } from 'react';


export const UInput = forwardRef(function UInput(props: React.InputHTMLAttributes<HTMLInputElement>, ref) {
  return (
    <input className={ styles.uInput } { ...props } ref={ ref }/>
  );
});

