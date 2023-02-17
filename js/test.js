

const controlDecimals = (num) => {
    if(num - Math.floor(num) != 0 && (num - Math.trunc(num)).toString().length > 8) {
        return num.toFixed(7);
    }
    return num;
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
    const nue = [36, 36]
    if(len <= 2 || (typeof sign) == undefined) { console.log(len, 'len'); return array; };
    const ps =array.indexOf(sign);
   
    if(ps == -1){ 
        console.log('hostia tio, no envuelvo ni mierda', 'len', len, array, typeof [...array])
        const resultingArray = [];
        array.forEach((item) => resultingArray.push(item))
        console.log('resultadin', resultingArray, resultingArray[0])
        if(resultingArray.length == 0 ){ GrandResult == resultingArray[0]; console.log()}
        // return [...resultingArray]; 
        console.log('dentro del if', nue);
        return Array.of(nue);
        
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
    console.log(resultado, nue, 'comparando el look de los arrays');

    return reducingOneSign([...resultado], sign);
    
}

// const operationsOrdering = (arr) => {
//     let multi = [];
//     let div = [];
//     let plus = []; 
//     let rest = []; 
//     let len = [...arr].length;
    

//     console.log('largo inicial de la verga', len);
//     console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);
//     // rest = usingJavascriptPrecedenceItself(arr);

//     //    rest = reducingOneSign([...arr], '+');
//         // rest = Array.from(reducingOneSign(Array.from(reducingOneSign(Array.from(reducingOneSign(Array.from(reducingOneSign([...arr], '*')), "/")), '+')), '-'));
        
//         // console.log(rest, 'restfinal');
//         // return rest;   

//         multi = reducingOneSign(arr, '*');
//         console.log(multi, 'resultado de *');
//         // console.log('con /')
//         // div = reducingOneSign(multi, '/');
//         // console.log(div, 'resultado de /');
//         // console.log('con +')
//         // plus = [...reducingOneSign([...div], '+')];
//         // console.log(plus, 'resultado de +');
//         // console.log('impresion final plus', plus);
//         // console.log('con -', plus)
//         // rest = [...reducingOneSign([...plus], '-')];
//         // console.log(rest, 'rest');
//         return multi;   
// }


const stripE = [8, '*', 7, '*', 6, '-', 5];
// let pico = operationsOrdering(stripE);
// console.log('pisco', pico);

// let pichula = reducingOneSign(stripE, '-');
// console.log('pennis', pichula);

let falo = reducingOneSign(stripE, '*');
console.log('falus', falo);
