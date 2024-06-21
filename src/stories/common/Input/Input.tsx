import styles from './Input.module.scss';
import { forwardRef } from 'react';


export const UInput = forwardRef(function UInput(props, ref) {
  return (
    <input className={ styles.uInput } { ...props } ref={ ref }/>
  );
});

