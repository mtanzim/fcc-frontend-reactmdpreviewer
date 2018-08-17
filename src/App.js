import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeTextBox from './CodeTextBox';
import PreviewTextBox from './PreviewTextBox';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mdCode: '# Welcome!\nType in *markdown* in the box to the **left**.\n[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). ',
    }
  }

  handleChangeCode = (event) => {
    this.setState({ mdCode: event.target.value });
    // console.log(this.state.mdCode);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron bg-dark text-light">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to Tanzim's React Markdown Previewer!</h2>
        </div>
        <div className="row justify-content-md-center">
          <CodeTextBox initVal={this.state.mdCode} handleChangeCode={this.handleChangeCode} />
          <PreviewTextBox mdCode={this.state.mdCode} />
        </div>
        <div className="row footer justify-content-md-center border-top border-dark">
          <p>Developed and Designed by Tanzim Mokammel</p>
        </div>
      </div>
    );
  }
}

export default App;
