const submit = document.getElementById('submit'); 
const input = document.getElementById('input'); 
let output = document.querySelector('.output');
let encodedMsg = document.querySelector('.msg');  
let textNoSpaces = ''; 
let textNoSpacesNoPeriodsNoLeft = ''; 
let textNoSpacesNoPeriodsNoQuotes = '';
let indexOfSpace = '';
let cleanedUserInput = '';  
let cryptograph = ''; 
let specialCharacters = {}; 
let specialCharArr = [];

///////////////
// Clean Input
///////////////
const removeExtraSpaces = (userInputText) => {
    textNoSpaces = userInputText.trim(); 
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
    
    return textNoSpacesNoPeriodsNoQuotes; 
}

const analyzeText = (cleanedUserInput) => {
    let capitalPositions = []; 
    // this function takes note of which words are capitalized and accounts for special characters in the user input
    // make an array that specifies the unicode code designator for each special character -> then access that array when posting the cryptograph to the DOM
    for (let char in cleanedUserInput){
        const myObj = {
            pos: char,
            value: cleanedUserInput[char]
        }
        const code = cleanedUserInput.charCodeAt(char);  
        
        if (code > 47 && code < 58){
            specialCharArr.push(myObj); 
        } else if (code > 64 && code < 91){
            specialCharArr.push('cap');  
        } else if (code > 96 && code < 123){
            specialCharArr.push(null);  
        } else if (code > 32 && code < 48){
            specialCharArr.push(myObj); 
        } else if (code > 57 && code < 65){
            specialCharArr.push(myObj); 
        } else if (code === 32){
            specialCharArr.push(null); 
        } else {
            alert('I\'m sorry, this is an invalid input. Please refresh the page & try again'); 
        } 
    } 
    // capital letters -> capitals = [positions]; 
    for (let char in cleanedUserInput){
        if (cleanedUserInput[char] === cleanedUserInput[char].toUpperCase() && cleanedUserInput[char] !== ' '){
            capitalPositions.push(char); 
        }
    }
    return specialCharacters;  
}


//////////////
// CIPHER
//////////////
const alphaMap = {0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j',10:'k',11:'l',12:'m',13:'n',14:'o',15:'p',16:'q',17:'r',18:'s',19:'t',20:'u',21:'v',22:'w',23:'x',24:'y',25:'z'}

const numMap = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25}

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
} 

let encodedArray = []; 
const encodeInputRecursively = (inputToEncode) => {
    let arrayToEncode = inputToEncode.toLowerCase().split("");
    let loopCount = arrayToEncode.length; 
    if (arrayToEncode.length == 0){
        return; 
    } else {      
        for (let i = 0; i < loopCount; i++){
            encodedArray.push(cipherAlpha[numMap[arrayToEncode[0]]]); 
            arrayToEncode.shift(); 
        }
        
        let numSpaces = 0; 
        for (let element of encodedArray){
            if (element === undefined){
                numSpaces += 1; 
            }
        }
        for (let i = 0; i < numSpaces; i++){
            indexOfSpace = encodedArray.indexOf(undefined); 
            encodedArray.splice(indexOfSpace, 1, ' ');
        }
    }
    return cryptograph = encodedArray.join('');  
}

////////////////
// Gen Boxes
////////////////
const cryptoBoard = document.querySelector('.cryptoBoard'); 

const genBoxes = () => {
    let numWords = cryptograph.split(' ').length; 

    for (let i = 0; i < numWords; i++){
        const wordBox = document.createElement("div");
        wordBox.classList.add('wordBox'); 
        wordBox.classList.add(`wordBox-${i}`); 
        cryptoBoard.appendChild(wordBox); 
    }

    let currentWordInLoop = 0; 
    for (let i = 0; i < cryptograph.length; i++){
        // Incorporate specialCharArr
        if (specialCharArr[i] === 'cap'){ 
            const letterBox = document.createElement("div"); 
            letterBox.classList.add('letterBox'); 
            const upperCase = cryptograph[i].toUpperCase(); 
            const letter = document.createTextNode(`${upperCase}`);
            letterBox.appendChild(letter); 
            const theAppropriateWordBox = document.querySelector(`.wordBox-${currentWordInLoop}`);
            theAppropriateWordBox.appendChild(letterBox); 
        } else if (specialCharArr[i]){
            const letterBox = document.createElement("div");
            letterBox.classList.add('letterBox'); 
            const letter = document.createTextNode(`${specialCharArr[i].value}`);
            letterBox.appendChild(letter); 
            const theAppropriateWordBox = document.querySelector(`.wordBox-${currentWordInLoop}`);
            theAppropriateWordBox.appendChild(letterBox);  
        } else if (cryptograph[i] !== ' '){
            const letterBox = document.createElement("div"); 
            letterBox.classList.add('letterBox'); 
            const letter = document.createTextNode(`${cryptograph[i]}`);
            letterBox.appendChild(letter); 
            const theAppropriateWordBox = document.querySelector(`.wordBox-${currentWordInLoop}`); 
            theAppropriateWordBox.appendChild(letterBox);            
        } else {
            currentWordInLoop += 1;             
        }
    }

    cryptoBoard.classList.add('active'); 
}


const takeScreenShot = () => {
    html2canvas(document.getElementById('capture')).then(canvas => {
        document.body.appendChild(canvas); 

        canvas.toBlob(function(blob) {
            saveAs(blob, 'cryptoGraphFile.png');
        })
    })
}


////////////////
// Program Flow
////////////////
const cleanInput = (userInputText) => {
    removeExtraSpaces(userInputText);
    removePeriodsAndQuotationMarks(textNoSpaces); 
    analyzeText(textNoSpacesNoPeriodsNoQuotes);
}

const resetInput = () => {
    input.value = ''; 
}

const handleInput = (userInputText) => {
    
    let cleanInputTime1 = performance.now();
    cleanInput(userInputText);
    let cleanInputTime2 = performance.now(); 
    console.log(`Time elapsed for call to cleanInput: ${(cleanInputTime2 - cleanInputTime1) / 1000} seconds`);

    resetInput();  

    let genRandCipherTime1 = performance.now();
    genRandCipher();
    let genRandCipherTime2 = performance.now(); 
    console.log(`Time elapsed for call to genRandCipher: ${(genRandCipherTime2 - genRandCipherTime1) / 1000} seconds`);

    let encodeInputRecursivelyTime1 = performance.now();
    encodeInputRecursively(textNoSpacesNoPeriodsNoQuotes);
    let encodeInputRecursivelyTime2 = performance.now(); 
    console.log(`Time elapsed for call to encodeInputRecursively: ${(encodeInputRecursivelyTime2 - encodeInputRecursivelyTime1) / 1000} seconds`);
    
    let genBoxesTime1 = performance.now();
    genBoxes(cryptograph);
    let genBoxesTime2 = performance.now(); 
    console.log(`Time elapsed for call to genBoxes: ${(genBoxesTime2 - genBoxesTime1) / 1000} seconds`);

    takeScreenShot();     
}

submit.addEventListener('click', ()=>{
    let handleInputTime1 = performance.now(); 
    handleInput(input.value); 
    let handleInputTime2 = performance.now(); 
    console.log(`Time elapsed for call to handleInput: ${(handleInputTime2 - handleInputTime1) / 1000} seconds`)
});



// Re-factor Ideas
// include accounting for blank submission in cleanInput function!    
// Extract out logic for creating DOM elements into a func
// Use recursion for cipherGen func
// Should only need one charMap for cipher, not two...revisit
// abbreviated syntax for if|else (ref: u-course)
// revisit variable/func names
// spacing & comments
// Look for common implementations of cleaning/validating user inputs
// Verify no security issues with innerHTML
// remember to reset arrays to ''
// for gen boxes function: reset cryptoBoard to have zero boxes to start -> won't have to refresh the page
// account for user submit with no entry! 
    // Text alert when user submits with no text
    // re-factor to...
    // inactive submit button vs active (when text input)
    // while we're at it...move "Enter text in the box" directions to be the text area default text


