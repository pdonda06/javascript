// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(add(2)(3)(5));

const add = (a) => (b) => (c) => a + b + c;
console.log(add(2)(3)(5));

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending Email to ${to} with subject ${subject} and body is : ${body}`);
//         }
//     }
// }

const sendAutoEmail = (to) => (subject) => (body) => `Sending Email to ${to} with subject ${subject} and body is : ${body}`

let step1 = sendAutoEmail("princedonda.dev@gmail.com");
let step2 = step1("New Order")

console.log(step2("Your order has been placed"));