// Task 8
const game1 = document.getElementById("game1")
game1.addEventListener("click", () => {
    const userNumMounth = Number(prompt("Введите номер месяца"))
    if (isNaN(userNumMounth)) {
        console.log("Запрос некорректный");
    } else if (userNumMounth <= 0 || userNumMounth >= 13) {
        console.log("Неверный  номер месяца. Введите число от  1 до  12.")
    } else if (userNumMounth === 12 || userNumMounth === 1 || userNumMounth === 2) {
        console.log("Зима")
    } else if (userNumMounth >=  3 && userNumMounth <=  5) {
        console.log("Весна")
    } else if (userNumMounth >=  6 && userNumMounth <=  8) {
        console.log("Лето")
    } else if (userNumMounth >= 9 && userNumMounth <= 11) {
        console.log("Осень")
    }
})

// Task 1

function minOfTwoNumbers(d, b) {
    return d < b ? d : b;
}
console.log(minOfTwoNumbers(8, 4));
console.log(minOfTwoNumbers(6, 6));

// Task 2

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));

// Task 3

// 3.1

function square(c) {
    c = c ** 2
    console.log(c)
}
let c = (prompt("Введите число"))

square(c)

// 3.2

function square(a) {
    a = a ** 2
    return a
}
let a = (prompt("Введите число"))
console.log(square(a))


// Task 4

function userAge(age) {
    if (age < 0) {
        console.log("Вы ввели неправильное значение.");
    } else if (age >= 0 && age <= 12) {
        console.log("Привет, друг!");
    } else  {
        console.log("Добро пожаловать!");
    }  
}

let age = (prompt("Сколько вам лет?"))

userAge(age)

// Task 5

function product(r, b) {
    if (isNaN(r) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом")
    } else {
        const result = r * b
        console.log(result)
    }
}

let r = (prompt("Введите первое число"))
let b = (prompt("Введите второе число"))

product(r, b)

// Task 6

function cube(userNum) {
    if (isNaN(userNum)) {
        console.log("Переданный параметр не является числом");
    } else {
        let cubeNum = userNum ** 3;
        console.log(`${userNum} в кубе равняется ${cubeNum}`);
    }
}

let userNum = Number(prompt("Введите число"));

cube(userNum);

// Task 7

function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    this.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}


let circle1 = new Circle(5);
let circle2 = new Circle(10);


console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
