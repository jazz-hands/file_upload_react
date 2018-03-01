import React, { Component } from 'react';
import './App.css';
import FileTable from './FileTable.js';
import Upload from './Upload.js';

class App extends Component {
  state = {
    files: []
  };

  // constructor(props) {
  //   super(props);
  // }

  addFile = (file) => {
    this.setState({
      ...this.state.files.push(file)
    });
  }

  deleteFile = (e) => {
    let files = this.state.files;
    let index = files.indexOf(e)
    files.splice(index, 1);
    this.setState({files: files });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">File Uploader</h1>
        </header>
        <Upload add={this.addFile}/>
        <FileTable files={this.state} deleteFile={this.deleteFile} onChange={this.updateTable}/>
      </div>
    );
  }
}

export default App;
