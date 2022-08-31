import React from 'react';

class Measure extends React.Component {
    constructor(props){
        super(props);

        //LCM of 2,3,4,5,6,8,10,16,20,24,32,40,48 = 480, might need to add more digits to that tho
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

export default Measure;