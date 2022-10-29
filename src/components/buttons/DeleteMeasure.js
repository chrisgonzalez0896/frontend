import React from "react";
import MeasureTab from "../MeasureTab";

const DeleteMeasureButton = ({allMeasures, setAllMeasures, strings, timeSig,
    setCurrentMeasure, currentMeasure, setCurrentNoteInstance, currentNoteInstance, 
    setCurrentPosition, currentPosition, setFirstClick, firstClick}) => {

    function handleClick(){
        console.log('click: ', allMeasures)
        // allMeasures.push();
        console.log('before: ', allMeasures);
        // setAllMeasures(placeholder);
        // console.log('strings: ', strings)
        // console.log(allMeasures.strings)
        console.log('allMeasures: ', allMeasures)
        setAllMeasures(allMeasures.slice(0, allMeasures.length - 1));
        console.log('after: ', allMeasures);
    }

    return <button onClick={handleClick}> delete measure </button> 
}

export default DeleteMeasureButton;