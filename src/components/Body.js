import React, { Component } from 'react';
import Utils from '../scripts/utils';

export default class Body extends Component {
    render(){
        console.log("Render :: Body ("+Utils.getParent(this.props)+")");
        console.log("Body :: Props => " + Utils.getLevelOne(this.props));
        return (
            <div className="app-body">
                {this.props.children}
            </div>
        );
    }
}
