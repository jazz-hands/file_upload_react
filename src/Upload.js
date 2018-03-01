import React, { Component } from 'react';
import axios from 'axios';

const styles = {
  form: {
    width: '50%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  fileInputField: {
    display: 'hidden',
    fontSize: '16px',
    border: '1px solid rgba(255,255,255,0.3)',
    // color: '#fff'
  },
  hideme: {
    display: 'none'
  }
};

class Upload extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // async function addToMemory(file) {
  async addToMemory(file) {
    try {
      const response = await axios.post('http://localhost:3000/public',file);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    for(let n=0; n<this.fileInput.files.length; n++){
      this.props.add(this.fileInput.files[n]);
      this.addToMemory(this.fileInput.files[n]);
    }
    this.fileInput.value=""
  }

  render() {
    return (
      <div className="Upload">
      <form onSubmit={this.handleSubmit} style={styles.form}>
      <label>Upload file:</label>
      <br />
        <input
          multiple={true}
          style={styles.fileInputField}
          type="file"
          ref={input => {
            this.fileInput = input;
          }}
        />
      <br />
      <button type="submit">Submit</button>
    </form>
      </div>
    );
  }
}

export default Upload;
