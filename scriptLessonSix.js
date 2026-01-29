//Задание №1
let number = 15;

if(number > 0) {
    console.log('Число положиетльное');
} else if(number < 0) {
    console.log('Число отрицательное');
} else {
    console.log('Это НОЛЬ!');
}

//Задание №2

let weight = prompt('Введи свой вес в кг');
let height = prompt('Введи свой рост в см');
let imt = weight/((height/100)**2);

if(Number(imt) < 18.5) {
    console.log('Недостаточная масса тела');
} else if(Number(imt) <=24.9) {
    console.log('Нормальная масса тела');
} else if(Number(imt) <= 29.9) {
    console.log('Избыточная масса тела');
} else {
    console.log('Ожирение');
}

//Задание №3

const month = 25;
let nameMonth;

switch (month) {
    case 1:
        nameMonth = 'Январь';
        break;
    case 2:
        nameMonth = 'Февраль';
        break;
    case 3:
        nameMonth ='Март';
        break;
    case 4:
        nameMonth = 'Апрель';
        break;
    case 5:
        nameMonth = 'Май';
        break;
    case 6:
        nameMonth = 'Июнь';
        break;
    case 7:
        nameMonth = 'Июль';
        break;
    case 8:
        nameMonth = 'Август';
        break;
    case 9:
        nameMonth ='Сентярь';
        break;
    case 10:
        nameMonth = 'Октярбрь';
        break;
    case 11:
        nameMonth = 'Ноябрь';
        break;
    case 12:
        nameMonth ='Декабрь';
        break;
    default:
        nameMonth = 'Неверный месяц';

}

console.log(nameMonth);

// Задание №4

let browser = prompt('Введи браузер, который ты используешь');

switch (browser) {
    case 'Chrome':
    case 'Safari':
    case 'Firefox':
    case 'Opera':
    case 'Yandex':
        alert('Отлично! Мы поддерживаем этот браузер!');
        break;
    default:
        alert('Воспользуйтесь другим браузером!');
}

console.log(browser);