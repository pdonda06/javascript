const button = document.getElementById('clickButton');
const uname = document.getElementById('input-username');
const username = document.getElementById('username');

button.addEventListener("click",()=>{
    const value = uname.value;
    localStorage.setItem("name",value)
    location.reload();
});

window.addEventListener('load', ()=>{
    const value = localStorage.getItem("name");
    username.innerText = value;
})