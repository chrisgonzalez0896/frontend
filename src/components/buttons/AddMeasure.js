import React from "react";
import MeasureTab from "../MeasureTab";

const AddMeasureButton = ({measureRefs, allMeasures, setAllMeasures, strings, timeSig,
    setCurrentMeasure, currentMeasure, setCurrentNoteInstance, currentNoteInstance, 
    setCurrentPosition, currentPosition, setFirstClick, firstClick}) => {

    function handleClick(){
        console.log('click: ', allMeasures)
        // allMeasures.push();
        // console.log('placeholder: ', placeholder);
        console.log('before: ', allMeasures);
        // setAllMeasures(placeholder);
        // console.log('strings: ', strings)
        // console.log(allMeasures.strings)
        console.log('allMeasures: ', allMeasures)
        setAllMeasures([
            ...allMeasures,
            <MeasureTab measureRefs={measureRefs} strings={strings} timeSig={timeSig}
            setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
            setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
            setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
            setFirstClick={setFirstClick} firstClick={firstClick}
            setAllMeasures={setAllMeasures} allMeasures={allMeasures}
            />
        ]);
        console.log('after: ', allMeasures);
    }

    return <button onClick={handleClick}> add measure </button> 
}

export default AddMeasureButton;