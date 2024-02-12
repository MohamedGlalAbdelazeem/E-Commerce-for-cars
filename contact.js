let user =document.getElementById("input");
let mail =document.getElementById('mail');
let textarea =document.getElementById('textarea');
let btn =document.getElementById('btn');


let getUser = localStorage.getItem("username");
let getmail = localStorage.getItem("email");

let userInfo=document.querySelector('#userInfo');
let userDom = document.querySelector('#user');
let logout = document.querySelector("#logout");

if (localStorage.getItem("username")) {
    userInfo.style.display="block";
    userDom.innerHTML =localStorage.getItem("username")   
}
window.onload=function(){
    user.value=getUser;
    mail.value=getmail;
  }

btn.addEventListener('click',function (event){
    event.preventDefault();
    localStorage.setItem('user',user.value);
    localStorage.setItem('mail',mail.value);
    localStorage.setItem('textarea',textarea.value); 
    alert(`Thanks for contacting us💚💚💚 \n  ${user.value} `) 
})
 