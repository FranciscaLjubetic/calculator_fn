const operationsOrdering = (arr) => {
    console.log('que vergas entra', arr, typeof arr, arr[0], arr[1]);
    result = reducingOneSign(reducingOneSign(reducingOneSign(reducingOneSign([...arr], '/'), "*"), '-'), '+'); 
    return result;
}

 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        //to avoid multiple 0s before the point
        if(screen.textContent == '0' && button.value == '0'){ return; }
        if(screen.textContent == 'Hi' && button.value != '0'){ 
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
            // if(result!=0 && typeof result == Number){
            //     console.log('before' , termsArray);

            //     // termsArray=[result];
            //     console.log('after' , termsArray);
            //     number1=result;
            //     inputsString.push(button.value);
            //     keyscreen.textContent =inputsString.join('');
            // }
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
    // inputsString.push(number2);
    termsArray.push(number2);
    let result = operationsOrdering(termsArray);
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = result;
    keyscreen.textContent += '=' + result;
    console.log('termsarray al igual', termsArray);
    console.log('inputsString al igual', inputsString);
});

ac.addEventListener('click', () => {
    inputsString.length = 0;
    termsArray.length = 0;
    operator = '';
    number1 = 0;
    number2 = 0;
    keyscreen.textContent ='';
    screen.textContent =  '';
    window.location.reload()});

bs.addEventListener('click', () => {
    if(inputsString.at(-1).indexOf('=') !=-1) { return;}
    //en el caso de que inputstring el ultimo parametro no tenga un igual y de que el terms array tenga mas de 
    //1 de largo
    inputsString.pop();
    termsArray.pop();
    //
    screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1);
    keyscreen.textContent =inputsString.join('');
    keyscreen.textContent =inputsString.join('');
    

});