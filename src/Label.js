import React from 'react';
import DateFnsAdapter from "@date-io/date-fns";
const QRCode = require('qrcode-generator');

const dateFns = new DateFnsAdapter();

class Label extends React.Component {

  render() {

    if (this.props.generate) {
      const info = {
        name: this.props.name,
        nric: this.props.nric,
        dob: dateFns.format(this.props.dob, "dd MMM yyyy"),
        gender: this.props.gender
      };

      QRCode.toCanvas(this.props.canvasRef.current, JSON.stringify(info), (error) => {
        if(error) console.log(error);
      });
    }

    const divStyle={
      overflow: 'scroll',
      width:'100%',
      float: 'left',
      position:'relative'
    };

    return (
      <div style={divStyle}>
        <canvas ref={this.props.canvasRef}
                //style={{border: "dashed 1px black"}}
                id="labelCanvas"
                width="100px"
                height="100px"
        />
      </div>
    )
  }
}

export default Label