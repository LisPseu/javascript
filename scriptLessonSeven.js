//Задание №1

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//Задание №2

let i = 1;
let sum = 0;
while(i <= 100) {
    
    sum += i;
    i++;
}
console.log(sum);

//Задание №3

let n = 100;

for(i = 2; i <= n; i++) {
    let isSimpleNumber = true;

    for(j = 2; j < i; j++) {

        if( i % j === 0){
            isSimpleNumber = false;
           break;
        }         
    }

    if(isSimpleNumber) {    
        console.log(`${i}` + '- ЭТО ПРОСТОЕ ЧИСЛО')
    }    
}
