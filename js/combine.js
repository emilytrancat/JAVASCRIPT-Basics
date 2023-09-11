const name = prompt("What is your name?");
// // // const message = "Hello " + name + ". Welcome to my music site. " + "I'm so happy that you came by to visit, " + name +
// // // ". Feel free to come again and listen to more music!";
let message = "Hello, " + name + ". Welcome to my music site. ";
message +=  "I'm so happy that you came by to visit, ";
// // or you can do: message = message + "I'm so happy that you came by to visit, " ;
message += name;
message += ". Feel free to come again and listen to more music!";

console.log(message);


let firstName = "Mimi";
let lastName = "Tran";
let role = 'developer';
let msg = firstName + " " + lastName + ":" + " " + role.toUpperCase();
console.log(msg);