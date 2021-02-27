console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE

let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log("What is the value of: a =" + " " + a);
console.log("What is the value of: b =" + " " + b);
console.log("What is the value of: a + b =" + " " + add);
console.log("What is the value of: a - b =" + " " + minus);
console.log("What is the value of: a * b =" + " " + multiply);
console.log("What is the value of: a / b =" + " " + dividing);


// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE

let c = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log("What is the value of: c + str =" + " ", c + str);
console.log("What is the value of: c + str2 =?" + " ", c + str2);
console.log("What is the value of: c + isPrsent =?" + " ", c + isPresent);
console.log("What is the value of: c + firstName =?" + " ", c + firstName);
console.log("What is the value of: c + lastName =?" + " ", c + lastName);


// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log("What is the value of: d == str3?", d == str3);
console.log("What is the value of: d == str4?", d == str4); //ADD TO NOTES: why is str4 false? can it not read it? yes cannot read it
console.log("What is the value of: d === str4?", d === str4);
console.log("What is the value of: !isPresent2?", !isPresent2); //ADD TO NOTES: why is this noted as opposite and not the literal meaning not equal? operator is read as opposite and != not equal to
console.log("What is the value of: (“eleven” == str3 && d >= str4)?", "eleven" == str3 && d >= str4); //eleven not right here
console.log("What is the value of: (!isPresent2 || isPresent2)?", (!isPresent2 || isPresent2)); //ADD TO NOTES: what's happening here? single condition is it either true then answer is true
console.log("What is the value of: 0 == false?", 0 == false);
console.log("What is the value of: 0 === false?", 0 === false); // not same type
console.log("What is the value of: 0 != false?", 0 != false); // 0 is not equal to false, but it is so it is false
console.log("What is the value of 0 !== false?", 0 !== false); // 0 is not equal to false, but it is so that would false, but b/c the type is not, then it is true
//ADD TO NOTES: is there a strict >= symbol?, not strict. Seems there is no strict value