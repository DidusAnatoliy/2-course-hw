//Task 1 немного сделал подругому, но финал получился тот же

let password = prompt("Введите пароль");
if (password === "пароль") {
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
alert( Number(a) + Number(b));


//Task 5

let monthNumber = Number(prompt("Введите цифру месяца"));

switch (monthNumber) {
    case 1:
        console.log("Январь Второй месяц зимы");

        break;
    case 2:
        console.log("Февраль Третий месяц зимы");

        break;
    case 3:
        console.log("Март Первый месяц весны");

        break;
    case 4:
        console.log("Апрель Второй месяц весны");

        break;
    case 5:
        console.log("Май Третий месяц весны");

        break;
    case 6:
        console.log("Июнь Первый месяц лета");

        break;
    case 7:
        console.log("Июль Второй месяц лета");

        break;
    case 8:
        console.log("Август Третий месяц лета");

        break;
    case 9:
        console.log("Сентябрь Первый месяц осени");

        break;
    case 10:
        console.log("Октябрь Второй месяц осени");

        break;
    case 11:
        console.log("Ноябрь Третий месяц осени");

        break;
    case 12:
        console.log("Декабрь Первый месяц зимы");

        break;
    default:
        console.log('Такого месяца не существует!');
        break;
}

