import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Measure from './components/Measure';
import MeasureTab from './components/MeasureTab';


function App() {

  const measureRefsArr = [useRef()];
  const measures = [];
  
  const display = measureRefsArr.map(measure => {
    let currentMeasure = <MeasureTab measureRef={measure}/>;
    measures.push(currentMeasure);
    return currentMeasure;
  });

  console.log(display)

  function handle(){
    for(let measureRef of measures){
      console.log(measureRef)
    }
  }

  return (
    <div onClick={handle}>
      {display}
    </div>
  );
}

export default App;
