import styles from './Button.module.scss';
import { forwardRef } from 'react';


export const UButton = forwardRef(function UButton(props, ref) {
  return (
    <button className={ styles.uButton } { ...props } ref={ ref }>
      { props.children }
    </button>
  );
});

