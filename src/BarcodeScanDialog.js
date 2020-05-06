import React, { createRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { BrowserBarcodeReader } from '@zxing/library/esm5';


export default class BarcodeScanDialog extends React.Component {

  constructor(props) {
    super(props);

    this.handleCameraChange = this.handleCameraChange.bind(this);
    this.handleDetected = this.handleDetected.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
    this.startDetection = this.startDetection.bind(this);

    this.state = {
      inputDevices: [],
      camera: undefined,
      result: '',
    };
  
    this.codeReader = new BrowserBarcodeReader();
    this.videoRef = createRef();
    this.okRef = createRef();

    this.codeReader.listVideoInputDevices()
    .then(videoInputDevices => {
      this.setState({
        inputDevices: videoInputDevices,
      });
    })
    .catch(err => console.error(err));
  }

  startDetection() {
    this.codeReader.decodeOnceFromVideoDevice(this.state.camera, this.videoRef.current).then((result) => {
      this.setState({result: result.text});
    }).catch((err) => {
      console.log("Detection error", err);
    });
    console.log(`Started continous decode from camera ${this.state.camera}`);
  }

  handleCameraChange(event) {
    this.setState({camera: event.target.value}, this.startDetection);
  }

  handleDetected(result) {
    this.setState({result: result.text});
  }

  handleFinished() {
    this.props.onResult(this.state.result);
    this.setState({result: ''});
  }

  render() {
  return (
    <Dialog
      onEntered={this.startDetection}
      {...this.props}
    >
      <DialogTitle id="responsive-dialog-title">{"Scan NRIC/FIN Barcode"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                  variant="standard" 
                  label="Result"
                  fullWidth
                  value={this.state.result}
                  disabled="true"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                id="input-camera" 
                label="Select Camera"
                variant="standard"
                fullWidth
                value={this.state.camera}
                onChange={this.handleCameraChange}
              >
                {
                  this.state.inputDevices.map((device) => <MenuItem key={device.label} value={device.deviceId}>{device.label}</MenuItem>)
                }
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <video ref={this.videoRef} width="100%" height="100%" style={{border:(this.state.result==='')?"solid 1px gray":"solid 3px #00E676"}}></video>
            </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" ref={this.okRef} disabled={this.state.result === ''} onClick={this.handleFinished} color="primary">
          OK
        </Button>
        <Button onClick={this.props.onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )}
}