// High order function(time leti process mate) and callback
// function add(a,b,cb){
//     let result = a+b;
//     cb(result);

// }

// function showResult(result){
//     console.log(result);
// }

// add(2,4, showResult);
// add(6,7, (val) => console.log(val));
// add(600,7, (res) => console.log(res));


function add(a,b,cb){
    let result = a+b;
    cb(result);

    return () => console.log(result);
}

let resFunction = add(2,4,()=>{});
resFunction();