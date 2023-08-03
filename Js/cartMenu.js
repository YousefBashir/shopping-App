// cheack if there is an items in local storage
let productsList=document.querySelector('.products-list div'); // carts product
let badge=document.querySelector('.badge');
let productsListMenu=document.querySelector('.products-list'); 
let cartProduct=document.querySelector('.cart-product'); // shopping cart icon
let addedItem=localStorage.getItem('productInCart')
? JSON.parse(localStorage.getItem('productInCart')):[];
if(addedItem){
    addedItem.map((item)=>{
        productsList.innerHTML+=`<p>${item.title}:${item.qunatity}</p>`;   
    });
    badge.style.display='block';
    badge.innerHTML=addedItem.length;
}
// open cart 
cartProduct.addEventListener('click',openCartMenu);
function openCartMenu(){
    if( productsList.innerHTML!=""){
        if(productsListMenu.style.display=='block'){
            productsListMenu.style.display='none';
        }
        else{
            productsListMenu.style.display='block'; 
        }
    }
}