// // arrow functions

// // 1.syntax
// const sayHello = () =>{
//     console.log("Hello");
// };

// sayHello();

// const add = (a,b) =>{
//     return a+b;
// };
// // const add = (a,b) => a+b  one liner

// let ans = add(1,2)
// console.log(ans);


// // 2.arguments keyword

// // in arrow we can not use arguments
// // function AddNum = () => {
// //             console.log(arguments);
// // };

// // AddNum(1,2,3,4,5,6,6)

// //spread op
// function addNum(...num){
//     let ans= 0;
//     for(let i =0; i<num.length;i++){
//         ans =ans + num[i];
//     }
//     return ans;
// }

// let result = addNum(1,2,3,4,5,6)
// console.log(result);


// // 3.hoisting

// // it can
// // sayHy()

// // function sayHy(){
// //     console.log("Hello Dear");
// // }

// const sayHy = () =>{
//     console.log("Hello Dear");
// };
// sayHy();

// 4.This keyword

// this will give in normal function it give local value
// const obj = {
//     value: 9,
//     myFunction : function (){
//         console.log(this);
//     },
// };

// obj.myFunction();

//this will give in arrow function it give window value
const obj = {
    value: 9,
    myFunction : ()=>{
        console.log(this);
    },
};

obj.myFunction();

