const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');

const inputsString = [];
const termsArray = [];
let operator;
let number1;
let number2;
let result = 0;

const isOperator = (element) => (element == '+'|| element == '-' ||
                                    element == '/' || element == '*');

const controlDecimals = (num) => {
    if(num - Math.floor(num) != 0 && (num - Math.trunc(num)).toString().length > 8) {
        return  Number(num).toFixed(7);
    }
    return Number(num);
}

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
            result = (number2 != 0)? controlDecimals(number1 / number2): 
                'Please, do not divide by 0';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}


const  reducingOneSign = (array, sign) => {
    const len= array.length;
    const ps =array.indexOf(sign);
    if( ps == -1){ return array; }

    const num = mathOperation(array[ps-1], sign, array[ps+1]);
    if(sign == '/' && array[ps+1] == 0) { return num; }
    else { 
        const firstPart = [...array.slice(0, ps-1)];
        const secondPart = [...array.slice(ps+2, len)];
        const loopResult = [...firstPart, Number(num), ...secondPart];
        return reducingOneSign(loopResult, sign);
    }
}

const operationsOrdering = (arr) => {
    result = reducingOneSign(reducingOneSign(reducingOneSign(reducingOneSign([...arr], '/'), "*"), '-'), '+'); 
    return result;
}

 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        if(result!=0 && inputsString.at(-2)== '='){ return; }
        if(screen.textContent == '0' && button.value == '0'){ return; }
        if(screen.textContent == ':'){ 
            screen.textContent = button.value;
            inputsString.push(button.value);
            keyscreen.textContent =inputsString.join(''); }
        else{
            screen.textContent += button.value;
            inputsString.push(button.value);
            keyscreen.textContent =inputsString.join('');
        }
})});


document.querySelectorAll('.purple').forEach(button => {
        screen.className= '';
        button.addEventListener('click', () => {
            if(result!=0 && typeof result == Number){
                inputsString.lenght = 0;
                termsArray.push(result);
                keyscreen.textContent += '=' + result;
            }
            if(button.value == '-'){
                if(screen.textContent.length == 0 ||
                    screen.textContent == '' || 
                    screen.textContent == ':' ||
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
                    screen.textContent = "";
                }
                
            } else if( button.value == '+'){
                if(!isOperator(inputsString.at(-1))) {
                    number1 = Number(screen.textContent);
                    termsArray.push(number1);
                    operator= button.value;
                    termsArray.push(operator);
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                    screen.textContent = "";
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
                screen.textContent = "";
            }
    })});


equals.addEventListener("click", () => {
    screen.className= '';
    if(inputsString.at(-2).indexOf('=') !=-1 || isNaN(inputsString.at(-1))) { return; }
    number2 = Number(screen.textContent);
    termsArray.push(number2);
    let result = operationsOrdering(termsArray);
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = result;
    inputsString.push('=');
    inputsString.push(result);
    keyscreen.textContent = inputsString.join('');
    termsArray.length = 0;
});

ac.addEventListener('click', () => { window.location.reload()});

bs.addEventListener('click', () => {
    if(inputsString.at(-1).indexOf('=') !=-1 || 
        inputsString.at(-2).indexOf('=') !=-1 ||
            isOperator(inputsString.at(-1))
        ) { return; }
    inputsString.pop();
    screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1);
    keyscreen.textContent =inputsString.join('');
});