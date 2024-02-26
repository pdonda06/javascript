const button = document.getElementById("stop-btn");

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById("time").innerText= time;
}

// showTime();

// setTimeout(()=> console.log("hi"), 5000)
let interval = setInterval(showTime, 1000)

button.addEventListener("click", () => {
    clearInterval(interval)
})