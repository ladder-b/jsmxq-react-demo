import * as React from 'react'
import XRComponent from 'jsmxq-react'

export default class JsmxEdit extends XRComponent {
    constructor(props){
        super(props);
    }

    handleKeyDown() {
        //ENTER_KEY = 13
        if (event.keyCode !== 13) {
            return;
        }

        event.preventDefault();

        var val = this.props.editText.trim();

        if (val) {
         this.post("MYINPUT_EDIT_DONE", { editText: val} );
        }
    }
  
    handleChange(e) {
        this.post("MYINPUT_CHANGED",{editText: e.target.value});
    }

    render() {

        var errLabel = null;
        if(this.props.err) {
            errLabel = <label>{this.props.err}</label>
        }

        return(
            <div>
                <div>
                    <input
                        name='myinput'
                        type='text'
                        value={this.props.editText}
                        onKeyDown={this.handleKeyDown.bind(this)}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <div>
                    {errLabel}
                </div>
            </div>
        )
    }
}