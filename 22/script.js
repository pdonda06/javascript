// function main(){
//     const name = "Prince Donda"

//     function SayMyName(){
//         console.log(name);
//     }

//     return SayMyName();
// }

// let fn = main();
// fn();
// fn();


// function main(name){

//     function SayMyName(){
//         console.log(name);
//     }

//     return SayMyName();
// }

// let fn = main("PD");
// fn();
// fn();

// function adder(num){
//     function add(b){
//         console.log(num + b);
//     }
//     return add;
// }

// let Addto5 = adder(5);
// let Addto10 = adder(10);

// Addto5(2);
// Addto5(10);

// Addto10(2);


const myName = document.getElementById("my-name");
const btnn = document.getElementById("btn");

// function makeTextSizer(size) {
//     function changeSize(){
//         myName.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }

// const size12 = makeTextSizer(12);
// const size22 = makeTextSizer(22);
// const size62 = makeTextSizer(62);
// const size1 = makeTextSizer(1);

// btnn.addEventListener("click",size62);

function makeCounter(cnt=1){
    // let cnt = 1;
    function increment(){
        console.log(cnt++);
    }
    return increment;
}

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();