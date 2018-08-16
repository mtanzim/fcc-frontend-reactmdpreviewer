import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeTextBox from './CodeTextBox';
import PreviewTextBox from './PreviewTextBox';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tanzim's React Markdown Previewer!</h1>
        </header>
{/*         <p className="App-intro row justify-content-md-center">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="">
          <div className="row justify-content-md-center">
            <CodeTextBox />
            <PreviewTextBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
