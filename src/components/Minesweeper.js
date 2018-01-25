import React, { Component } from 'react';
import { GameGrid } from "./GameGrid";

export class Minesweeper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // gameWon: false,
      // gameDifficulty: 'low',
    }
  }

  render() {
    return(
      <GameGrid />
    )
  }
}
