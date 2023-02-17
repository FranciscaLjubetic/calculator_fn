const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');


//check
let inputsString = [];
const termsArray = [];
let operator;
let number1;
let number2;

//check
const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');

//check
const rinseWell = () => screen.textContent = "";

//check
const controlDecimals = (num) => {
    if(num - Math.floor(num) != 0 && (num - Math.trunc(num)).toString().length > 8) {
        return num.toFixed(7);
    }
    return num;
}

// check//
const reset = () => {
    let iS = inputsString.length
    screen.className= '';
    screen.textContent = '';
    keyscreen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
    inputsString=[];
    inputsString=[];
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
   
    const len= [...array].length;
    if(len <= 2) { console.log(len, 'len'); return; };
    const ps =array.indexOf(sign);
   
    if(len <= 1 || ps == -1 || (typeof sign) == undefined){ 
        console.log('hostia tio, no envuelvo ni mierda', 'len', len, array, typeof [...array])
        const resultingArray = [];
        array.forEach((item) => resultingArray.push(item))
        console.log('resultadin', resultingArray, resultingArray[0])
        return  resultingArray; 
    }
    const num = mathOperation(array[ps-1], sign, array[ps+1]);
    const firstPart = [...array.slice(0, ps-1)];
    const secondPart = [...array.slice(ps+2, len)];
    const resultado = [...firstPart, num, ...secondPart];



    console.log(num, 'dentro del signo' ,sign);
    console.log('array', array);
    console.log('ps', ps);
    
    console.log('firstpart', firstPart);
  
    console.log('segunda parte', secondPart);

   
    console.log(resultado);


    reducingOneSign([...resultado], sign);
}


// const  reducingOneSign = (array, sign) => {
    
//     const len= [...array].length;
//     const ps =array.indexOf(sign);
   
//     if(len == 1){ return [...array];}
//     else if(ps == -1){ 
//         console.log('hostia tio, no envuelvo ni mierda', array, typeof array)
//         return [...array]; 
//     }
//     const num = mathOperation(array[ps-1], sign, array[ps+1]);
//     console.log(num, 'dentro del signo' ,sign);
//     console.log(array)
//     console.log('array', array);
//     console.log('ps', ps);
//     const firstPart = [...array.splice(0, ps-1)];
//     console.log('firstpart', firstPart);
//     const secondPart = [...array.splice(ps+2, len-1)];
//     console.log('segunda parte', secondPart);

//     const resultado = [...firstPart, num, ...secondPart];
//     console.log(resultado);


//     reducingOneSign(resultado, sign);
// }




// const  reducingOneSign = (array, sign) => {
//     let justToCount = 0;
//     justToCount+=1;
//     const len= [...array].length;
//     console.log('cuenta por conchetumare',justToCount, len);
    
//     const ps =array.indexOf(sign);
//     console.log('ps', ps)
   
//     if(ps == -1 || len == 1 ){ 
//         console.log('resultado de reducing', array, typeof array);
//         console.log('hostia tio, no envuelvo ni mierda', typeof array)
//         console.log(array[0]);
//         return [...array]; 
//     }
//     const num = mathOperation(array[ps-1], sign, array[ps+1]);
//     console.log(num, 'dentro del signo' ,sign);
//     console.log(array)
//     console.log('array', array);
//     console.log('ps', ps);
//     const firstPart = [...array.splice(0, ps-1)];
//     console.log('firstpart', firstPart);
//     const secondPart = [...array.splice(ps+2, len-1)];
//     console.log('segunda parte', secondPart);

//     const resultado = [ ...firstPart, num, ...secondPart];
//     console.log(resultado);


//     reducingOneSign(resultado, sign);
// }

const operationsOrdering = (arr) => {
    let multi = [];
    let div = [];
    let plus = []; 
    let rest = []; 
    let len = [...arr].length;

    console.log('largo inicial de la verga', len);
    console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);
    console.log('con *')

       
        rest = [...reducingOneSign([...reducingOneSign([...reducingOneSign([...reducingOneSign([...arr], '*')], '/')], '+')], '-')];
        console.log(rest, 'rest');
        return rest;   

        // multi = reducingOneSign([...arr], '*');
        // console.log(multi, 'resultado de *');
        // console.log('con /')
        // div = reducingOneSign(multi, '/');
        // console.log(div, 'resultado de /');
        // console.log('con +')
        // plus = [...reducingOneSign([...div], '+')];
        // console.log(plus, 'resultado de +');
        // console.log('impresion final plus', plus);
        // console.log('con -', plus)
        // rest = [...reducingOneSign([...plus], '-')];
        // console.log(rest, 'rest');
        // return [...rest];   
}



// const operationsOrdering = (arr) => {
//     let multi = [];
//     let div = [];
//     let plus = []; 
//     let rest = []; 
//     let len = [...arr].length;

//     console.log('largo inicial de la verga', len);
//     console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);
//     console.log('con *')

  

//         multi = reducingOneSign(arr, '*');
//         console.log(multi, 'resultado de *');
//         console.log('con /')
//         div = reducingOneSign(multi, '/');
//         console.log(div, 'resultado de /');
//         console.log('con +')
//         plus = reducingOneSign(div, '+');
//         console.log(plus, 'resultado de +');
//         console.log('impresion final plus', plus);
//         console.log('con -', plus)
//         rest = reducingOneSign(plus, '-');
//         console.log(rest, 'rest');
//         return rest;   
// }
 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
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

                console.log('terms array at operator', termsArray);

                rinseWell();
            }
    })});


equals.addEventListener("click", () => {
    screen.className= '';
    number2 = Number(screen.textContent);
    termsArray.push(number2);
    const len = termsArray.length
    // let result = (len <= 3)? ((number1 && operator && number2!=0)? controlDecimals(mathOperation(number1, operator, number2)): 'invalid operation'):
    //(operationsOrdering(Array.from(termsArray))[0]);
    const ArRaY = Array.from(termsArray);
    let result = operationsOrdering(ArRaY);
    console.log('result', result[0])
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = (isNaN(result) && result != 'Please, not divide by 0')? 'Error, Invalid Numbers': result;
    screen.textContent = result;
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));