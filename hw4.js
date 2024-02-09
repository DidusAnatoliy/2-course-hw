// Task1
let a = 0;
while (a < 2) {
    console.log("Привет");
    a++;
}

// Task2
let i = 1;
while (i <= 5) {
 console.log(i);
 i++;
}

// Task3
let b = 7;
do {
 console.log(b);
 b++;
} while (b <= 22);

// Task4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
   };
   
   for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
       console.log(`${key} — зарплата ${obj[key]} долларов.`);
    }
   }

// Task5
let n = 1000;
let num = 0;

while (n >= 50) {
 n /= 2;
 num++;
}

console.log(n); 
console.log(num);

// Task6

let firstFriday = 5;
for (let i = firstFriday; i <= 31; i+=7) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    }
