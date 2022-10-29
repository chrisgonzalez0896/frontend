import React from 'react';
import AddMeasureButton from './buttons/AddMeasure';
import DeleteMeasureButton from './buttons/DeleteMeasure';
import NavToFirstButton from './buttons/NavToFirst';
import NavBackSectionButton from './buttons/NavBackSection';
import NavBackFiveButton from './buttons/NavBackFive';
import NavForwardFiveButton from './buttons/NavForwardFive';
import NavNextSectionButton from './buttons/NavNextSection';
import NavToLastButton from './buttons/NavToLast';
import TimeSigButton from './buttons/TimeSig';
import AddStringButton from './buttons/AddString';
import RemoveStringButton from './buttons/RemoveString';
import CreateSectionButton from './buttons/CreateSection';

const MeasureEditorInterface = ({measureRefs, allMeasures, setAllMeasures, strings, timeSig,
    setCurrentMeasure, currentMeasure, setCurrentNoteInstance, currentNoteInstance, 
    setCurrentPosition, currentPosition, setFirstClick, firstClick, MeasureTab}) => {
        console.log('strings in interface: ', strings)
    return (<div className='interface'>
        <AddMeasureButton measureRefs={measureRefs} allMeasures={allMeasures} setAllMeasures = {setAllMeasures}
    MeasureTab={MeasureTab} strings={strings} timeSig={timeSig}
    setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
    setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
    setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
    setFirstClick={setFirstClick} firstClick={firstClick}/>
        <DeleteMeasureButton measureRefs={measureRefs} allMeasures={allMeasures} setAllMeasures = {setAllMeasures}
    MeasureTab={MeasureTab} strings={strings} timeSig={timeSig}
    setCurrentMeasure={setCurrentMeasure} currentMeasure={currentMeasure}
    setCurrentNoteInstance={setCurrentNoteInstance} currentNoteInstance={currentNoteInstance}
    setCurrentPosition={setCurrentPosition} currentPosition={currentPosition}
    setFirstClick={setFirstClick} firstClick={firstClick}/>
        <NavToFirstButton />
        <NavBackSectionButton />
        <NavBackFiveButton />
        <NavForwardFiveButton />
        <NavNextSectionButton />
        <NavToLastButton />
        <TimeSigButton />
        <AddStringButton />
        <RemoveStringButton />
        <CreateSectionButton />
        Interface here
    </div>)
};

export default MeasureEditorInterface;