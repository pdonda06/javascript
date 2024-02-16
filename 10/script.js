//Array
const alpha = ["a","b","c","d"];
console.log(alpha);
console.log(alpha.length);

alpha[1] = "o";
console.log(alpha);

alpha.push("p");
alpha.push("q");
console.log(alpha);

console.log(alpha.indexOf("d")); // 3
console.log(alpha.indexOf("v")); // -1

//in js array is non-homogeneous (hetrogeneous)
const myArray = [1,2,true,"t","😊"];
console.log(myArray);
myArray.push({name: "no"})
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.reverse();
console.log(myArray);


