const alpha = ["a","b","c","d"];
const number = [1,2,3,4,5,6,7];

// function print(n){
//     console.log(n);
// }

// alpha.forEach(print) ==> kuch return nahi karta

// alpha.forEach((val) => console.log(val))

// alpha.map((val) => console.log(val)); // ==> return karta hai

// let ans = number.find(num => num==5);
// console.log(ans);
// console.log(number[ans]);

// const newArr = number.filter((num) => num%2==0)
// console.log(newArr);

// let newArr = number.slice(1,5) //2,3,4,5
// let newArr1 = number.slice(1) //2,3,4,5
// console.log(newArr);
// console.log(newArr1);

let newArr = number.splice(1,4) //remove 2,3,4,5
console.log(newArr);
console.log(number);