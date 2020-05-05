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
        gender: this.props.gender,
        nationality: this.props.nationality,
      };

      const lines = [
        "Name: " + info.name,
        "NRIC/FIN: " + info.nric,
        "DOB: " + info.dob,
        "Gender: " + info.gender,
        "Nationality: " + info.nationality
      ];

      const padding = 10;
      const textSize = 20;
      const textLineSpace = 15;
      const qrScale = 3;
      const qrSpace = 10;
      const textBlockHeight = 5*textSize + 4*textLineSpace;
      const qr = QRCode(0,'H');
      qr.addData(JSON.stringify(info));
      qr.make();
      const qrWidth = qr.getModuleCount()*qrScale;

      const canvas = this.props.canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.save();
      ctx.font = "bold " + textSize + "px Arial";
      canvas.height = Math.max(qrWidth, textBlockHeight) + 2*padding;
      
      //const textBlockWidth = Math.max(...lines.map(i => ctx.measureText(i).width));
      //canvas.width = qrWidth + qrSpace + textBlockWidth + 2*padding;
      canvas.width = 600;
      ctx.restore();
      

      // QR Code
      ctx.save();
      ctx.translate(padding, (canvas.height-qrWidth)/2);
      qr.renderTo2dContext(ctx, qrScale);
      ctx.restore();

      // Field labels
      ctx.save();
      ctx.translate(padding + qrWidth + qrSpace, (canvas.height-textBlockHeight+0.5*textSize)/2+padding);
      ctx.font = "bold " + textSize + "px Arial";
      for (var i=0; i<lines.length; i++) {
        ctx.fillText(lines[i], 0, i*(textSize+textLineSpace));
      }
      ctx.restore();

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
                style={{border: "dashed 1px black"}}
                id="labelCanvas"
        />
      </div>
    )
  }
}

export default Label