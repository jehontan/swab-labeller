import React from 'react';

import {BrowserRouter as Router,
        Switch,
        Link,
       Route} from 'react-router-dom';

import PropTypes from 'prop-types';
import './App.css';
import { withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import CreateView from './CreateView';
import { formatDistanceStrictWithOptions } from 'date-fns/fp';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePrint = this.handlePrint.bind(this);
    this.handlePrintDone = this.handlePrintDone.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);

    this.state = {
      print: false,
      newEntry: false,
    };
  }

  handlePrint() {
    this.setState({print: true});
  }

  handlePrintDone() {
    this.setState({print: false});
  }

  handleNewEntry() {
    this.setState({newEntry: true})
  }

  render()
  {
    const {classes} = this.props;
    
    return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Swab Labeller
          </Typography>
            <Switch>
            <Route path="/">
              <Button color="inherit" startIcon={<AddCircleOutlineIcon />} onClick={this.handleNewEntry}>New</Button>
              <Button color="inherit" startIcon={<PrintIcon />} onClick={this.handlePrint}>Print</Button>
            </Route>
          </Switch>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="md">
        <Switch>
          <Route path="/scan">
            {<h1>Test</h1>}
          </Route>
          <Route path="/">
            <CreateView onPrint={this.handlePrintDone} onNewEntry={()=>this.setState({newEntry: false})} {...this.state}/>
          </Route>
        </Switch>
      </Container>
    </div>
    </Router>
  );}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(App);
