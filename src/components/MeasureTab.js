import React, {useRef} from 'react';

// const test = useRef();

class MeasureTab extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          selected: false,
          strings: [{ note: 'e', selected: false} ,{ note: 'B', selected: false}, { note: 'G', selected: false},
                    { note: 'D', selected: false} ,{ note: 'A', selected: false}, { note: 'E', selected: false}],
          timeSignature: [ 4, 4 ],
          timeLeft: 2310
        };
      this.handleClick = this.handleClick.bind(this);
      this.display = <div className={this.state.selected ? 'selected' : null} onClick={this.handleClick}>
        {this.state.strings.map((string, index) => {
        return <div className={index === 0 ? 'string top' : 'string'}>{string.note}</div>
      })}</div>
    }

    controls(e){
      console.log('here: ', e.key);
    }
    
    keyboardController(selected) {
      selected ? window.addEventListener('keydown', this.controls, false)
      : window.removeEventListener('keydown', this.controls, false);
      
    }
  
    handleClick() {
      const currentStrings = this.state.strings;
      console.log('this is measuretab')
      this.setState(prevState => ({
        selected: !prevState.selected
      }));
      this.display = <div className={this.state.selected ? 'selected' : null} onClick={this.handleClick}>
      {this.state.strings.map((string, index) => {
      return <div className={index === 0 ? 'string top' : 'string'}>{string.note}</div>
    })}</div>
    this.keyboardController(this.state.selected)
    if(!this.state.selected) window.removeEventListener('keydown', ()=>{console.log('removed')}, false)
    }
  
    render() {
      return (

        this.display
        // <button onClick={this.handleClick}>
        //   {this.state.selected ? 'Selected' : 'Not'}
        // </button>
      );
    }
  }

  export default MeasureTab;