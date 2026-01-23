let number = 123;
console.log(typeof number); //number

let someName = 'Alex';
let someUser = "Masha";
console.log(typeof someName, typeof someUser); //string

let settings = {};
console.log(typeof settings); // object

let items = [1, 2, 3];
console.log(typeof items);    // object

let active = true;
console.log(typeof active);   // boolean

let statusUser;
console.log(typeof statusUser);   // undefined

let something = null;
console.log(typeof something); // object - это признанный "баг" в JS, null не является обьектом. Это специальное значение с отдельнвм типом.

const person = {
    name: 'Bob',
    age: 30,
    isHomeless: false
}
console.log(person.name) //обьект с данными 

const countries = ['Belarus','Russia','France','USA'];
console.log(countries[2]); //массив - особый тип обьекта, для работы с упорядочным набором элементов. Имеет индексы, начало с нуля.

const originalArray = ['Ваня','Петя','Маша'];
const dubleArray = originalArray;
console.log(dubleArray); 

/* ссылочный тип данных - это более сложный тип данных , который имеет данные с ссылки. При присваивании значения другому ссылочному типу данных
,например массив, ему будет присваиваться значение с данными из этой ссылки. Нужно быть внимательным при изменении данных в ссылке,
 так могут возникнуть ошибки и разногласия в коде
*/
