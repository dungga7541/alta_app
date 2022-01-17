import React, { Component } from 'react';
import "./App.css"
import Signin from "./components/Signin/index"

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Signin/>
      </div>
    );
  }
}

export default App;