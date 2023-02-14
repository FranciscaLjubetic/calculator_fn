const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');

let inputsString = new Array();
let termsArray = new Array();
let operator;
let number1;
let number2;

const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');

const rinseWell = () => screen.textContent = "";

const controlDecimals = (num) => {
    if(num - Math.floor(num) != 0 && (num - Math.trunc(num)).toString().length > 8) {
        return num.toFixed(7);
    }
    return num;
}


const reset = () => {
    screen.className= '';
    screen.textContent = '';
    keyscreen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
    inputsString = [];
    termsArray = [];
    negativize = 1;
};

const mathOperation = (number1, operator, number2) => {
    let result;
    switch (operator) {
        case '+':
            result = controlDecimals(number1 + number2);
            break;
        case '-':
            result = controlDecimals(number1 - number2);
            break;
        case '*':
            result = controlDecimals(number1 * number2);
            break;
        case '/':
            result = (number2 != 0)? controlDecimals(number1 / number2): 'Please, do not divide by 0';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}


// const operationsOrdering = ( array ) => {
//     let By = array.indexOf('*');
//     let In = array.indexOf('/');
//     let Less = array.indexOf('-');
//     let Plus = array.indexOf('+');
//     const reducingArray = [];

//     if(By!=-1) {
//        reducingArray.push.apply(array.splice(0, By-1), mathOperation(array[By-1],'*',array[By+1]), array.splice(By-1));
//     } else if(By== -1 && In!=-1) {
//         reducingArray.push.apply(array.splice(0, In-1), mathOperation(array[In-1],'/',array[In+1]), array.splice(In-1));
//     } else if( In==-1 && Plus!=-1) {
//         reducingArray.push.apply(array.splice(0, Plus-1));
//         reducingArray.push(mathOperation(array[Plus-1],'+',array[Plus+1]));
//         reducingArray.push.apply(array.splice(0, Plus+1));
//         console.log(reducingArray);
//         // return reducingArray.push.apply(array.splice(0, Plus-1), mathOperation(array[Plus-1],'+',array[Plus+1]), array.splice(Plus-1));

//     } else if(Plus==-1 &&Less!=-1){
//         reducingArray.push.apply(array.splice(0, Less-1), mathOperation(array[In-1],'-',array[Less+1]), array.splice(Less-1));
//     } 

//     if( reducingArray.length == 1) {
//         return reducingArray[0];
//     } 

//     operationsOrdering(reducingArray)
// }
const reducingOneSign = (arr, sign) => {
    console.log(arr[0], arr[1])
    // let array = [];
    // array.push.apply(arr);
    // console.log('array', array);
    const array = Array.from(arr);
    const ps = array.indexOf(sign);
    console.log('ps', ps);
    const newArray = [];
    let num = 0;
    if(ps == -1 ){ return array; }
    else {
        num = mathOperation(array[ps-1], sign, array[ps+1]);
        newArray.push.apply(array.splice(0, ps-1));
        newArray.push(num);
        newArray.push.apply(array.slice(ps+1));
    }
    reducingOneSign(newArray);
}

const operationsOrdering = (arr) => {

    console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);

    let multi = reducingOneSign(arr, '*');
    let div = reducingOneSign(multi, '/');
    let plus = reducingOneSign(div, '+');
    let rest = reducingOneSign(plus, '-');
    console.log(rest, 'rest');
    return rest;
    
}
 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        if(screen.textContent == '0' && button.value == '0'){ return; }
        else{
            screen.textContent += button.value;
            inputsString.push(button.value);
            keyscreen.textContent =inputsString.join('');

            // console.log('inputstring at number1', inputsString, typeof Array.from(inputsString));
            // console.log('termsArray at number1', termsArray, typeof termsArray);
        }
})});

document.querySelectorAll('.purple').forEach(button => {
        screen.className= '';
        button.addEventListener('click', () => {
            if(button.value == '-'){
                if(screen.textContent.length == 0){ 
                    screen.textContent = button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                }
                else if((screen.textContent == '' || 
                    isOperator(screen.textContent.charAt(-1)))){
                    screen.textContent += button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                } else {
                    number1 = Number(screen.textContent);
                    termsArray.push(number1);
                    operator= button.value
                    termsArray.push(button.value);
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');

                    // console.log('screen_after_operator', screen.textContent)
                    // console.log('number1_after_operator', number1)
                    // console.log('number2_after_operator', number2)
                    // console.log('operator_after_operator', number2)

                    rinseWell();
                }
                
            } else if( button.value == '+'){
                console.log('my prev screen with +', inputsString.at(-1));
                console.log('-1', inputsString.at(-1));
                if(!isOperator(inputsString.at(-1))) {
                    number1 = Number(screen.textContent);
                    termsArray.push(number1);
                    operator= button.value;
                    termsArray.push(operator);
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                   
                    // console.log('screen_after_operator', screen.textContent)
                    // console.log('number1_after_operator', number1)
                    // console.log('number2_after_operator', number2)
                    // console.log('operator_after_operator', number2)

                    rinseWell();
                } else {
                    screen.textContent = screen.textContent 
                    inputsString.push();
                    keyscreen.textContent =inputsString.join('');
                }
            }
            else {
                number1 = Number(screen.textContent);
                termsArray.push(number1);
                operator= button.value;
                termsArray.push(operator);
                inputsString.push(button.value);
                keyscreen.textContent =inputsString.join('');

                // console.log('screen_after_operator', screen.textContent)
                // console.log('number1_after_operator', number1)
                // console.log('number2_after_operator', number2)
                // console.log('operator_after_operator', number2)

                rinseWell();
            }
    })});


equals.addEventListener("click", () => {
    screen.className= '';
    number2 = Number(screen.textContent);
    termsArray.push(number2);
    
    // let result = (number1 && operator && number2!=0)? controlDecimals(mathOperation(number1, operator, number2)): 'invalid operation';
    const ArRaY = Array.from(termsArray);
    let result = operationsOrdering(ArRaY)[0];
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = (isNaN(result) && result != 'Please, not divide by 0')? 'Error, Invalid Numbers': result;
    screen.textContent = result;

    // console.log('screen_after_equals', screen.textContent);
    // console.log('number1_after_equals', number1);
    // console.log('number2_after_equals', number2);
    // console.log('terms array at equals', termsArray);
    // console.log('result', result);
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));