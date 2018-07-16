import React from 'react';
import styles from './ShuffleButton.scss';

const ShuffleButton = props => {
  return (
    <button 
      className={ styles.shuffle }
      onClick={ props.clicked }>
        Shuffle
    </button>
  );
};

export default ShuffleButton;
