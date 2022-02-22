// const addTwoPlusTwo = (n) => {  
//     const solution = 2 + 2;
//     console.log(`The answer is: ${solution}`); 
// }
// addTwoPlusTwo(anyInput); 

// Linear
let total = 0; 
const addNumbersInTheArray = (n) => {
    for (let i = 0; i < n.length; i++){
        total += n[i];
        console.log(`After ${i + 1} iterations, total is: ${total}`);
    }
    return total; 
}

// addNumbersInTheArray([3, 7]);
// answer should be: 10

// Quadratic
let total = 0; 
const addNumbersInTheArray = (n) => {
    for (let i = 0; i < n.length; i++){
        for (let j = 0; j < n.length; j++){
            total += n[i];
            console.log(`After ${i + 1} iterations, total is: ${total}`);
        }
    }
    return total; 
}


// write function that generates an array of a custom length
let customArray = []; 
const genArray = (desiredArrayLength) => {
    customArray = []; 
    for (let i = 0; i < desiredArrayLength; i++){
        randNum = Math.floor(Math.random() * 100)
        customArray.push(randNum); 
    }
    console.log(`Generated array length: ${customArray.length}`); 
    return customArray; 
}
let time1 = 0; 
let time2 = 0; 
let timeElapsed = 0; 

let inputs = []; 
let results = []; 

genArray(100); 
inputs.push(100); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(200); 
inputs.push(200); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(300); 
inputs.push(300); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(400); 
inputs.push(400); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(500); 
inputs.push(500); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(600); 
inputs.push(600); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(700); 
inputs.push(700); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(800); 
inputs.push(800); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs);
console.log(results); 

genArray(1000); 
inputs.push(1000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 

genArray(10000); 
inputs.push(10000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 

genArray(100000); 
inputs.push(100000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 

genArray(250000); 
inputs.push(250000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 

genArray(500000); 
inputs.push(500000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 

genArray(750000); 
inputs.push(750000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 

genArray(1000000); 
inputs.push(1000000); 
time1 = performance.now();
addNumbersInTheArray(customArray); 
time2 = performance.now();
timeElapsed = time2 - time1;  
console.log(`Time elapsed for call to addNumbersInTheArray: ${(timeElapsed)} ms`);
results.push(timeElapsed);
console.log(inputs); 
console.log(results); 










