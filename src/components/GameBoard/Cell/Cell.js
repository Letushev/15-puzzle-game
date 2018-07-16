import React from 'react';
import styles from './Cell.scss';

const Cell = props => {
  const classes = [styles.cell];
  if (props.empty) {
    classes.push(styles.empty);
  }

  return (
    <div className={ classes.join(' ') }>
      { props.children }
    </div>
  );
};

export default Cell;
