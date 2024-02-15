// Task 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

// Task 2

const a = [1, 5, 4, 10, 0, 3];

let index = a.indexOf(4);
console.log(index);

// Task 3

let d = [1, 5, 4, 10, 0, 3];

let f = d.join(' ');
console.log(f);

// Task 4

let products = new Array('1,1,1', '1,1,1', '1,1,1');
console.log(products)

// Task 5

let h = [1, 1, 1]

h.push(2, 2, 2);
console.log(h);

// Task 6

let l = [9, 8, 7, 'a', 6, 5]

let k = l.sort();
console.log(k);
console.log(k.pop());
console.log(k);

// Task 7


// let y = (prompt("Угадайте число"))
// let x = [9, 8, 7, 6, 5]

// function guessNumber(y) {
//     if (y = x.forEach(el)) {
//         alert("Угадал");
//     } else {
//         alert("Неугадал");
//     }
// }
// guessNumber(y);

// userAge(age)

// let y = prompt("Угадайте число");
// let x = [9,  8,  7,  6,  5];

// function guessNumber(y) {
//     let isGuessed = false;
//     x.forEach(el => {
//         if (y === String(el)) {
//             alert("Угадал");
//             isGuessed = true;
//         }
//     });
//     if (!isGuessed) {
//         console.log("Неугадал");
//     }
// }

// guessNumber(y);


// Task 8

let p = 'abcdef';
let c = p.split('').reverse().join('');
console.log(c);

// Task 9

// let io = [[1, 2, 3,],[4, 5, 6]];
// io = io.split('[]');
// console.log(io);

// Task 10

