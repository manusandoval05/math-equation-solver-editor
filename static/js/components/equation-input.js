export default class EquationInput{
    constructor(){
        this.input = document.getElementById("equation-input");
    }
    onSubmit(callback){
        this.input.onkeyup = event => {
            if(event.keyCode !== 13){
                return 
            }
            console.log(this.input.value);
            const equationText = `\$\$${this.input.value}\$\$`; 

            callback(equationText);
        }
    }
}