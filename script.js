///////////////
// Clean Input
///////////////
const submit = document.getElementById('submit'); 
const input = document.getElementById('input'); 
let output = document.querySelector('.output');
let encodedMsg = document.querySelector('.msg');  
let textNoSpacesNoPeriodsNoQuotes = '';
let cleanedUserInput = '';  
let cryptograph = ''; 

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
    
    

    return cleanedUserInput = textNoSpacesNoPeriodsNoQuotes; 
}



//////////////
// CIPHER
//////////////

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
const numMap = {
    a:0,
    b:1,
    c:2,
    d:3,
    e:4,
    f:5,
    g:6,
    h:7,
    i:8,
    j:9,
    k:10,
    l:11,
    m:12,
    n:13,
    o:14,
    p:15,
    q:16,
    r:17,
    s:18,
    t:19,
    u:20,
    v:21,
    w:22,
    x:23,
    y:24,
    z:25
}
let cipherAlpha = []; 
let cipherNums = []; 

const genRandCipher = () => {
    let randNum = 0; 
    
    while (cipherNums.length < 26){
        randNum = Math.floor(Math.random() * 26)
        if (cipherNums.includes(randNum) == false){
            cipherNums.push(randNum); 
        }
    }
    
    for (let i = 0; i < cipherNums.length; i++){
        cipherAlpha[i] = alphaMap[cipherNums[i]];
    }
    console.log(`cipherNums: ${cipherNums}`); 
    console.log(`cipherAlpha: ${cipherAlpha}`); 
} 

let encodedArray = []; 
const encodeInputRecursively = (inputToEncode) => {
    let arrayToEncode = inputToEncode.split("");
    console.log(arrayToEncode); 
    let loopCount = arrayToEncode.length; 
    if (arrayToEncode.length == 0){
        return; 
    } else {      
        for (let i = 0; i < loopCount; i++){
            encodedArray.push(cipherAlpha[numMap[arrayToEncode[0]]]); 
            arrayToEncode.shift(); 
        }
        
        // address spaces
        let numSpaces = 0; 
        for (element of encodedArray){
            if (element === undefined){
                numSpaces += 1; 
            }
        }
        for (let i = 0; i < numSpaces; i++){
            indexOfSpace = encodedArray.indexOf(undefined); 
            encodedArray.splice(indexOfSpace, 1, ' ');
        }
        console.log(`encodedArray: ${encodedArray}`); 
    }
    return cryptograph = encodedArray.join('');  
}

////////////////
// Gen Boxes
////////////////
const cryptoBoard = document.querySelector('.cryptoBoard'); 

const genBoxes = () => {
    console.log(cryptograph); 

    let numWords = cryptograph.split(' ').length; 
    console.log(`numWords: ${numWords}`);

    for (let i = 0; i < numWords; i++){
        const wordBox = document.createElement("div");
        wordBox.classList.add('wordBox'); 
        wordBox.classList.add(`wordBox-${i}`); 
        cryptoBoard.appendChild(wordBox); 
    }

    let currentWordInLoop = 0; 
    for (let i = 0; i < cryptograph.length; i++){
        if (cryptograph[i] !== ' '){
            const letterBox = document.createElement("div"); 
            letterBox.classList.add('letterBox'); 
            const letter = document.createTextNode(`${cryptograph[i]}`);
            letterBox.appendChild(letter); 
            const theAppropriateWordBox = document.querySelector(`.wordBox-${currentWordInLoop}`); 
            theAppropriateWordBox.appendChild(letterBox); 
        } else {
            currentWordInLoop += 1;
            console.log(`Now on word: ${currentWordInLoop}`);  
        }
    }
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
    genRandCipher(); 
    encodeInputRecursively(cleanedUserInput);
    
    encodedMsg.innerHTML = cryptograph;
    genBoxes(cryptograph); 
    // fillBoxes(); 

    //remember to reset arrays to ''

}

submit.addEventListener('click', ()=>{
    handleInput(input.value); 
});






