const alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

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
    output.innerHTML = textNoSpacesNoPeriodsNoQuotes;
}

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



// includes
// slice(1,4) from pos 1 to pos 4 ...i think
// toLowerCase() / toUpperCase()
// replace('moz','van') (old, new)
// substring(1,3) start index to end index