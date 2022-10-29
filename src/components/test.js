import React, {useRef, useState} from 'react';

// const test = useRef();

//LCM of 2, 3, 4, 5, 6, 8, 10, 11, 12, 16, 20, 24, 28, 32, 48 is 36960

class MeasureTab extends React.Component{
    constructor(props) {

      super(props);
      this.measureRef = React.createRef();

      this.state = {
          selected: false,
          measureTime: 36960,
          strings: props.strings,
          timeSig: props.timeSig,
          num: props.allMeasures.length
        };

        console.log('NUM IN STATE: ', this.state.num);

      this.calculateTimeLeft = this.calculateTimeLeft.bind(this);  
      this.handleClickMeasure = this.handleClickMeasure.bind(this);
      this.handleClickString = this.handleClickString.bind(this);

      this.setCurrentNoteInstance = props.setCurrentNoteInstance;
      this.setCurrentPosition = props.setCurrentPosition;
      this.setFirstClick = props.setFirstClick;

      this.currentNoteInstance = props.currentNoteInstance;
      this.currentPosition = props.currentPosition;
      this.firstClick = props.firstClick;

      this.display = <div ref={this.measureRef} className={(()=>{
        let isSelected = false;
        this.state.strings.forEach((string, index) => {
          console.log(index, string)
          if(string.selected === true) isSelected = true;
        });
        return isSelected;
      })() ? 'selected-measure' : 'unselected-measure'} onClick={this.handleClickMeasure}>
        {this.state.strings.map((string, index) => {

        if(string.note === undefined) return;
  
        return <div className={`${index === 0 ? 'string top' : 'string'} ${string.selected ? 'selectedString' : null}`} onClick={this.handleClickString} >{string.note}</div>
      })}</div>
    }

    addNote(propsPosition, propsType){
      let defaultNote = {
        appearance: 'quarter',
        connected: [],
        length: 9240,
        position: propsPosition,
        type: propsType
      };
    };

    autoFillBehindWithRests(){

    };

    autoFillInFrontWithRests(){

    };

    calculateTimeLeft(){
      this.state.strings.forEach(el => {
        let total = 0;
        // function calc(){
        //   el.notes.forEach(innerEl => {
        //   total += innerEl.length;
        //   });
        // }
        let newTimeLeft = this.state.measureTime - total;
        el.timeLeft = (newTimeLeft > 0 ? newTimeLeft : 0);
        if(el.notes.length > 0) el.notes.forEach(innerEl => {
          total += innerEl.length;
        });
        // el.notes.length > 0 ? calc() : null;
      });
    };

    controls(e){
      console.log('here: ', e.key);
    };
    
    keyboardController(selected) {
      selected ? window.addEventListener('keydown', this.controls, false)
      : window.removeEventListener('keydown', this.controls, false);
      
    };

    handleClickString(e) {
      e.preventDefault();
      console.log('currentPosition: ', this.currentPosition)
      if(Object.keys(this.currentPosition).length > 0) console.log('currentPosition: ', this.currentPosition)
      this.setCurrentPosition({
        measure: this.state.num,
        string: this.state.strings[e.target.key - 1],
        subdiv: 0
      });
      this.state.strings.forEach(string => {
        /*
          need to alter this to be able to work with a guitar tuning that has two strings tuned to the exact same note
        */
        string.note === e.target.firstChild.wholeText ? string.selected = true : string.selected = false;
      });
      // e.target.classList.add('selectedString');
      // console.log('string: ', e.target.firstChild.wholeText)
      console.log('currentPosition: ', this.currentPosition)
    }
  
    handleClickMeasure() {
      /*
        will need to check to see if this is the same measure as previous, if it is then do nothing, but if it isn't then go through all other measures and make sure
        to remove 'stringSelected' from the classes of all of their string elements 
      */
      const currentStrings = this.state.strings;
      /* 
        need to set current position here, have it figure out what position person is most likeyl trying to click, if they don't have a previous note selected, go to
        the nearest quarter note subdivsion of the measure of the last note added (if none then the first quarter note sub), if there is a note selected and it's in
        same measure as the one we just clicked, then we go to the next space of the same subdivision as the last note (if the last note is an eighth-note triplet, then
        the default next note on click will be spaced an eithth-note triplet away)
      */
      this.setState(prevState => ({
        selected: !prevState.selected
      }));

      this.props.setCurrentMeasure(this.state.num);
      // console.log('currentMeasure: ', this.props.currentMeasure)
      // const newState = this.state;
      // newState.selected = !newState.selected;
      // this.state = newState;

      // function isFirstClick(currentThis){
      //   currentThis.setFirstClick(false);
      //   currentThis.firstClick = false;
      //   return {selected: true}
      // }

      // (()=>{  
      //   this.state.strings.forEach((string, index) => {
      //     console.log(index, string)
      //     if(string.selected === true) isSelected = true;
      //   });
      //   return isSelected;
      // })() ? 'selected-measure' : 

      // const currentState = this.firstClick ? isFirstClick(this) : this.state;

      console.log('selected: ', this.state.selected)
      let isSelected = false;

      this.display = <div ref={this.measureRef} className={'unselected-measure'} onClick={this.handleClickMeasure}>
      {this.state.strings.map((string, index) => {

      if(string.note === undefined) return;

      return <div  key={string.number} className={`${index === 0 ? 'string top' : 'string'} ${string.selected ? ' selectedString' : null}`}  onClick={this.handleClickString}>{string.note}</div>
    })}</div>

    this.keyboardController(this.state.selected);

    if(!this.state.selected) window.removeEventListener('keydown', ()=>{console.log('removed')}, false)
    
  };
  
    render() {
      return (

        this.display
        // <button onClick={this.handleClickMeasure}>
        //   {this.state.selected ? 'Selected' : 'Not'}
        // </button>
      );
    };
  };

  export default MeasureTab;