//Task 1 

let password = "пароль";
let question = prompt("Введите пароль").toLowerCase();
if (password.toLowerCase() === question) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно")
}

//Task 2

let c = 5;
if (c >= 0 && c <= 10) {
    alert("Верно");
}
else {
    alert("Неверно")
}

//Task 3

let d = 50;
let e = 70;
if (d > 100 || e > 100) {
    console.log("Верно");
}
else {
    console.log("Неверно")
}

//Task 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));


//Task 5

let monthNumber = Number(prompt("Введите цифру месяца"));

if(monthNumber > 12){
    console.log('Номер месяца не может быть больше 12');
} else {
    switch(monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Некорректный ввод');
    }
}
