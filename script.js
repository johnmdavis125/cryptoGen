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
    
    return textNoSpacesNoPeriodsNoQuotes; 
}

const analyzeText = (cleanedUserInput) => {
    // this function takes notes of which words are capitalized and accounts for special characters in the user input
    console.log(`this is cleanedUserInput: ${cleanedUserInput}`)
    let capitalPositions = []; 
    
    //make an array that specifies the ascii code designator for each special character -> then access that array when posting the cryptograph to the DOM
    for (let char in cleanedUserInput){
        const myObj = {
            pos: char,
            value: cleanedUserInput[char]
        }
        
        const code = cleanedUserInput.charCodeAt(char);  
        console.log(`code: ${code}`);
        
        if (code > 47 && code < 58){
            console.log(`position ${char} is a number: ${cleanedUserInput[char]}`);
            specialCharArr.push(myObj); 
        } else if (code > 64 && code < 91){
            console.log(`position ${char} is a capital letter: ${cleanedUserInput[char]}`);
            // specialCharArr.push(myObj);
            specialCharArr.push('cap');  
        } else if (code > 96 && code < 123){
            console.log(`position ${char} is a lowercase letter: ${cleanedUserInput[char]}`);
            specialCharArr.push(null);  
        } else if (code > 32 && code < 48){
            console.log(`position ${char} is a special character: ${cleanedUserInput[char]}`);
            specialCharArr.push(myObj); 
        } else if (code > 57 && code < 65){
            console.log(`position ${char} is a special character: ${cleanedUserInput[char]}`);
            specialCharArr.push(myObj); 
        } else if (code === 32){
            specialCharArr.push(null); 
        } else {
            alert('I\'m sorry, this is an invalid input. Please refresh the page & try again'); 
        }
        // specialCharArr[char] = cleanedUserInput[char]; 
        console.log(`specialCharArr: ${specialCharArr}`); 
        if (specialCharArr[char]){
            console.log(`specialCharArr: ${specialCharArr[char].pos}`); 
            console.log(`specialCharArr: ${specialCharArr[char].value}`); 
        }
    } 

    // capital letters -> capitals = [positions]; 
    for (let char in cleanedUserInput){
        console.log(cleanedUserInput[char]); 
        if (cleanedUserInput[char] === cleanedUserInput[char].toUpperCase() && cleanedUserInput[char] !== ' '){
            console.log('capital letter is here')
            capitalPositions.push(char); 
        }
    }
    console.log(capitalPositions);

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
    console.log(`cipherNums: ${cipherNums}`); 
    console.log(`cipherAlpha: ${cipherAlpha}`); 
} 

let encodedArray = []; 
const encodeInputRecursively = (inputToEncode) => {
    let arrayToEncode = inputToEncode.toLowerCase().split("");
    console.log(`this is arrayToEncode line 196: ${arrayToEncode}`); 
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
        // try to incorporate specialCharArr
        console.log(`this is cryptograph: ${cryptograph}`); 
        if (specialCharArr[i] === 'cap'){ 
            const letterBox = document.createElement("div"); 
            letterBox.classList.add('letterBox'); 
            const upperCase = cryptograph[i].toUpperCase(); 
            console.log(`this should be upperCase: ${upperCase}`); 
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
            console.log(`Now on word: ${currentWordInLoop}`);              
        }
    }

    cryptoBoard.classList.add('active'); 
}


const takeScreenShot = () => {
    html2canvas(document.getElementById('capture')).then(canvas => {
        document.body.appendChild(canvas); 

        canvas.toBlob(function(blob) {
            saveAs(blob, 'cryptoGraphFile.pdf');
        })
    })
}


////////////////
// Program Flow
////////////////
const cleanInput = (userInputText) => {
    console.log('cleaning input'); 
    removeExtraSpaces(userInputText);
    removePeriodsAndQuotationMarks(textNoSpaces); 
    analyzeText(textNoSpacesNoPeriodsNoQuotes);
}

const resetInput = () => {
    input.value = ''; 
}

const handleInput = (userInputText) => {
    cleanInput(userInputText);
    resetInput(); 
    genRandCipher(); 
    encodeInputRecursively(textNoSpacesNoPeriodsNoQuotes);
    genBoxes(cryptograph); 
    takeScreenShot();     
}

submit.addEventListener('click', ()=>{
    handleInput(input.value); 
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


