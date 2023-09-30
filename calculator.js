/*
    Marriam Jawaid
    9/29/2023
    Cal State Fullerton
    Purpose: Calculator
*/

//Analyzes the input from the Calculator
function retrieveInput(expression){
    let display = document.querySelector('.calcDisplay');
    
    //Clears display when C is pressed
    if (expression == 'C') {
        display.textContent = '';
    } 
    //Evaluates the expression on display 
    else if (expression == '=') {
        let result = checkValid(display.textContent);
        display.textContent = result;
    } 
    //Creates the Expression on display
    else {
        display.textContent += expression;
    }
}

function checkValid(givenResult){
    try {
        return eval(givenResult);
    } catch (error) {
        return 'Error';
    }
}