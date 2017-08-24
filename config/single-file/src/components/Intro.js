import React, { Component } from 'react';
import Utils from '../scripts/utils';

export default class Intro extends Component {

    render(){
        console.log("Render :: Intro ("+Utils.getParent(this.props)+")");
        console.log("Intro :: Props => " + Utils.getLevelOne(this.props));
        const message = this.props.message === undefined ?
        "To get started, edit <code>src/App.js</code> and save to reload." : this.props.message;

        return (
            <p className="App-intro">
                {message}
            </p>
        );
    }
}
