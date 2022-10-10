import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/Measure.css';
import './stylesheets/Note.css';
import './stylesheets/EditorInterface.css';
import Measure from './components/Measure';
import MeasureTab from './components/MeasureTab';
import Note from './components/Note';
import MeasureEditorInterface from './components/MeasureEditorInterface';
import NoteEditorInterface from './components/NoteEditorInterface';


function App() {

  const [allMeasures, setAllMeasures] = useState([]);
  const [currentNoteInstance, setCurrentNoteInstance] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});
  const [currentMeasure, setCurrentMeasure] = useState({});
  const [inTabMode, setInTabMode] = useState(true);
  const [inMeasureEditor, setInMeasureEditor] = useState(true);
  const [firstClick, setFirstClick] = useState(true);
  const [keySig, setKeySig] = useState([]);
  const [clef, setClef] = useState('treble');
  // clef can be set to both for instrument like piano that use both
  const [noteSelected, setNoteSelected] = useState({});
  const [strings, setStrings] = useState([{note: 'e4', selected: false, timeLeft: 36960, notes: [], number: 1}, {note: 'b3', selected: false, timeLeft: 36960, notes: [], number: 2},
                                {note: 'g3', selected: false, timeLeft: 36960, notes: [], number: 3}, {note: 'd3', selected: false, timeLeft: 36960, notes: [], number: 4},
                                {note: 'a2', selected: false, timeLeft: 36960, notes: [], number: 5}, {note: 'e2', selected: false, timeLeft: 36960, notes: [], number: 6},
                                {note: undefined, selected: false, timeLeft: 36960, notes: [], number: undefined}, {note: undefined, selected: false, timeLeft: 36960, notes: [], number: undefined},
                                {note: undefined, selected: false, timeLeft: 36960, notes: [], number: undefined}, {note: undefined, selected: false, timeLeft: 36960, notes: [], number: undefined}]);
  const [timeSig, setTimeSig] = useState([4,4]);

  // const measureRefsArr = [useRef()];
  // const measures = [];
  
  // const display = measureRefsArr.map(measure => {
  //   let currentMeasure = <MeasureTab measureRef={measure}/>;
  //   measures.push(currentMeasure);
  //   return currentMeasure;
  // });


  if(allMeasures.length < 1) {
    let defaultMeasure = [
      <MeasureTab strings={strings} timeSig={timeSig}
      setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
      setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
      setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
      setFirstClick={setFirstClick} firstClick={firstClick}
      setAllMeasures={setAllMeasures} allMeasures={allMeasures}
      />
    ];
    setAllMeasures(defaultMeasure);
  }
  useEffect(() => {});

  const displayTabMode = <>
    {inMeasureEditor ? <MeasureEditorInterface allMeasures={allMeasures} setAllMeasures = {setAllMeasures}
    MeasureTab={MeasureTab} strings={strings} timeSig={timeSig}
    setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
    setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
    setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
    setFirstClick={setFirstClick} firstClick={firstClick} /> : <NoteEditorInterface/>}
    {allMeasures.map(measure => { return measure })}
  </>
  const displayRegMode = <></>

  const display = inTabMode 
                  ?  displayTabMode
                  : displayRegMode;

  function handle(){
    // for(let measureRef of measures){
    //   console.log(measureRef)
    // }
    console.log('in App.js: ', currentMeasure)
  }

  return (
    <div className='screen-container' onClick={handle}>
      {display}
    </div>
  );
}

export default App;
