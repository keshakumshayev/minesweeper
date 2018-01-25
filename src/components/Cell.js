import React, { Component } from 'react';

export class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: false,
      empty: "",
      // adjacentBombs: 0,
      hasBomb: false,
      // flagged: false
    }
  }

  generateBomb(){
    this.setState({
      hasBomb: true
    })
  }

  // render() {
  //   return (
  //
  //   );
  // }
}
