import React, { forwardRef } from 'react';
import styles from './Select.module.scss';


export const USelect = forwardRef(function USelect(props: React.PropsWithChildren, ref) {
  return (
    <select className={styles.uSelect} { ...props } ref={ ref }>
      { props.children }
    </select>
  );
});

