let username=document.getElementById('userName');
let email=document.getElementById('email');
let password=document.getElementById('password');
let confirmPassword=document.getElementById('confirm-password');

let SingUpBtn=document.getElementById('submit-btn');

SingUpBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(username.value === "" || email.value === "" || password.value===""||confirmPassword.value===""){
        alert("Please Enter Your Data");     
    }else if (password.value !== confirmPassword.value) {
        alert("The password Don't match !!!")
    }else{
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);  
        localStorage.setItem('confirmPassword',confirmPassword.value);   
        setTimeout(() => {
            window.location='shop.html'; 
        }, 2000);    
    }     
})









 