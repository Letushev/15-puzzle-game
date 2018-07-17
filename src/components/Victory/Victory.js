import React from 'react';
import styles from './Victory.scss';

import trophyImg from 'assets/images/trophy.svg';

const Victory = props => {
  return (
    <section className={ styles.victory }>
      <h2 className={ styles.heading }>Congratulations, You Won!</h2>
      <img src={ trophyImg } className={ styles.image } alt='golden trophy' />
      <button 
        type='button'
        className={ styles.button }
        onClick={ props.playAgainClicked }>
          Play again
      </button>
    </section>
  );
};

export default Victory;
