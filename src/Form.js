import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import BarcodeScanDialog from './BarcodeScanDialog';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scanDialogOpen: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNricChange = this.handleNricChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleNationalityChange = this.handleNationalityChange.bind(this);
    this.handleScanDialogOpen = this.handleScanDialogOpen.bind(this);
    this.handleScanDialogClose = this.handleScanDialogClose.bind(this);
    this.handleScanResult = this.handleScanResult.bind(this);
  }

  // Change Handlers

  handleNameChange(event) {
    this.props.onChange({name: event.target.value});
  }

  handleNricChange(event) {
    this.props.onChange({nric: event.target.value});
  }

  handleGenderChange(event) {
    this.props.onChange({gender: event.target.value});
  }
  
  handleDOBChange(date) {
    this.props.onChange({dob: date});
  }

  handleNationalityChange(event) {
    this.props.onChange({nationality: event.target.value});
  }

  handleScanDialogOpen(){
    this.setState({scanDialogOpen: true});
  }

  handleScanDialogClose() {
    this.setState({scanDialogOpen: false});
  }

  handleScanResult(result) {
    this.setState({scanDialogOpen: false});
    this.props.onChange({nric: result});
  }

  render() {
    return (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField 
                id="input-name" 
                label="Name" 
                value={this.props.name}
                variant="standard" 
                fullWidth 
                onChange={this.handleNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                id="input-nric" 
                label="NRIC/FIN"
                variant="standard"
                fullWidth
                value={this.props.nric}
                onChange={this.handleNricChange}
                InputProps={{
                  endAdornment:(<InputAdornment position="end"><IconButton onClick={this.handleScanDialogOpen}><PhotoCameraIcon /></IconButton></InputAdornment>),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  disableFuture
                  variant="inline"
                  label="Date of Birth"
                  clearable
                  value={this.props.dob}
                  onChange={date => this.handleDOBChange(date)}
                  format="dd/MM/yyyy"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField 
                select
                id="input-gender" 
                label="Gender"
                variant="standard"
                fullWidth
                value={this.props.gender}
                onChange={this.handleGenderChange}
              >
                <MenuItem key="M" value="M">Male</MenuItem>
                <MenuItem key="F" value="F">Female</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                id="input-nationality" 
                label="Nationality"
                variant="standard"
                value={this.props.nationality}
                fullWidth
                onChange={this.handleNationalityChange}
              />
            </Grid>
          </Grid>
          <BarcodeScanDialog open={this.state.scanDialogOpen} onClose={this.handleScanDialogClose} onResult={this.handleScanResult}/>
        </React.Fragment>
    );
  }
}

export default Form;