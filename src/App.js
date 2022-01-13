import React, { Component } from 'react';
import "./App.css"
//import Signin from "./components/Signin/index"
import Info from "./components/Signin/Info"
import Forgot_PW from './components/Signin/Forgot_PW';
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<Signin/> */}
        {/* <Info/> */}
        <Forgot_PW/>
      </div>
    );
  }
}

export default App;