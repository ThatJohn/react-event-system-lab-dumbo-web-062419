// Code EyesOnMe Component Here
// Code Keypad Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
    
    focusHandler = () => {
        console.log('Good!');
    }

    blurHandler = () => {
        console.log('Hey! Eyes on me!');
    }

    render(){
        return (
            <div><button onFocus={this.focusHandler} onBlur={this.blurHandler} >Ok</button></div>
        );
    }
}