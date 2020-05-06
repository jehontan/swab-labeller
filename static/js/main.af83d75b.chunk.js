(this["webpackJsonpswab-labeller"]=this["webpackJsonpswab-labeller"]||[]).push([[0],{128:function(e,t,a){},188:function(e,t,a){e.exports=a(275)},193:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a.n(i),o=(a(193),a(35)),c=a(36),s=a(11),h=a(39),d=a(37),u=a(171),m=a(52),p=(a(128),a(5)),g=a(315),v=a(317),f=a(316),b=a(314),E=a(175),y=a(311),C=a(115),w=a.n(C),O=a(173),j=a.n(O),k=a(309),D=a(276),N=a(318),x=a(325),S=a(90),R=a(20),P=a(319),F=a(170),W=a.n(F),G=a(312),I=a(313),M=a(322),B=a(307),A=a(310),T=a(308),L=a(169),U=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleCameraChange=r.handleCameraChange.bind(Object(s.a)(r)),r.handleDetected=r.handleDetected.bind(Object(s.a)(r)),r.handleFinished=r.handleFinished.bind(Object(s.a)(r)),r.startDetection=r.startDetection.bind(Object(s.a)(r)),r.state={inputDevices:[],camera:void 0,result:""},r.codeReader=new L.BrowserBarcodeReader,r.videoRef=Object(n.createRef)(),r.okRef=Object(n.createRef)(),r.codeReader.listVideoInputDevices().then((function(e){r.setState({inputDevices:e})})).catch((function(e){return console.error(e)})),r}return Object(c.a)(a,[{key:"startDetection",value:function(){var e=this;this.codeReader.decodeOnceFromVideoDevice(this.state.camera,this.videoRef.current).then((function(t){e.setState({result:t.text})})).catch((function(e){console.log("Detection error",e)})),console.log("Started continous decode from camera ".concat(this.state.camera))}},{key:"handleCameraChange",value:function(e){this.setState({camera:e.target.value},this.startDetection)}},{key:"handleDetected",value:function(e){this.setState({result:e.text})}},{key:"handleFinished",value:function(){this.props.onResult(this.state.result),this.setState({result:""})}},{key:"render",value:function(){return r.a.createElement(M.a,Object.assign({onEntered:this.startDetection},this.props),r.a.createElement(B.a,{id:"responsive-dialog-title"},"Scan NRIC/FIN Barcode"),r.a.createElement(T.a,null,r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(N.a,{variant:"standard",label:"Result",fullWidth:!0,value:this.state.result,disabled:"true"})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(N.a,{select:!0,id:"input-camera",label:"Select Camera",variant:"standard",fullWidth:!0,value:this.state.camera,onChange:this.handleCameraChange},this.state.inputDevices.map((function(e){return r.a.createElement(x.a,{key:e.label,value:e.deviceId},e.label)})))),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement("video",{ref:this.videoRef,width:"100%",height:"100%",style:{border:""===this.state.result?"solid 1px gray":"solid 3px #00E676"}})))),r.a.createElement(A.a,null,r.a.createElement(y.a,{variant:"contained",ref:this.okRef,disabled:""===this.state.result,onClick:this.handleFinished,color:"primary"},"OK"),r.a.createElement(y.a,{onClick:this.props.onClose,color:"primary"},"Cancel")))}}]),a}(r.a.Component),J=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={scanDialogOpen:!1},n.handleNameChange=n.handleNameChange.bind(Object(s.a)(n)),n.handleNricChange=n.handleNricChange.bind(Object(s.a)(n)),n.handleGenderChange=n.handleGenderChange.bind(Object(s.a)(n)),n.handleDOBChange=n.handleDOBChange.bind(Object(s.a)(n)),n.handleNationalityChange=n.handleNationalityChange.bind(Object(s.a)(n)),n.handleScanDialogOpen=n.handleScanDialogOpen.bind(Object(s.a)(n)),n.handleScanDialogClose=n.handleScanDialogClose.bind(Object(s.a)(n)),n.handleScanResult=n.handleScanResult.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleNameChange",value:function(e){this.props.onChange({name:e.target.value})}},{key:"handleNricChange",value:function(e){this.props.onChange({nric:e.target.value})}},{key:"handleGenderChange",value:function(e){this.props.onChange({gender:e.target.value})}},{key:"handleDOBChange",value:function(e){this.props.onChange({dob:e})}},{key:"handleNationalityChange",value:function(e){this.props.onChange({nationality:e.target.value})}},{key:"handleScanDialogOpen",value:function(){this.setState({scanDialogOpen:!0})}},{key:"handleScanDialogClose",value:function(){this.setState({scanDialogOpen:!1})}},{key:"handleScanResult",value:function(e){this.setState({scanDialogOpen:!1}),this.props.onChange({nric:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{id:"input-name",label:"Name",value:this.props.name,variant:"standard",fullWidth:!0,onChange:this.handleNameChange})),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{id:"input-nric",label:"NRIC/FIN",variant:"standard",fullWidth:!0,value:this.props.nric,onChange:this.handleNricChange,InputProps:{endAdornment:r.a.createElement(G.a,{position:"end"},r.a.createElement(I.a,{onClick:this.handleScanDialogOpen},r.a.createElement(W.a,null)))}})),r.a.createElement(k.a,{item:!0,xs:12,sm:3},r.a.createElement(R.a,{utils:S.a},r.a.createElement(P.a,{fullWidth:!0,disableFuture:!0,variant:"inline",label:"Date of Birth",clearable:!0,value:this.props.dob,onChange:function(t){return e.handleDOBChange(t)},format:"dd/MM/yyyy"}))),r.a.createElement(k.a,{item:!0,xs:12,sm:3},r.a.createElement(N.a,{select:!0,id:"input-gender",label:"Gender",variant:"standard",fullWidth:!0,value:this.props.gender,onChange:this.handleGenderChange},r.a.createElement(x.a,{key:"M",value:"M"},"Male"),r.a.createElement(x.a,{key:"F",value:"F"},"Female"))),r.a.createElement(k.a,{item:!0,xs:12,sm:6},r.a.createElement(N.a,{id:"input-nationality",label:"Nationality",variant:"standard",value:this.props.nationality,fullWidth:!0,onChange:this.handleNationalityChange}))),r.a.createElement(U,{open:this.state.scanDialogOpen,onClose:this.handleScanDialogClose,onResult:this.handleScanResult}))}}]),a}(r.a.Component),V=a(273),H=new S.a,K=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.generate){var e={name:this.props.name,nric:this.props.nric,dob:H.format(this.props.dob,"dd MMM yyyy"),gender:this.props.gender,nationality:this.props.nationality},t=["Name: "+e.name,"NRIC/FIN: "+e.nric,"DOB: "+e.dob,"Gender: "+e.gender,"Nationality: "+e.nationality],a=V(0,"H");a.addData(JSON.stringify(e)),a.make();var n=3*a.getModuleCount(),i=this.props.canvasRef.current,l=i.getContext("2d");l.save(),l.font="bold 20px Arial",i.height=Math.max(n,160)+20,i.width=600,l.restore(),l.save(),l.translate(10,(i.height-n)/2),a.renderTo2dContext(l,3),l.restore(),l.save(),l.translate(10+n+10,(i.height-160+10)/2+10),l.font="bold 20px Arial";for(var o=0;o<t.length;o++)l.fillText(t[o],0,35*o);l.restore()}return r.a.createElement("div",{style:{overflow:"scroll",width:"100%",float:"left",position:"relative"}},r.a.createElement("canvas",{ref:this.props.canvasRef,style:{border:"dashed 1px black"},id:"labelCanvas"}))}}]),a}(r.a.Component),$=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFormChange=n.handleFormChange.bind(Object(s.a)(n)),n.handleGenerate=n.handleGenerate.bind(Object(s.a)(n)),n.handlePrint=n.handlePrint.bind(Object(s.a)(n)),n.handleNewEntry=n.handleNewEntry.bind(Object(s.a)(n)),n.canvasRef=r.a.createRef(),n.state={generate:!1,name:"",nric:"",dob:Date.now(),gender:"M",nationality:""},n}return Object(c.a)(a,[{key:"handleNewEntry",value:function(){this.setState({generate:!1,name:"",nric:"",dob:Date.now(),gender:"M",nationality:""}),this.props.onNewEntry()}},{key:"handleFormChange",value:function(e){e.generate=!1,this.setState(e)}},{key:"handleGenerate",value:function(){var e=this.canvasRef.current;e.getContext("2d").clearRect(0,0,e.width,e.height),this.setState({generate:!0}),this.render()}},{key:"handlePrint",value:function(){console.log("Print called");var e=this.canvasRef.current.toDataURL("image/png");console.log(e);var t=window.open("","Print","height=500, width=500");t.document.write('<img src="'+e+'"/>'),t.onload=function(){return t.print()},t.document.close(),this.props.onPrint()}},{key:"render",value:function(){var e=this.props.classes;return this.props.print&&this.handlePrint(),this.props.newEntry&&this.handleNewEntry(),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{className:e.paper},r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"h5",align:"left"},"Personal Particulars")),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(J,Object.assign({classes:this.props,onChange:this.handleFormChange},this.state))),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.handleGenerate},"Generate")))),r.a.createElement(D.a,{className:e.paper},r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"h5",align:"left"},"Preview")),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(K,Object.assign({canvasRef:this.canvasRef},this.state))))))}}]),a}(r.a.Component),q=Object(p.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},container:{padding:e.spacing(2)},paper:{margin:e.spacing(2),padding:"20px",textAlign:"center",color:e.palette.text.secondary}}}),{withTheme:!0})($),z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handlePrint=n.handlePrint.bind(Object(s.a)(n)),n.handlePrintDone=n.handlePrintDone.bind(Object(s.a)(n)),n.handleNewEntry=n.handleNewEntry.bind(Object(s.a)(n)),n.state={print:!1,newEntry:!1},n}return Object(c.a)(a,[{key:"handlePrint",value:function(){this.setState({print:!0})}},{key:"handlePrintDone",value:function(){this.setState({print:!1})}},{key:"handleNewEntry",value:function(){this.setState({newEntry:!0})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(u.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(g.a,null),r.a.createElement(f.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(E.a,{variant:"h6",className:t.title},"Swab Labeller"),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/"},r.a.createElement(y.a,{color:"inherit",startIcon:r.a.createElement(j.a,null),onClick:this.handleNewEntry},"New"),r.a.createElement(y.a,{color:"inherit",startIcon:r.a.createElement(w.a,null),onClick:this.handlePrint},"Print"))))),r.a.createElement(v.a,{className:t.container,maxWidth:"md"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/scan"},r.a.createElement("h1",null,"Test")),r.a.createElement(m.a,{path:"/"},r.a.createElement(q,Object.assign({onPrint:this.handlePrintDone,onNewEntry:function(){return e.setState({newEntry:!1})}},this.state)))))))}}]),a}(r.a.Component),Q=Object(p.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},container:{padding:e.spacing(2)},paper:{margin:e.spacing(2),padding:"20px",textAlign:"center",color:e.palette.text.secondary}}}),{withTheme:!0})(z),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(Q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/swab-labeller",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/swab-labeller","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()}},[[188,1,2]]]);
//# sourceMappingURL=main.af83d75b.chunk.js.map