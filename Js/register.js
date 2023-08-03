let userName= document.querySelector('#username');
let email= document.querySelector('#email');
let password= document.querySelector('#password');
let registerBtn=document.querySelector('#registerbtn');
registerBtn.addEventListener('click',register);
// let userImg=document.querySelector('#user-image')
function register(e){
    e.preventDefault();
    if(userName.value===""|| email.value===""|| password.value===""){
        alert("please fill your data");
    }
    else{
        localStorage.setItem('username',userName.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        // localStorage.setItem('userimage',userImg);
        setTimeout(()=>{
            window.location='login.html';
        },1500)
    }
}
