console.log("hello");

const someConst= "hello";

let someLet = "Hello";

var someVar = "hi"

const myString = 'I am stringy';

const myBoolean = true; 

const myInteger = 1;

const myFloat = 1.111; // has a decimal point

const myArray = [];

const myObj = {};
// the \ is known as an escape character

// 1. But what even is a function?
// an action
function myBangalangFunction () {
   return "I am a function BANGALANG"

}

// Function call
myBangalangFunction ()

// 2. What is a function parameter? What is the difference between a parameter and an argument?
// parameter is a placeholder. Argument is the thing we plug in
function addNumbers(number1, number2) {
const sum = number1 + number2
return sum
}
addNumbers(10, 40) // function with arguments
addNumbers(3, 5)
addNumbers(2000, -100)
const fivePlusHello = addNumbers(5, "hello")

//operator 
// typeof to figure out what it is (raising errors)

// 3. How are functions scoped? Can functions access other variables?
// Scope: determines where or how much of the code is affected / accesible 

function stinkyStinky() {
    const scopedVariable = "Howdy i have a scope"
    console.log(scopedVariable)
}

// setting variables outside of other things can be used within functions, but setting 
// variables within functions can only be accessed within that function
const globalVar = "i am worldly"

function saySomeGlobalStuff() {
    console.log(globalVar)
}


// Global scopoe
function outerFunction() { //First function scope
    const outerVar = "i am an outer variable"

    function innerFunction(){ //Second function scope 
        console.log(outerVar)
    } // Second function scope ends
    innerFunction()
} // First function scope ends

function makeAdditionFn (number) {
    return function additionFunction(number2) {
        return number + number2
    }
}
    
// 4. What is logic in JS? How can we build logical operators (conditionals) into a function?
function yesOrNo(trueOrFalse) {
    if (trueOrFalse === true) {
        return "itsuh true!!!"
    } else if (trueOrFalse === false){
        return "itsuh false!!!"
    }
    return "youre doing it wrong"
}
// cmd ? to comment out
// option up and down arrow to bring 

// 5. What is the difference between a function and an arrow function?
function normalFunction(){
    return "i am a normally declared function"
}

const arrowFn = (param1, param2, param3) => param1 + param2 + param3

// => creates an implicit return, meaning whatever is after the arrow is returned implicitly