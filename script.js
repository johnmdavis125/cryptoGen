const alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

const submit = document.getElementById('submit'); 
const input = document.getElementById('input'); 

const handleInput = () => {
    console.log('user clicked submit'); 
    console.log(input.value); 
}

submit.addEventListener('click', (event)=>{
    handleInput(event); 
});

