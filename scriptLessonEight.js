///Задание №1

const str = "JavaScript is fun!";
console.log(str.includes("fun"));

//Задание №2
let isFalsy;

if(!isFalsy) {
    console.log('Это все ложь!');
}

//Задание №3

const firstNAme = "John";
const lastName = "Doe";
const occupation = "software developer";
let gretting = `Hello, my name is ${firstNAme} ${lastName}. I am a ${occupation}."`

console.log(gretting);

//Задание №4
let city = null;
let age;

console.log(city == age); //true - эт исключение JS. но при сравнении "нет значения".
console.log(city === age); //false - сравнивается и тип и значение. False потому что разные типы.

//Задание №5

console.log(1 + '1'); //вывод: '11' - если одна из опернад срока, то при оперторе сложения они будут приравниваться к строке и будет происходить конкатенация строк.