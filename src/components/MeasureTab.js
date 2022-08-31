import React from 'react';

class MeasureTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            timeSignature: [ 4, 4 ],
            flats: undefined,
            sharps: undefined,
            timeLeft: 480
        };
        this.currentMeasure = this.currentMeasure.bind(this);
    };

    addNote(){
        console.log('adding');
    };

    removeNote(){
        console.log('removing')
    };

    highlightMeasure(){
        console.log('current measure here!');
    };

    measureClicked(){
        this.setState({working: true});
    };

    render(){
        return(
            <>
            <div>
                Measure
            </div>
            </>
        )
    };
};

export default MeasureTab;