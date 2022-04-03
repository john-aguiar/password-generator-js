
const pwDisplay = document.querySelector('.pw-display')
const letterToNumberCheck = document.querySelector('#letter-to-number');
const convertBtn = document.querySelector('#convert');
const showPassword = document.querySelector('.pw-after-body');
const copyBtn = document.querySelector('#copy');

const symbol = ['@','!','*','$','%','&','#','/', '<', '>'];
let number = -2;
let password = '';

function generatePass() {
    let input = document.querySelector('#input').value.toLowerCase().replace(/\s+/g, ''); // Pega o valor do input todo em minúsculo e sem espaços

    if(input == ''){
        return;
    } else {
        const randomSymbol1 = symbol[Math.floor(Math.random() * symbol.length)]; // Retorna um simbolo do array Symbol)
        const randomSymbol2 = symbol[Math.floor(Math.random() * symbol.length)]; // Dentro da função pq fora vai sempre gerar o mesmo aleatório

        if(pwDisplay.value != ''){  
            showPassword.classList.remove('hidden');
        }
    
        if (letterToNumberCheck.checked === true) {
            input = input.replace(/a/gi, 4).replace(/i/gi, 1).replace(/o/gi, 0);
        }
    
        password = randomSymbol1 + input + randomSymbol2 + Math.random().toString(32).slice(number);
    
        pwDisplay.innerText = password;
    }
}


convertBtn.addEventListener('click', generatePass)
copyBtn.addEventListener('click', copyPass)

function copyPass(){
    const textarea = document.createElement('textarea');
    const pass = pwDisplay.innerText;
    
    if(!pass){ return; }

    textarea.value = pass;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
}
