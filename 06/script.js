//for loop
for (let i = 1; i <= 10; i = i + 1) {
  console.log("Good"+i);
}

//while loop
let j =1
while (j <= 10) {
    console.log("Bad"+j);
    j=j+1
  }

//do-while loop
let k = 1
do{
    console.log("gb"+k);
    k=k+1
}while(k<=10)


let num = 5
let guess = 0
do{
  guess = parseInt(prompt("Guess a Number"))
  if(guess == num){
    alert("Winner")
    break;
  }
}while(guess != 0)