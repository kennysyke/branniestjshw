
2. Assignment(Mathematical Shapes):
a.Write a JavaScript program to find the diagonal of a square where the length of each
side is 9.

let a = 9;
let d = a * Math.sqrt(2);
console.log(d);

b.Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.

let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(area);

c.Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.

let r = 4;

let c = 2 * Math.PI * r;
console.log(c);
let a = Math.PI * Math.pow(r, 2);
console.log(a);

3. Assignment(Conditional Statements & Loops):
a) Write a JavaScript program that accepts two integers and displays the larger of the two.

let a = Number(prompt(`Enter number 1`));
let b = Number(prompt(`Enter number 2`));

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log(`numbers are equal`);
}
b) Write a JavaScript program that checks whether an integer is an even or an odd number.

let num = Number(prompt(`Enter a number`));

if (num % 2 === 0) {
    console.log(`number is even`);
} else {
    console.log(`number is odd`);
}
