//1 task
//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function getTheBiggestNumber(a, b){
//     let firstNumber = a;
//     let secondNumber = b;
//     if(a > b){
//         console.log(${firstNumber} is the biggest);
//     }else{
//         console.log(${secondNumber} is the biggest)
//     }
// }
// getTheBiggestNumber(11, 9)


// 2 task
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function getEvenNumbers(a, b){
//     let min = a;
//     let max = b;
//     if(a > b){
//         max = a;
//         min = b;
//     }  
//     const myArray = []
//     let evenNum
//     for(let i = max; i >= min; i--){
//         if(i % 2 === 0){
//             myArray.push(i);        
//      } 
// }
//     return myArray;   
// }
// const newArray = getEvenNumbers(5, 8)
// console.log(newArray)


//task 3
//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power(a, b = 2) {
//     return a ** b
// }
// console.log(power(2, 5))

//task 4
//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log( sumTo(100) );