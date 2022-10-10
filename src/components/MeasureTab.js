import React, {useRef, useState} from 'react';

// const test = useRef();

const [currentNoteInstance, setCurrentNoteInstance] = useState({});
const [noteSelected, setNoteSelected] = useState({});
const [currentPosition, setCurrentPosition] = useState({});

class Note{
  constructor(props){
    super(props);
    this.state = {
      appearance: props.appearance,
      connected: props.connected,
      length: props.length,
      position: props.position,
      type: props.type
    };
    this.handleClick = this.handleClick.bind(this);
    this.setNote = this.setNote.bind(this);
  };

  setNote(newNote){
    let keys = Object.keys(newNote);
    keys.length > 0 ? keys.forEach(el => { this.state[el] = newNote[el]} ) : null;
  };

  handleClick(){
    setCurrentNoteInstance(this);
    //setting the current note instance changes part of the UI that allows you to edit individual note
  };
}

//LCM of 2, 3, 4, 5, 6, 8, 10, 11, 12, 16, 20, 24, 28, 32, 48 is 36,960

class MeasureTab extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          selected: false,
          measureTime: 36960,
          strings: [ {note: props.strings[7], selected: false, timeLeft: 36960, notes: []}, {note: props.strings[6], selected: false, timeLeft: 36960, notes: []},
                    {note: props.strings[5], selected: false, timeLeft: 36960, notes: []}, {note: props.strings[4], selected: false, timeLeft: 36960, notes: []}, 
                    {note: props.strings[3], selected: false, timeLeft: 36960, notes: []}, {note: props.strings[2], selected: false, timeLeft: 36960, notes: []},
                    {note: props.strings[1], selected: false, timeLeft: 36960, notes: []}, {note: props.strings[0], selected: false, timeLeft: 36960, notes: []} ],
          timeSignature: props.timeSignature
        };
      this.handleClick = this.handleClick.bind(this);
      this.display = <div className={this.state.selected ? 'selected' : null} onClick={this.handleClick}>
        {this.state.strings.map((string, index) => {
        return <div className={index === 0 ? 'string top' : 'string'}>{string.note}</div>
      })}</div>
    }

    addNote(){
      let defaultNote = {
        appearance: 'quarter',
        connected: [],
        length: 9240,
        position: props.position,
        type: props.type
      };
    };

    autoFillBehindWithRests(){

    };

    autoFillInFrontWithRests(){

    };

    calculateTimeLeft(){
      this.state.strings.forEach(el => {
        let total = 0;
        el.notes.length > 0 ? () => {el.notes.forEach(innerEl => {
          total += innerEl.length;
        });
        let newTimeLeft = measureTime - total;
        el.timeLeft = (newTimeLeft > 0 ? newTimeLeft : 0)} : null;
      });
    };

    controls(e){
      console.log('here: ', e.key);
    };
    
    keyboardController(selected) {
      selected ? window.addEventListener('keydown', this.controls, false)
      : window.removeEventListener('keydown', this.controls, false);
      
    };
  
    handleClick() {
      const currentStrings = this.state.strings;
      /* 
        need to set current position here, have it figure out what position person is most likeyl trying to click, if they don't have a previous note selected, go to
        the nearest quarter note subdivsion of the measure of the last note added (if none then the first quarter note sub), if there is a note selected and it's in
        same measure as the one we just clicked, then we go to the next space of the same subdivision as the last note (if the last note is an eighth-note triplet, then
        the default next note on click will be spaced an eithth-note triplet away)
      */
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
    };
  
    render() {
      return (

        this.display
        // <button onClick={this.handleClick}>
        //   {this.state.selected ? 'Selected' : 'Not'}
        // </button>
      );
    };
  };

  export default MeasureTab;