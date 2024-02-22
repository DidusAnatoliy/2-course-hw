// game 1 button
const game1 = document.getElementById("game1")
game1.addEventListener("click", () => {
    const userNumMounth = Number(prompt("Введите номер месяца"))
    if (isNaN(userNumMounth)) {
        alert("Запрос некорректный");
    } else if (userNumMounth <= 0 || userNumMounth >= 13) {
        alert("Неверный  номер месяца. Введите число от  1 до  12.")
    } else if (userNumMounth === 12 || userNumMounth === 1 || userNumMounth === 2) {
        alert("Зима")
    } else if (userNumMounth >= 3 && userNumMounth <= 5) {
        alert("Весна")
    } else if (userNumMounth >= 6 && userNumMounth <= 8) {
        alert("Лето")
    } else if (userNumMounth >= 9 && userNumMounth <= 11) {
        alert("Осень")
    }
})

// Task 11

const gamefruit = document.getElementById("fruit")
gamefruit.addEventListener("click", () => {
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits.sort(() => Math.random() -  0.5);
alert(fruits.join(', '));
let firstGuess = prompt("Чему равнялся первый элемент массива?");
let lastGuess = prompt("Чему равнялся последний элемент массива?");
let correctFirst = fruits[0] === firstGuess;
let correctLast = fruits[fruits.length -  1] === lastGuess;

if (correctFirst && correctLast) {
    alert("Поздравляем! Вы угадали оба элемента.");
} else if (correctFirst || correctLast) {
    alert("Вы были близки к победе!");
} else {
    alert("Вы ответили неверно.");
}
})

// Task 1

let str = 'js';
console.log(str.toUpperCase())

// Task 2

const products = ['Кола', 'Квас Никола', 'Добрый Кола', 'Фанта', 'Спрайт'];
const search = 'кол';

products.forEach((product) => {
    if (product.toLowerCase().includes(search.toLowerCase())) {
        console.log(product);
    }
})

// Task 3

// До меньшего целого
Math.floor(32.58884)
// До большего целого
Math.ceil(32.58884)
// До ближайшего целого
Math.round(32.58884)

// Task 4

const numbers = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log("Наименьшее число:", minValue);
console.log("Наибольшее число:", maxValue);

// Task 5

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(1, 10));

// Task 6

function generateRandomArray(n) {
    const halfN = Math.floor(n / 2);
    const randomArray = Array.from({ length: halfN }, () => Math.floor(Math.random() * n));

    return randomArray;
}

const n = 10;
const randomArray = generateRandomArray(n);
console.log(randomArray);

// Task 7

function a(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
}

const randomNumber = a(45,  100)
console.log(randomNumber)

// Task 8

let myDate = new Date(2024, 2, 22, 19, 32, 20, 10);
console.log(myDate); 

// Task 9

const currentDate = new Date();
const currentDay = currentDate.getDate();
currentDate.setDate(currentDay +  73);
console.log(currentDate);

// Task 10

function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return date.toLocaleDateString('ru-RU', options);
}

const date = new Date();
console.log(formatDate(date));




