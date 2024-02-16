function say(){
    console.log("Hello Prince");
}

say()
say()

//           argument
function add(a,b,c){
    // console.log(a+b+c);
    return a+b+c;
}

// add(4,2,6) // parameters
let x = add(2,3,6)
console.log(x);


function AddNum(){
    let ans = 0;
    for(let i =0; i< arguments.length; i = i + 1){
        ans = ans + arguments[i]
    }
    return ans
}

let res = AddNum(1,2,3,4,5,6,6)
console.log(res);


//spread op
function addNum(...num){
    let ans= 0;
    for(let i =0; i<num.length;i++){
        ans =ans + num[i];
    }
    return ans;
}

let result = addNum(1,2,3,4,5,6)
console.log(result);
