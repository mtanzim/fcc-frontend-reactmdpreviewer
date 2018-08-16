import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class PreviewTextBox extends Component {
  render() {
    return (
      <div className="col">
        <textarea readOnly className="PreviewTextBox ">
        </textarea>
      </div>
    );
  }
}

export default PreviewTextBox;