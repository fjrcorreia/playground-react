import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import Utils from '../scripts/utils';
export default class Header extends Component {
    render(){
        console.log("Render :: Header ("+Utils.getParent(this.props)+")");
        console.log("Header :: Props => " + Utils.getLevelOne(this.props));
        return (
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
        );
    }
}
