import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const CodeTextBox = ({handleChangeCode, initVal}) => (
  <div className=" col">
    <div className="card">
      <div className="card-header bg-primary text-light">
        Type in Markdown here
      </div>
      <div className="card-body CodeCardBody">
        <textarea placeholder={initVal} onChange={handleChangeCode} id="editor" className="">
        </textarea>
      </div>
    </div>
  </div>
);

export default CodeTextBox;