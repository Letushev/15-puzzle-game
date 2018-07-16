import React from 'react';
import styles from './Layout.scss';
import Header from '../../components/Header/Header';

const Layout = props => {
  return (
    <div className={ styles.page }>
      <Header />
      <main className={ styles.content }>
        { props.children }
      </main>
    </div>
  );
};

export default Layout;
