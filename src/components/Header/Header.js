import React from 'react';
import styles from './Header.scss';

const Header = () => {
  return (
    <header className={ styles.header }>
      <h1 className={ styles.heading }>15 Puzzle Game</h1>
    </header>
  );
};

export default Header;
