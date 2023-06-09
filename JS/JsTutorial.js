
// let x = "hellopp";
// let y = "hellopp";

// document.write(x===y)

// for (i = 0; i >= 10; i++) {
//     document.write("JS ")
// }

// function numTable (num){
//     for(i = 1; i<=10; i++){
//         document.write(`${num} x ${i} = ${num*i} <br>`)
//     }
// };

// numTable(5);  document.write("<br>")
// numTable(3)

// function addTwoNum (a, b) {
//     document.write (`${a} + ${b} = ${a + b}`);
// };

// addTwoNum(4, 5)

// function arg() {
//     console.log(arguments.length)
// };

// arg(2,7)

// let person = {
//     name: "Arvind",
//     age:  24,
//     profile: "React Developer",
//     sayHello () {
//         console.log("Hello I am " +this.name+ " and I heve a "+ car.brand + " car")
//     }
// }
// console.log(person.name, person.age, person.profile)
// console.log ( person['profile'])

// console.log('age' in person)

// for (let key in person){ 
//     console.log(key + ": " + person[key])
// }

// let car = {
//     brand: "Tata",
//     model: "Hariar"
// }

// person.sayHello()

// let val = prompt("Enter a value");
// console.log(val)

// function Student(first, last, age, cls){
//     this.firstName = first,
//     this.lastName = last,
//     this.age = age,
//     this.class = cls
// }

// let student1 = new Student("Ravi", "Dosad", 25, 12)
// console.log(student1 )

// let timeout = setTimeout(myfunction, 2000);

// function myfunction () {
//     confirm("Hello world")
//     document.write("Hello this is conform function")
// }
// clearTimeout(timeout)

// console.log(screen.colorDepth);
// console.log(screen.width);
// console.log(screen.height);
// console.log(navigator)


// function addAllNumbers (...arg) {
//     let sum = 0;
//     for(i = 0; i < arg.length; i++){
//         sum += arg[i]
//     }
//     return sum;
// }
// console.log(addAllNumbers(2,3,4,6,8 ))

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [ ...arr1,8,9,...arr2]

// console.log(arr3);

// const a1 = [1,2,3];
// a1.forEach((e)=> console.log(e))

// let x = "Hello World";
// for (let y of x){
//     console.log(y);
// }

// let person1 = {
//     firstName: "Arvind",
//     lastName: 'Bhakuni',
//     age: 24,

//     fullname: function (){
//         console.log(this.firstName + this.lastName)
//     }
// };
// person1.fullname();

// let person = new Object()
// person.name = "arvind bhakuni";
// person.sayHi = function () {
//     alert("Hi")
// }
// console.log(person)
// person.sayHi();

// function Person (first, last, a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;
// };

// Person.prototype.sayHi = function (hy, hi) {
//     alert(hy+" "+ hi)
// }

// let person1 = new Person ("Arvind", "Bhakuni", 25,);
// let person2 = new Person ("Laxita", "Mehera", 3);

// console.log(person1)
// console.log(person2)

// person2.sayHi(person2.firstName, person2.lastName)


// class person{
//     constructor(name, a){
//         this.name = name;
//         this.age = a;
//         console.log("Constructor Called....")
//     }
//     sayHi() {
//         console.log("Hi.....");
//     };
//     static hello() {
//         console.log("Hello....")
//     }
// };

// let person1 = new person("Arvind", 25);
// let person2 = new person();

// console.log(person1)
// person1.sayHi();
// person.hello()   // Calling a static method of a class

// class emp {
//     constructor (n) {
//         this.name = n;
//     }
//     msg() {
//         console.log("Hello...")
//     }
// };

// class manager extends emp {
//     constructor (n, a) {
//         super(n);
//         this.age = a;
//     }
// }

// let worker = new manager ("Harry", 25);
// console.log(worker)

// function sum (a, b) {
//     return a + b;
// }

// let z = sum(4, 5);
// console.log(z)

// let sum = (a, b) => a + b;

// let z = sum(4,5);
// console.log(z)

// function hi() {
//     console.log("Hi.....");
// }

// function hello () {
//     console.log("This is Callback Hello...");
// };

// function add (a, b, callback) {
//     console.log(a + b);
//     callback();
// };

// add(5, 2, hello);
// add(10 , 5, hi);
// add(8, 9, function(){
//     console.log("Anonomus CallBack function")
// })

let arr = [2, 3, 4, 5, 6];

let arr1 = [];
for (i=0; i<arr.length; i++){
    arr1[i] = arr[i] * 2; 
}

let arr2 = arr.map(function(value){
    return value * 3;
})

let arr3 = arr.map((v) => v * 5);

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);

let fil = [2,4,54,12,55,9,60,88,6];

let fil1 = fil.filter(val => val > 10);
console.log(fil);
console.log(fil1);