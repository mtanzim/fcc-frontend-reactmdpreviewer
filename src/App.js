import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeTextBox from './CodeTextBox';
import PreviewTextBox from './PreviewTextBox';

class App extends Component {

  constructor(props) {
    super(props);

  const mdContent = [    

    '# Welcome',
    '\n',
    '## React Markdown Previewer',
    '\n',
    '[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)',
    '\n',
    'Here is some es6 code!',
    "``",
    "const sayHelloWorld = () => console.log('Hello World');",
    "``",
    '\n',
    'Let me show you blockquotes!',
    "> Blockquotes are very handy in email to emulate reply text.",
    '> This line is part of the same quote.',
    '\n',
    'Quote break.',
    'By the way, I obviously copied this from the markdown cheatsheet! :O',
    '\n',
    ' > This is a very long line that will still be quoted properly when it wraps.Oh boy let\'s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.' ,
    '\n',
    "*Now,* here is an **amazing** image!!, Also copied :O :O; DRY am I right?",
    "- but first, let me tell you why it's amazing!",
    "\t - Because I said so :P",
    "\t\t - Great things will happen if you listen to me!",
    '\n',
    'Finally, the image is below:',
    '![React Logo w/ Text](https://goo.gl/Umyytc)'
  ].join('\n');


    this.state = {
      mdCode: mdContent,
    }
  }

  handleChangeCode = (event) => {
    this.setState({ mdCode: event.target.value });
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
