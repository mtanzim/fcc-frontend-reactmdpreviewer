import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import marked from 'marked';

// import { MarkdownPreview } from 'react-marked-markdown';

const prepMarked = (input)=> {
    var rawMarkup = marked(input, { sanitize: true });
    return { __html: rawMarkup };
}

const PreviewTextBox = ({mdCode} ) => (
  <div className="col">
    <div className="card">
      <div className="card-header bg-danger text-light">
        Preview
      </div>
      <div id="preview" className="card-body PreviewCardBody" dangerouslySetInnerHTML={prepMarked(mdCode)}>
        
{/*         <MarkdownPreview value={mdCode} markedOptions={{
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
        }}/> */}
      </div>
    </div>
  </div>
);

export default PreviewTextBox;