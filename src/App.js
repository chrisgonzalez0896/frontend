import React, {useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  let measureRefs;

  const measureRefsArr = [];

  // for(let i = 0; i < 500; i++){
  //   const measureRef = useRef();
  //   measureRefsArr.push(measureRef);
  // };

  const measure1 = useRef();
  const measure2 = useRef();
  const measure3 = useRef();
  const measure4 = useRef();
  const measure5 = useRef();
  const measure6 = useRef();
  const measure7 = useRef();
  const measure8 = useRef();
  const measure9 = useRef();
  const measure10 = useRef();
  const measure11 = useRef();
  const measure12 = useRef();
  const measure13 = useRef();
  const measure14 = useRef();
  const measure15 = useRef();
  const measure16 = useRef();
  const measure17 = useRef();
  const measure18 = useRef();
  const measure19 = useRef();
  const measure20 = useRef();
  const measure21 = useRef();
  const measure22 = useRef();
  const measure23 = useRef();
  const measure24 = useRef();
  const measure25 = useRef();
  const measure26 = useRef();
  const measure27 = useRef();
  const measure28 = useRef();
  const measure29 = useRef();
  const measure30 = useRef();

  console.log('here: ', measureRefsArr);

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


  if(allMeasures.length === 0) {
    let defaultMeasure = [
      <MeasureTab measureRefs={measureRefs} strings={strings} timeSig={timeSig}
      setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
      setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
      setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
      setFirstClick={setFirstClick} firstClick={firstClick}
      setAllMeasures={setAllMeasures} allMeasures={allMeasures}
      />
    ];
    setAllMeasures(defaultMeasure);
    console.log('in if: ', allMeasures)
  }



  function calcDisplay(){
    const displayTabMode = <>
    {console.log('strings: ', strings)}
    {inMeasureEditor ? <MeasureEditorInterface measureRefs={measureRefs} allMeasures={allMeasures} setAllMeasures = {setAllMeasures}
    MeasureTab={MeasureTab} strings={strings} timeSig={timeSig}
    setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
    setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
    setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
    setFirstClick={setFirstClick} firstClick={firstClick} /> : <NoteEditorInterface/>}
   
    <div className='measure-carousel'>
      {allMeasures.map(measure => { 
          // console.log('in allMeasures map in App: ', measureRefs.current[0])
          return measure; 
        })}
    </div>

  </>
  const displayRegMode = <></>

  const displayPieces = inTabMode 
                  ?  displayTabMode
                  : displayRegMode;
  
  

  return displayPieces;

  };

  function handle(){
    // for(let measureRef of measures){
    //   console.log(measureRef)
    // }
    console.log('in App.js: ', currentMeasure)
  };

  // console.log('here: ', display)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='screen-container' onClick={handle}>
      {calcDisplay()}
      {console.log('currentMeasure in render: ', currentMeasure)}
    </div>}/>
      </Routes>
    </Router>

  );
}

export default App;
