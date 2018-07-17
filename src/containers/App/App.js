import React, { Component } from 'react';

import EmptyWrapper from '../../hoc/EmptyWrapper';
import Layout from '../../hoc/Layout/Layout';

import GameBoard from '../../components/GameBoard/GameBoard';
import ShuffleButton from '../../components/ShuffleButton/ShuffleButton';
import Victory from '../../components/Victory/Victory';

import { shuffleArray, swapElements } from 'shared/helpers';
import { arrowKeys } from 'shared/constants';

class App extends Component {
  state = {
    // Initialize cells array with
    // ['1', '2', ..., '15', null]
    // ++c to start from 1
    cells: [...Array(15).keys()].map(c => (++c).toString()).concat(null),
    victory: false
  }

  handleKeyPress = event => {
    const emptyIndex = this.state.cells.indexOf(null);

    switch (event.keyCode) {
      case arrowKeys.top:
        // To prevent keyboard scrolling move
        event.preventDefault();
        this.handleTopMove(emptyIndex);
        break;
      case arrowKeys.right: 
        this.handleRightMove(emptyIndex);
        break;
      case arrowKeys.bottom: 
        // To prevent keyboard scrolling move
        event.preventDefault();
        this.handleBottomMove(emptyIndex);
        break;
      case arrowKeys.left:
        this.handleLeftMove(emptyIndex);
        break;
      default: return;
    }
  }

  handleTopMove(emptyIndex) {
    if (emptyIndex < 12) { // empty cell is not at last row
      this.setState({ 
        cells: swapElements(emptyIndex, emptyIndex + 4, [...this.state.cells]) 
      });
      this.ceckVictory();
    }
  }

  handleRightMove(emptyIndex) {
    if (emptyIndex % 4 !== 0) { // empty cell is not at first column
      this.setState({ 
        cells: swapElements(emptyIndex, emptyIndex - 1, [...this.state.cells]) 
      });
      this.ceckVictory();
    }
  }

  handleBottomMove(emptyIndex) {
    if (emptyIndex > 3) { // empty cell is not at first row
      this.setState({ 
        cells: swapElements(emptyIndex, emptyIndex - 4, [...this.state.cells]) 
      });
      this.ceckVictory();
    }
  }

  handleLeftMove(emptyIndex) {
    if (emptyIndex % 4 !== 3) { // empty cell is not at last column
      this.setState({ 
        cells: swapElements(emptyIndex, emptyIndex + 1, [...this.state.cells]) 
      });
      this.ceckVictory();
    }
  }

  ceckVictory() {
    const { cells } = this.state;
    
    // last cell must be empty and every next one is bigger than previous one
    if (!cells[cells.length - 1] && cells.every((cell, index) => {
      return index === 0 || index === cells.length - 1 || +cells[index - 1] < +cell;
    })) {
      this.setState({ victory: true });
    }
  }

  suffleCells = () => {
    const cells = [...this.state.cells]; // maintain immutability
    this.setState({
      cells: shuffleArray(cells)
    });
  }

  restart = () => {
    this.setState({ victory: false });
  }

  render() {
    return (
      <Layout>
        { 
          this.state.victory ? 

            <Victory playAgainClicked={ this.restart } /> :

            <EmptyWrapper>
              <GameBoard
                cells={ this.state.cells }
                keyPressed={ this.handleKeyPress }
              />
              <ShuffleButton clicked={ this.suffleCells } />
            </EmptyWrapper>
        }
      </Layout>
    );
  }
}

export default App;

