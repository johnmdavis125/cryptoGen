///////////////
// Clean Input
///////////////
const submit = document.getElementById('submit'); 
const input = document.getElementById('input'); 
let output = document.querySelector('.output'); 

const removeExtraSpaces = (text) => {
    textNoSpaces = text.trim(); 
    console.log(`textNoSpaces: ${textNoSpaces}`); 
    return textNoSpaces;
}

const removePeriodsAndQuotationMarks = (textNoSpaces) => {
    let textNoSpacesNoPeriods = ''; 

    //Remove Periods
    if (textNoSpaces.includes("\.")){
        textNoSpacesNoPeriods = textNoSpaces.substring(0, `${textNoSpaces.length}` -1)
    } else {
        textNoSpacesNoPeriods = textNoSpaces; 
    }
    // Remove Left Quote Mark
    if (textNoSpacesNoPeriods.includes("\"")){
        textNoSpacesNoPeriodsNoLeft = textNoSpacesNoPeriods.substring(1);
    } else {
        textNoSpacesNoPeriodsNoLeft = textNoSpacesNoPeriods; 
    }
    // Remove right Quote Mark
    if (textNoSpacesNoPeriodsNoLeft.includes("\"")){
        textNoSpacesNoPeriodsNoQuotes = textNoSpacesNoPeriodsNoLeft.substring(0, `${textNoSpacesNoPeriodsNoLeft.length}` -1)
    } else {
        textNoSpacesNoPeriodsNoQuotes = textNoSpacesNoPeriodsNoLeft; 
    }
    
    console.log(`this is result: ${textNoSpacesNoPeriodsNoQuotes}`);
    // check that this is not a x-scripting vulnerability (use SetHTML instead?)
    output.innerHTML = textNoSpacesNoPeriodsNoQuotes;
}

////////////////
// Program Flow
////////////////
const cleanInput = (text) => {
    console.log('cleaning input'); 
    
    removeExtraSpaces(text);
    removePeriodsAndQuotationMarks(textNoSpaces); 
}

const resetInput = () => {
    input.value = ''; 
}

const handleInput = (userInputText) => {
    console.log('user clicked submit');
    console.log(`original str: ${userInputText}`) 
    let text = userInputText;
    cleanInput(text);
    resetInput(); 
}

submit.addEventListener('click', ()=>{
    handleInput(input.value); 
});


//////////////
// CIPHER
//////////////
// const alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
const alphaMap = {
    0:'a',
    1:'b',
    2:'c',
    3:'d',
    4:'e',
    5:'f',
    6:'g',
    7:'h',
    8:'i',
    9:'j',
    10:'k',
    11:'l',
    12:'m',
    13:'n',
    14:'o',
    15:'p',
    16:'q',
    17:'r',
    18:'s',
    19:'t',
    20:'u',
    21:'v',
    22:'w',
    23:'x',
    24:'y',
    25:'z'
}
let cipher = []; 

const genRandCipher = () => {
    let added = []; 
    let cipher = []; 
    let randNum = 0; 
    // Generate random number between 1-26
    // let randNum = Math.floor(Math.random() * 27)
    // console.log(randNum); 
    // Check if number has been used
        // if used, gen another number
    // assign number to that index of alphaArr
    while (added.length < 26){
        randNum = Math.floor(Math.random() * 26)

        if (added.includes(randNum) == false){
            added.push(randNum); 
        }
    }
    
    for (let i = 0; i < added.length; i++){
        
        cipher[i] = alphaMap[added[i]];
    }
    console.log(`added: ${added}`); 
    console.log(`cipher: ${cipher}`); 
} 
    
    



genRandCipher(); 