// varaible
let profileName= document.querySelector('.user-name');
let profileEmail= document.querySelector('.user-email');
let profileImg=document.querySelector('.user-afatar');
let productsNum=document.querySelector('.products-num span');
let products= JSON.parse(localStorage.getItem('products'))|| productsDB;
let myProducts=products.filter(item=>item.isMyProduct==="yes");

// get data from
let userName= localStorage.getItem('username');
let userEmail= localStorage.getItem('email');
let userImg=localStorage.getItem('userimg');
profileName.innerHTML="Name: "+userName;
profileEmail.innerHTML="email: "+userEmail;
profileImg.src= userImg;
if(myProducts.length!=0){
    productsNum.innerHTML="Your Products: "+myProducts.length;
}
else{
    productsNum.remove()
}
