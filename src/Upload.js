import React, { Component } from 'react';

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
  },
};

class Upload extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    for(let n=0; n<this.fileInput.files.length; n++){
      this.props.add(this.fileInput.files[n]);
    }
  }

  render() {
    return (
      <div className="Upload">
      <form onSubmit={this.handleSubmit} style={styles.form}>
      <label>Upload file:</label>
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
