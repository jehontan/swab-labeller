import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNricChange = this.handleNricChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.handleNationalityChange = this.handleNationalityChange.bind(this);
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

  render() {
    return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField 
                id="input-name" 
                label="Name" 
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
                onChange={this.handleNricChange}
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
                fullWidth
                onChange={this.handleNationalityChange}
              />
            </Grid>
          </Grid>
    );
  }
}

export default Form;