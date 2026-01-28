//Задание №1
let a = 2;
let result = a * a + a;
console.log(result) //пример №1

let sinus = Math.sin(54);
let cosinus = Math.cos(16);
let resultTwo = Math.round((sinus * cosinus)**2);
console.log(resultTwo); //пример №2

let numberOne = (16*((13.2 * 71.90) ** 0.5))/ 2.4/(7**4);
let numberTwo = 3 ** (49 ** 0.5);
let resultThree = Math.round((numberOne + numberTwo)* (2**7));

console.log(resultThree); //пример №3

//Задание №2
let checkOne = 5;
let checkTwo = 10;

if(checkOne%2 === 0){
    console.log('четное')
} else {
    console.log("нечетное")
}

if(checkTwo%2 === 0){
   console.log('четное')
} else {
   console.log("нечетное")
}

// Задание №3

let nameUser = 'Akex';

if(!nameUser) {
    console.log('Hello, Guest!')
} else {
    console.log(`Hello, ${nameUser}`)
}




