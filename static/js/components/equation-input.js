import { autocompleteOptions } from "./autocomplete-options.js";
export default class EquationInput{
    constructor(){
        this.input = document.getElementById("equation-input");
        this.autocomplete = M.Autocomplete.getInstance(this.input);
        

        this.autocomplete.updateData(autocompleteOptions);
    }
    onSubmit(callback){
        this.input.onkeyup = event => {
            if(event.keyCode !== 13){
                return 
            }
            const equationText = `\$\$${this.input.value}\$\$`; 

            callback(equationText);
        }
    }
}