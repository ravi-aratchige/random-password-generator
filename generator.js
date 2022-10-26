//setting functions

function randomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+96);
}
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function randomSymbol() {
	const symbols= '!#@$%&*';
    return symbols[Math.floor(Math.random()*symbols.length)];
}
const randomFunc = {
	lower:randomLower,
	upper:randomUpper,
	number:randomNumber,
	symbol:randomSymbol
};

const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const charEl = document.getElementById('length');
const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const buttonEl = document.getElementById('generate');

buttonEl.addEventListener('click',() => {
    const length = +charEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasSymbol = symbolEl.checked;
    const hasNumber = numberEl.checked;
 
resultEl.innerText = generatePassword(hasUpper, hasLower, hasSymbol, hasNumber,length);
});
clipboardEl.addEventListener('click',() =>{
    const textarea = document.CreateElement('textarea');
    const password = resultEl.innerText;
    if (!password) {
    	return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Copied to clipboard!');
})
function generatePassword(upper,lower,number,symbol,length) {
    let generatedPassword = '';
    const typesCount = upper + lower+ number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol} ].filter
    (
    	item => Object.values(item)[0]
    ); 
    if (typesCount === 0) {
    	return '';
    }
    for (let i = 0; i<length ; i+=typesCount) {
    	typesArr.forEach(type => {
    		const funcName = Object.keys(type)[0];

    		generatedPassword += randomFunc[funcName]();
    	});
    	}
    	const finalPassword = (generatedPassword.slice(0,length));
    	return finalPassword;
    }
   
// RAVINDU'S CODE STARTS HERE

function clipboard() {
    // var copyText = document.getElementById("result");
    var copyText = password;
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }