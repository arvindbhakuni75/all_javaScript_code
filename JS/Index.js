
// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("previous");

// console.log(countEl)

// let count = 0;
// function increment() {
//     count = count + 1;
//     countEl.textContent = count
// }

// function save () {
//     let countStr = count + " - ";
//     saveEl.textContent += countStr
//     count = 0;
//     countEl.textContent = count
// }

// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
// }

// function remove1Points() {
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Points()
// remove1Points()
// console.log ( myPoints);

// let err = document.getElementById("error");
// function showError() {
//     err.textContent = "Something went wrong, plese try again"
// }

// let num1 = 8;
// let num2 = 2;

// document.getElementById("num1").textContent = num1;
// document.getElementById("num2").textContent = num2;
// let total = document.getElementById("sum");
// let sum = 0

// function addNum() {
//     sum = num1 + num2;
//     console.log(sum)
//     total.textContent = "Sum: " + sum
// }
// function subtractNum() {
//     sum = num1 - num2;
//     total.textContent = "Subtact: " + sum
// }
// function devideNum() {
//     sum = num1 / num2;
//     total.textContent = "Devide: " + sum
// }
// function multiplyNum() {
//     sum = num1 * num2;
//     total.textContent = "Multiply: " + sum
// }


let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let ot = document.getElementById("message-el");
let sumel = document.getElementById("sum");
let cards = document.getElementById("cards");

function startGame() {
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohooo! you have got a BlackJack!"
        hasBlackJack = true
    } else {
        message = "You'r out of the game!"
        isAlive = false
    } 
    ot.textContent = message  
    cards.textContent = "Cards: " + firstCard +" " + secondCard
    sumel.textContent = "Sum: " + sum  
}





let books = ["Math", "Physics", "Bio", "Computer Science"];
let str = "Arvind";

console.log(books.join(" "))

books.push("English");
books.unshift("Hindi")
books.pop();
books.shift();
books.splice(2, 1)
let position = books.indexOf("Physics")
console.log(books);
console.log(position);
console.log(Array.isArray(books));
console.log(Array.isArray(str))

let text = "This is a rendom text";

let wordArray = text.split(" ")
console.log(text)
console.log(wordArray)
wordArray.pop()
console.log(wordArray)
wordArray.shift()
console.log(wordArray)  
wordArray.unshift("World")
console.log(wordArray)
wordArray.push("Place")
console.log(wordArray)
wordArray.splice(2, 5)
console.log(wordArray) 
console.log(Array.isArray(text))
console.log(wordArray.indexOf("World")) 

let Newbook = books.concat(wordArray)
console.log(Newbook)



