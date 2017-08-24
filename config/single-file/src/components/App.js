import React, { Component } from 'react';
import Utils from '../scripts/utils'
import '../style/App.css';



class App extends Component {







  render() {
      console.log("Render :: App");
      console.log("App :: Props => " + Utils.getLevelOne(this.props.children));
    return (
      <div className="App">
          {this.props.children.map( (value, idx) =>
              React.cloneElement(value, {key: idx, parent: 'App'})
          )}



      </div>
    );
  }
}

export default App;
