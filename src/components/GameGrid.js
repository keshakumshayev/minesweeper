import React, { Component } from 'react';
import { Cell } from "./Cell";

export class GameGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 5,
      rows: 5,
      board: [],
      bombs: [],
    }
  }

  componentWillMount() {
    this.setState({
      board: this.generateGameBoard(),
    })
  }

  generateGameBoard(bombs = this.generateBombPositions()) {
    var board = [];
    this.setState({
      bombs: bombs
    })
    for (var row = 1; row <= this.state.rows; row++) {
      board.push([]);
      for (var column = 1; column <= this.state.columns; column++) {
        var currentCell = this.currentCellNumber(row, column)
        board[row-1].push(new Cell({
                                    row: row,
                                    column: column,
                                    hasBomb: (bombs.indexOf(currentCell) > -1),
                                    id: currentCell
                                  }));

      }
    }
    console.log(board);
    return board
  }

  generateBombPositions() {
    var bombArray = []
    while(bombArray.length < 8){
      var randomnumber = Math.floor(Math.random()*(this.state.rows*this.state.columns)) + 1;
      if(bombArray.indexOf(randomnumber) > -1) continue;
      bombArray[bombArray.length] = randomnumber;
    }
    console.log(bombArray);
    return bombArray;
  }

  currentCellNumber(row, column) {
    return (row-1)*this.state.columns+column;
  }

  render() {
    return (
      <div className="board">
        {
          this.state.board.map(
            (row, rowNumber) => {
              return <div className="row">{
                this.state.board[rowNumber].map(
                  (cell, colNumber) => {
                    return <Cell row={rowNumber+1} column={colNumber+1} hasBomb={this.state.bombs.indexOf(this.currentCellNumber(rowNumber+1, colNumber+1)) > -1} id={this.currentCellNumber(rowNumber+1, colNumber+1)}></Cell>;
                  }
                )
              }</div>;
            }
          )
        }
      </div>
    );
  }
}
