import React from "react";
import XRComponent from 'jsmxq-react'

import "./App.css";

import TodoEdit from "./JsmxEdit"
import JsmxEdit from "./JsmxEdit"
import gValidator from './validator'

class App extends XRComponent {
  
  constructor(props) {
    super(props);

    this.state = {
      editText: '',
      err: null
    }

    this.subscriber.addSubject("MYINPUT_EDIT_DONE");
    this.subscriber.addSubject("MYINPUT_CHANGED");
    this.subscriber.addSubject(/VAL_\B/);
  }

  onMessageReceive(msg) {
    switch(msg.subject) {
        case 'MYINPUT_EDIT_DONE':
          this.setState({editText: msg.content.editText});
          break;
        case "MYINPUT_CHANGED":
          this.post("VALIDATOR", {
            retSub: "APP_MYINPUT",
            editText: msg.content.editText
          })
          break;
        case "VAL_APP_MYINPUT":
          if(msg.content.err) {
            this.setState({err: msg.content.err});
          } else {
            this.setState({editText: msg.content.editText, err:null})
          }
          break;
      }
  }

  render() {   
    
    return (
      <div>
					<header className="header">
						<h1>Jsmxq.React</h1>						
					</header>

          <JsmxEdit editText={this.state.editText} err={this.state.err}/>
          
				</div>
    )
  }
}

export default App;