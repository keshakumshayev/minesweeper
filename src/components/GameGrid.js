import React, { Component } from 'react';
import { Cell } from "./Cell";

export class GameGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 5,
      columns: 5,
      board: []
    }
  }

  componentWillMount() {
    this.setState({
      board: this.generateEmptyBoard()
    })
  }

  generateEmptyBoard() {
    var emptyBoard = [];
    for (var row = 1; row <= this.state.rows; row++) {
      emptyBoard.push([]);
      for (var column = 1; column <= this.state.columns; column++) {
        emptyBoard[row-1].push(new Cell({ row: row, column: column }));
      }
    }
    console.log(emptyBoard);
    return emptyBoard
  }

  handleClick(row, column) {
      console.log(this.state.board[row][column]);
  }

  render() {
    return (
      <div className="board">
        {
          this.state.board.map(
            (row, rowNumber) => {
              return <div>{
                this.state.board[rowNumber].map(
                  (cell, colNumber) => {
                    return <div onClick={() => this.handleClick(rowNumber,colNumber)} data-cell-id={rowNumber*this.state.columns+colNumber} className="square">{cell.empty}</div>;
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
