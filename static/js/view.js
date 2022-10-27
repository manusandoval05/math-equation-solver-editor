import EquationInput from "./components/equation-input.js";

export default class View{
    constructor(){
        this.equationInput = new EquationInput();
        this.equationContainer = document.getElementById("equation-container");

        this.equationInput.onSubmit(equationText => this.createEquation(equationText));
    }

    createEquation(equationText){
        const $el = document.createElement("h5"); 
        $el.textContent = equationText;

        this.equationContainer.appendChild($el);

        renderMathInElement(document.body);
    }
}