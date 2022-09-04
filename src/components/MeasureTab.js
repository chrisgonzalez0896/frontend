import React from 'react';

class MeasureTab extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          selected: false,
          timeSignature: [ 4, 4 ],
          timeLeft: 480
        };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        selected: !prevState.selected
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.selected ? 'Selected' : 'Not'}
        </button>
      );
    }
  }

  export default MeasureTab;