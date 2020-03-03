import XRComponent from 'jsmxq-react'

class Validator extends XRComponent {

    constructor(name) {
        super(name);

        this.subscriber.addSubject("VALIDATOR");
    }

    onMessageReceive(msg) {
        let sub = msg.content.retSub;
        let editText = msg.content.editText;

        if(/[^A-Za-z0-9]+/.test(editText)) {
            this.post("VAL_"+sub, {editText: editText, err: 'only characters and numbers allowed'});
        } else {
            this.post("VAL_"+sub, {editText: editText, err: null});            
        }
    }
}

if(window.gValidator === undefined) {
    window.gValidator = new Validator("Validator");
}

export default window.gValidator