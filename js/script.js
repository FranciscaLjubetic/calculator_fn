const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const screen = document.getElementById('screen');

let inputsString = '';
let number1;
let operator;
let number2;
// const isNumber = (str) => (str.match(/^[-+]?([0-9]*(\.?)[0-9])+$/)!=null);
const isNumber = (str) => (str.match(/^([0-9]*(\.?)[0-9])+$/)!=null);
const isDigit = (str) => (str.match(/^[0-9]+$/)!=null);
const isPoint = (str) => (str.match(".")!=null);
const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');



// const splittingTerms = (inputString) => { 
//     const termsArray = [];
//     let inputsStringCopy = inputString;
//     for( i=0; i < inputString.length-1; i++) {
//         let char = inputString.charAt(i);
//         if (isOperator(char)){
//             let number;
//             let operator = '';
//             number = inputString.substring(0, i);
//             console.log('number', number);
//             isDigit(number)?termsArray.push(number): termsArray.push('Invalid Number');
//             operator = char;
//             termsArray.push(operator);
//             inputString -= inputString.substring(0, i+1);
//         }
//     }
//     console.log('inputstring and termsarray', inputString, termsArray);
//     return termsArray;
// } 

// const splittingTerms = (inputString) => { 
//     const termsArray = [];
//     let inputsStringCopy = inputString;
//     for( i=0; i < inputsStringCopy.length-1; i++) {
//         let char = inputsStringCopy.charAt(i);
//         if (isOperator(char)){
//             let number;
//             let operator = '';
//             number = inputsStringCopy.substring(0, i);
            
//             isNumber(number)?termsArray.push(number): termsArray.push('Invalid Number');
//             console.log('number', number);
//             operator = char;
//             termsArray.push(operator);
//             continue;
//             // inputsStringCopy -= inputsStringCopy.substring(0, i+1);
//         }
//     }
//     console.log('inputstring and termsarray', inputsStringCopy, termsArray);
//     console.log('number?', inputsStringCopy);
//     return termsArray;
// } 

// const splittingTerms = (inputString) => { 
//     const termsArray = [];
//     let inputsStringCopy = inputString;
//     for( i=0; i < inputsStringCopy.length-1; i++) {
//         // let inputsStringCopy = inputString;
//         let number;
//         let operator;
//         let char = inputsStringCopy.charAt(i);
//         if (isOperator(char)){
//             // let inputsStringCopy = inputString.substring(i+1, inputString.length-1);
            
//             number = inputsStringCopy.substring(0, i);
//             // isNumber(number)?termsArray.push(number): termsArray.push('Invalid Number');
//             termsArray.push(number)
//             console.log('number', number);
//             operator = char;
//             termsArray.push(operator);
//             // inputsStringCopy = inputsString.slice(i);
            
//         }
//     }
//     console.log('inputstring and termsarray', inputsStringCopy, termsArray);
//     console.log('number?', inputsStringCopy);
//     return termsArray;
// } 

// let  recursiveSplittingTerms = (string, i) => {
//     if(isNumber(string)){
//         termsArray.push(string);
//         return;
//     }
//     operator = string.charAt(i);
//     number = string.substring(0, i);
//     return recursiveSplittingTerms(inputsString.slice(i), ?);
// }


const mathOperation = (number1, operator, number2) => {
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = (number!= 0)? number1 / number2: 'Error';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}
 

const makeFirstNumber = (stringNumber) => {
    const dotTimes = stringNumber.split('.').length-1;
    const lineTimes = stringNumber.split('-').length-1;
    if(dotTimes > 1 || lineTimes > 1) {'Only valid numbers';};
    if(lineTimes == 1 && stringNumber.charAt(0) != 0) {'Only valid numbers';};
    return Number(stringNumber);
}

// console.log(array1.findIndex(isOperator));

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => {
//     if(button.value != '=' ){
//         inputsString+= button.value;
//         screen.textContent = `${button.value}`;
//         console.log('mi string', inputsString);
//     }
//     if(button.value == '='){
//         splittingTerms(inputsString);
//     }
// })});

document.querySelectorAll('.yellow').forEach(button => {
    button.addEventListener('click', () => {
        screen.textContent += button.value;
})});

document.querySelectorAll('.purple').forEach(button => {
    button.addEventListener('click', () => {
        number1 = Number(screen.textContent);
        console.log(number1);
        operator = button.value;
        console.log(operator);
        screen.textContent += button.value;
        rinseWell();
})});

equals.addEventListener("click", () => {
    number2 = Number(screen.textContent);
    screen.textContent = mathOperation(number1, operator, number2);

});

ac.addEventListener('click', () => reset());

const rinseWell = () => screen.textContent = "";

const reset = () => {
    screen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
};





