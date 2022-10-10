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

const MeasureEditorInterface = ({allMeasures, setAllMeasures}) => {
    return (<div className='interface'>
        <AddMeasureButton allMeasures={allMeasures} setAllMeasures={setAllMeasures}/>
        <DeleteMeasureButton />
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