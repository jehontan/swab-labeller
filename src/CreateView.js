import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';

import Form from './Form'
import Label from './Label';

const styles = theme => ({ root: {
                  flexGrow: 1,
                },
                title: {
                  flexGrow: 1,
                },
                container: {
                  padding: theme.spacing(2),
                },
                paper: {
                  margin: theme.spacing(2),
                  padding: '20px',
                  textAlign: 'center',
                  color: theme.palette.text.secondary,
                }
});

class CreateView extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);
    this.canvasRef = React.createRef();
  
    this.state = {
      generate: false,
      name: '',
      nric: '',
      dob: Date.now(),
      gender: 'M',
      nationality: ''
    };
  }

  handleNewEntry() {
    this.setState({
      generate: false,
      name: '',
      nric: '',
      dob: Date.now(),
      gender: 'M',
      nationality: ''
    });

    this.props.onNewEntry();
  }

  handleFormChange(change) {
    change.generate=false;
    this.setState(change);
  }

  handleGenerate() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.setState({generate: true});
    this.render();
  }

  handlePrint() {
    console.log("Print called");
    const canvas = this.canvasRef.current;
    const img = canvas.toDataURL("image/png");
    console.log(img);
    var a = window.open('', 'Print', 'height=500, width=500'); 
    a.document.write('<img src="'+ img +'"/>');
    a.onload = ()=>a.print();
    a.document.close();
    this.props.onPrint();
  }

  render()
  {
    const {classes} = this.props;

    if (this.props.print) this.handlePrint();
    if (this.props.newEntry) this.handleNewEntry();
    
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" align="left">
                Personal Particulars
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Form classes={this.props} onChange={this.handleFormChange} {...this.state} />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained"
                color="primary" 
                onClick={this.handleGenerate}
              >
                Generate
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" align="left">
                Preview
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Label canvasRef={this.canvasRef} {...this.state}/>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
  );}
}

export default withStyles(styles, {withTheme: true})(CreateView);
