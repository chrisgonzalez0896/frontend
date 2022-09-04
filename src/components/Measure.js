import React from 'react';

class Measure extends React.Component {
    constructor(props) {
      super(props);
        //LCM of 2,3,4,5,6,8,10,16,20,24,32,40,48 = 480, might need to add more digits to that tho
        this.state = {
            timeSignature: [ 4, 4 ],
            flats: undefined,
            sharps: undefined,
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

  export default Measure;