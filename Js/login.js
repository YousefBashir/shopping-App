let userName= document.querySelector('#username');
let password= document.querySelector('#password');
let loginBtn=document.querySelector('#loginbtn');
loginBtn.addEventListener('click',login);
function login(e){
    e.preventDefault();
    if(userName.value===""|| password.value===""){
        alert("please fill your data");
    }
    else{
        if(localStorage.getItem('username')===userName.value.trim()&& localStorage.getItem('password')===password.value.trim()){
            setTimeout(()=>{
                window.location='index.html';
            },1500);
        }
        
        else{
            console.log('user name or password is wrong')
        }
    }
}
