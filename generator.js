

//global variables that will be useful in later functions



const bufferLength = document.getElementById('Length');
const specialCharacter = document.getElementById('specialChar');
const numbers1 = document.getElementById('numbers');
const upperCaseChecked = document.getElementById('upper');
const result = document.getElementById('bufferBox');
const lower_case = document.getElementById('lower');
const Generate = document.getElementById('')
var characters = 'abcdefghijklmnopqrstuvwxyz';
var symbols = " !\"#$%&'()*+,-./:;<=>?@[]^_{|}`~!'";

const randomPasswordGenerator = {
    lower: lowerCase,
    upper: upperCase,
    symbol: mySymbols,
    number: numbers0,

}

clipboard.addEventListener('click', () => {

    const textArea = document.createElement('textarea'); //create a temporary text area html tag to save value of generated password
    const passwordGenerated = result.innerText;
    if(!passwordGenerated){return;}

    textArea.value = passwordGenerated; //make text area value equal to password generated
    document.body.appendChild(textArea);
    textArea.select()
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied!')
});


generate.addEventListener('click', () => {
    const length = +bufferLength.value;
    const hasUpper = upperCaseChecked.checked;
    const hasNumber = numbers1.checked;
    const hasSymbols = specialCharacter.checked;
    const hasLower=lower_case.checked;

    result.innerText=generateComplexpassword(length, hasUpper, hasNumber, hasSymbols, hasLower);

});

clear.addEventListener('click', () => {
    result.innerText=" ";
});




//create a function that generates a single random lowercase character
function lowerCase () {
    var result = " "; //variable to store results in case we need to make a string
    return characters.charAt(Math.floor(Math.random()*characters.length));


}

function upperCase (){
    var result = " ";//variable to store results in case we need to make a string
    return characters.toUpperCase().charAt(Math.floor(Math.random()* characters.length));
}

function mySymbols(){
    var result = " ";//variable to store results in case we need to make a string
    return symbols.charAt(Math.floor(Math.random()*symbols.length));
}

function numbers0(){
    return Math.floor(Math.random()*10).toString();

}
function generateComplexpassword (length,upper, number, symbol, lower){
    let password = '';
    const selectedCount = lower+upper+number+symbol;
    const selectedTypes = [{upper}, {number}, {symbol}, {lower}].filter(item=>Object.values(item)[0]);
    if (selectedCount<=1){
        return alert("please select at least two parameters!");
    } 

    for (let i=0;i<length;i+=selectedCount){
        selectedTypes.forEach(type=>{
            const functionName = Object.keys(type)[0];
            password+=randomPasswordGenerator[functionName]();
        });
    }
    const finalPassword = password.slice(0,length);
    return finalPassword;
}