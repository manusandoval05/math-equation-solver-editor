import {default as forms} from "./components/materialize/forms.js";

class MaterializeModule{
    constructor(){
        this.forms = forms; 
    }
}

const Materialize = new MaterializeModule();

export default Materialize; 