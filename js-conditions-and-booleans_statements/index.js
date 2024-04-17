console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
if (receivedPassword===SUPER_SECRET_PASSWORD){
    console.log("Welcome! You are logged in as Brunhilde1984.");
}else {
    console.log ("Access denied!");
}
// Part 2: Even / Odd
const number = 6;
if (number%2===0){
console.log ("This is an even number!");
}else {
    console.log("This is an odd number!")
}
// Part 3: Hotdogs
const numberOfHotdogs = 42;
let totalPrice;
if (numberOfHotdogs<5) {
    totalPrice= numberOfHotdogs*2;  
}else if (numberOfHotdogs>=5 && numberOfHotdogs<100){
 totalPrice= numberOfHotdogs*1.50; 
}else if (numberOfHotdogs>=100 && numberOfHotdogs<1000000){
    totalPrice=numberOfHotdogs*1.00; 
}else{
  totalPrice=numberOfHotdogs*0,10; 
}
console.log ("The price to be paid is "+ totalPrice + "$");


// Part 4: Daytime
const currentHour = 12;

const statement = currentHour<17 ?"Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const greeting= "Hello " + (userName ==="Andrea" ? "coach" : userName) + "!";


console.log (greeting);


