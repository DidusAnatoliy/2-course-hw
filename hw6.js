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

let j = [9,  8,  7,  6,  5];
let userGuess = prompt("Угадайте число из списка:");

if (j.includes(Number(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Task 8

let p = 'abcdef';
let c = p.split('').reverse().join('');
console.log(c);

// Task 9

let array = [[1,  2,  3], [4,  5,  6]];
let flattened = array.flat();
console.log(flattened);

// Task 10

let numbers = [3,  7,  1,  9,  5,  4,  2,  8,  6,  10];

for (let i =  0; i < numbers.length -  1; i++) {
  console.log(numbers[i] + numbers[i +  1]);
}

// Task 11

function squares(array) {
    const squaredArray = array.map(num => num * num);
    return squaredArray;
}

// Task 12

function getLengthWords(words) {
  return words.map(word => word.length);
}

const lengths = getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(lengths);

// Task 13

function filterPositive(array) {
  return array.filter(value => value <  0);
}

console.log(filterPositive([-1,  0,  5, -10,  56]))
console.log(filterPositive([-25,  25,  0, -1000, -2]));