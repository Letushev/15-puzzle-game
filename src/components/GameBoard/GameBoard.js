import React, { Component } from 'react';
import styles from './GameBoard.scss';

import Cell from './Cell/Cell';

// Make it class component only to add global event listeners
class GameBoard extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.keyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.keyPressed);
  }

  render() {
    return (
      <div className={ styles.board }>
        <div className={ styles.inner }>
          {
            this.props.cells.map(cell => {
              return (
                <Cell 
                  key={ cell }
                  empty={ !cell }>
                    { cell }
                </Cell>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default GameBoard;
