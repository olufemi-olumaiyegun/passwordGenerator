
//global variables that will be useful in later functions
var characters = 'abcdefghijklmnopqrstuvwxyz';
var symbols = " !\"#$%&'()*+,-./:;<=>?@[]^_{|}`~!'";

//create a function that generates a single random lowercase character
function lowerCase () {
    var result = " "; //variable to store results in case we need to make a string
    return characters.charAt(Math.floor(Math.random()*characters.length))


}

function upperCase (){
    var result = " ";//variable to store results in case we need to make a string
    return characters.toUpperCase().charAt(Math.floor(Math.random()* characters.length))
}

function mySymbols(){
    var result = " ";//variable to store results in case we need to make a string
    return symbols.charAt(Math.floor(Math.random()*symbols.length))
}

function numbers(){
    result = " ";
    return Math.floor(Math.random()*10).toString()

}
