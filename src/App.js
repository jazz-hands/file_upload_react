import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileTable from './FileTable.js';
import Upload from './Upload.js';

class App extends Component {
  state = {
    files: []
  };

  constructor(props) {
    super(props);
    // this.addToFileList = this.addToFileList.bind(this)
  }

  addFile = (file) => {
    this.setState({
      files: [
        ...this.state.files,
        ...file
      ]
    });
  }

  deleteFile = (file) => {
    //TO DO
    // this.setState({
    //   ...this.state,
    //   ...file
    // });
  }

  updateTable = (files) => {
    debugger
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">File Uploader</h1>
        </header>
        <Upload add={this.addFile}/>
        <FileTable files={this.state} onChange={this.updateTable}/>
      </div>
    );
  }
}

export default App;
