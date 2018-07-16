import React, { Component } from 'react';

import Layout from '../../hoc/Layout/Layout';
import GameBoard from '../../components/GameBoard/GameBoard';
import ShuffleButton from '../../components/ShuffleButton/ShuffleButton';

import { shuffleArray } from '../../shared/helpers';

class App extends Component {
  state = {
    // Initialize cells array with
    // ['1', '2', ..., '15', null]
    // ++c to start from 1
    cells: [...Array(15).keys()].map(c => (++c).toString()).concat(null)
  }

  handleKeyPress = event => {
    console.log(event);
  }

  suffleCells = () => {
    const cells = [...this.state.cells]; // maintain immutability
    this.setState({
      cells: shuffleArray(cells)
    });
  }

  render() {
    return (
      <Layout>
        <GameBoard
          cells={ this.state.cells }
          keyPressed={ this.handleKeyPress }
        />
        <ShuffleButton clicked={ this.suffleCells } />
      </Layout>
    );
  }
}

export default App;

