import React from 'react';

class Measure extends React.Component {
    constructor(props) {
      super(props);
        //LCM of 2, 3, 5, 7, 11 is 2310
        this.state = {
            timeSignature: [ 4, 4 ],
            flats: undefined,
            sharps: undefined,
            timeLeft: 2310
        };
      this.handleClick = this.handleClick.bind(this);
    }

    keyboardController(selected) {
      console.log(selected)
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