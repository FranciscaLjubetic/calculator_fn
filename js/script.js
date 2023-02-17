const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');


//check
const inputsString = [];
const termsArray = [];
let operator;
let number1;
let number2;
let GrandResult = 0;

//check
const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');

//check
const rinseWell = () => screen.textContent = "";

//check
const controlDecimals = (num) => {
    if(num - Math.floor(num) != 0 && (num - Math.trunc(num)).toString().length > 8) {
        return  Number(num).toFixed(7);
    }
    return Number(num);
}

// check//
const reset = () => {
    let iS = inputsString.length
    screen.className= '0';
    screen.textContent = '';
    keyscreen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
    inputsString.forEach((it)=> inputsString.pop(it));
    termsArray.forEach((it)=> termsArray.pop(it));
};


// check//
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


const  reducingOneSign = (array, sign) => {
    const len= array.length;
    const ps =array.indexOf(sign);
   
    if( ps == -1){ 
        // const resultingArray = [];
        // array.forEach((item) => resultingArray.push(item))
        console.log('hostia tio, no envuelvo ni mierda', 'len', len, array, typeof [...array])
        console.log( typeof array[0])
        return array; 
    }

    const num = Number(mathOperation(array[ps-1], sign, array[ps+1]));
    const firstPart = [...array.slice(0, ps-1)];
    const secondPart = [...array.slice(ps+2, len)];
    const result = [...firstPart, num, ...secondPart];

    return reducingOneSign(result, sign);
}

const operationsOrdering = (arr) => {
    console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);
    let rest = []; 
   
    rest = reducingOneSign(reducingOneSign(reducingOneSign(reducingOneSign([...arr], '/'), "*"), '-'), '+');
    console.log(rest, 'resultado')
    return rest[0];   
}

 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        //to avoid multiple 0s before the point
        if(screen.textContent == '0' && button.value == '0'){ return; }
        else{
            screen.textContent += button.value;
            inputsString.push(button.value);
            keyscreen.textContent =inputsString.join('');

          
        }
})});

document.querySelectorAll('.purple').forEach(button => {
        screen.className= '';
        button.addEventListener('click', () => {
            if(button.value == '-'){
                if(screen.textContent.length == 0 ||
                    screen.textContent == '' || 
                    isOperator(screen.textContent.charAt(-1))
                    ){ 
                    screen.textContent = button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                }
                 else {
                    number1 = Number(screen.textContent);
                    termsArray.push(number1);
                    operator= button.value
                    termsArray.push(button.value);
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
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

                // console.log('terms array at operator', termsArray);

                rinseWell();
            }
    })});


equals.addEventListener("click", () => {
    screen.className= '';
    number2 = Number(screen.textContent);
    termsArray.push(number2);
    const len = termsArray.length
    // let result = (len <= 3)? ((number1 && operator && number2!=0)? controlDecimals(mathOperation(number1, operator, number2)): 'invalid operation'):
    
    let result = operationsOrdering(termsArray);
    console.log('result', result, GrandResult)
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = (isNaN(result) && result != 'Please, not divide by 0')? 'Error, Invalid Numbers': result;
    screen.textContent = result;
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => {
    screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1);
    termsArray.pop();
    inputsString.pop();
});