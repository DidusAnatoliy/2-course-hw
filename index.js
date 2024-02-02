//* Task 1 В первом задании переменную "a"изменил на "с" что бы переменная "a", которая и в 6ом задание есть не выдавала ошибку.
let с = 10;
alert(с)
let c = 20;
alert(c);

//* Task 2
const iPhoneOne = 2007;
alert(iPhoneOne)

//* Task 3
const nameCreatorJavaScript = "Брендан Эйк"
alert(nameCreatorJavaScript)

//* Task 4
const numbOne = 10;
const numbTwo = 2;

alert(numbOne + numbTwo);
alert(numbOne - numbTwo);
alert(numbOne * numbTwo);
alert(numbOne / numbTwo);

//* Task 5
let result = (numbTwo**5);
alert(result);

//* Task 6
const a = 9;
const b = 2;

let x = a % b;
alert(x);

//* Task 7
let num = 1;
num += 5
num -= 3
num *= 7
num /= 3
++num
--num
console.log(num);

//* Task 8
const age = prompt("Сколько вам лет?");
console.log(age);


//* Task 9
let user = {
    name: "Anatoliy",
    age: 33,
    isAdmin: true,
}

//* Task 9.1
user["city of residence"] = "Saint-Petersburg"

//* Task 9.2
user.age = 66;

//* Task 9.3
delete user["city of residence"]

//* Task 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);

//* Task 10
let nameUser = prompt("Введите ваше имя");
console.log(`Привет, ${nameUser}!`);