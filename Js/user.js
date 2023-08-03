let userInfo=document.querySelector('#user-info');
let userDom=document.querySelector('#user');
let links= document.querySelector('#links');
let logout= document.querySelector('#logout')
if(localStorage.getItem('username')){
    links.remove();
    userInfo.style.display='flex';
    userDom.innerHTML=localStorage.getItem('username');
}
logout.addEventListener('click',function(e){
    e.preventDefault();
    setTimeout(()=>{
        window.location='register.html';
    },1500);
    localStorage.clear();
    
});