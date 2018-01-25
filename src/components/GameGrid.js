import React, { Component } from 'react';
import { Cell } from "./Cell";

export class GameGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 5,
      rows: 5,
      board: []
    }
  }

  componentWillMount() {
    this.setState({
        board: this.generateEmptyBoard(),
        board: this.setBombs()
    })
    // this.setBombs()
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

  setBombs() {
    this.selectBombCell()
  }

  selectBombCell(){
    this.setState({
      board: this.state.board[1][1].generateBomb()
    })
  }


  // Math.floor(Math.random()*this.state.columns)
  // Math.floor(Math.random()*this.state.rows)

  handleClick(row, column) {
      console.log(this.state.board[row][column]);
      console.log(this.state.board[row][column].state.hasBomb);
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
                    return <div
                      onClick={() => this.handleClick(rowNumber,colNumber)}
                      data-cell-id={rowNumber*this.state.columns+colNumber+1}
                      className="square">{cell.state.empty}
                      </div>;
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
