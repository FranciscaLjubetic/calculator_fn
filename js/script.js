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

const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');

const rinseWell = () => screen.textContent = "";

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
        return array; 
    }

    const num = mathOperation(array[ps-1], sign, array[ps+1]);
    if(sign == '/' && array[ps+1] == 0) { return num; }
    else { 
        const firstPart = [...array.slice(0, ps-1)];
        const secondPart = [...array.slice(ps+2, len)];
        const result = [...firstPart, Number(num), ...secondPart];
        return reducingOneSign(result, sign);
    }
}

const operationsOrdering = (arr) => {
    console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);
    console.log(rest, 'resultado')
    return reducingOneSign(reducingOneSign(reducingOneSign(reducingOneSign([...arr], '/'), "*"), '-'), '+');  
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
    let result = operationsOrdering(termsArray);
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = result;
});

ac.addEventListener('click', () => {
    inputsString.forEach((it) => inputsString.shift(it));
    termsArray.forEach((it) => termsArray.shift(it));
    operator = '';
    number1 = 0;
    number2 = 0;
    keyscreen.textContent ='';
    screen.textContent =  '';
    window.location.reload()});

bs.addEventListener('click', () => {
    inputsString.pop();
    screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1);
    keyscreen.textContent =inputsString.join('');
    termsArray.pop();

});