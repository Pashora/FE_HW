const num = +prompt("Write a number")
console.log(num / 100 * 10)

//===================================//
const firstNum = +prompt("Write a first number")
const secondNum = +prompt("Write a second number")

if (firstNum < secondNum) { 
    console.log("first number is smaller")
} else {
    console.log("second number is smaller")
}
//=========================//
const number = +prompt("Write a number")
if (num > 100) {
    console.log('the number is bigger than 100');
} else if (num < 100) {
    console.log ('the number is smaller than 100');
} else {
    console.log ('numbers are equal')
}

//===========================//
const personName = +prompt("Write please your name")
const personAge = +prompt("Write your age please")
if (personAge <= 18) {
    console.log(`hi ${personName}`)
} else if (personAge > 18) {
    console.log(`hello ${personName}`)
}
