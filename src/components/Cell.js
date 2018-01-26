import React, { Component } from 'react';

export function generateBomb() {
  console.log("ok");
}
export class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: false,
      // adjacentBombs: 0,
      // flagged: false
    }
  }

  handleClick(row, column) {
    console.log('coming from cell');
    console.log(this);
    console.log(this.props.hasBomb ? 'KABOOM' : 'no bomb to be found');
    this.setState({
      revealed: true
    })
  }

  render() {
    console.log(this);
    return (
      <div className='square'
      onClick={() => this.handleClick(this.props.row,this.props.column)}
      >
      aa
      </div>
    );
  }
}

// row={this.props.row}
// column={this.props.column}
// hasBomb={this.props.hasBomb}
// data-cell-id={this.props.id}
// revealed={this.state.revealed}
