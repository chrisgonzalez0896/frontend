import React, {useRef, useState} from 'react';

class Note extends React.Component{
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
      this.setCurrentNoteInstance = props.setCurrentNoteInstance;
    };
  
    setNote(newNote){
      let keys = Object.keys(newNote);
      if(keys.length > 0) keys.forEach(el => {this.state[el] = newNote[el]});
    };
  
    handleClick(){
      this.setCurrentNoteInstance(this);
      //setting the current note instance changes part of the UI that allows you to edit individual note
    };
  }

  export default Note;