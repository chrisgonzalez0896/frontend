import React from "react";
import MeasureTab from "../MeasureTab";

const AddMeasureButton = ({allMeasures, setAllMeasures, strings, timeSig,
    setCurrentMeasure, currentMeasure, setCurrentNoteInstance, currentNoteInstance, 
    setCurrentPosition, currentPosition, setFirstClick, firstClick}) => {

    function handleClick(){
        const placeholder = allMeasures;
        placeholder.push(<MeasureTab strings={strings} timeSig={timeSig}
            setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
            setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
            setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
            setFirstClick={setFirstClick} firstClick={firstClick}
            setAllMeasures={setAllMeasures} allMeasures={allMeasures}
            />);
        console.log('placeholder: ', placeholder)
        setAllMeasures(placeholder);
    }

    return <button onClick={handleClick}> add measure </button> 
}

export default AddMeasureButton;