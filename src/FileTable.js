import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class FileTable extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: true,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
    selectedRows: []
  };

  selectedRows = (rows) => {
    this.setState({
      selectedRows: rows
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this.selectedRows}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="5" style={{textAlign: 'center'}}>
                Uploaded Files
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>FileName</TableHeaderColumn>
              <TableHeaderColumn>Size</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Last Modified</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.files.files.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.size}</TableRowColumn>
                <TableRowColumn>{row.type}</TableRowColumn>
                <TableRowColumn>{row.lastModifiedDate.toUTCString()}</TableRowColumn>
                <TableRowColumn>  <RaisedButton label="Delete" primary={true} onClick={() => this.props.deleteFile(row)}/></TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
          </TableFooter>
        </Table>
      </MuiThemeProvider>
    );
  }
}
