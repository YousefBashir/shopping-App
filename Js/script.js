
// product
let productsDom =document.querySelector('.products');
// let productsListMenu=document.querySelector('.products-list'); 
// let productsList=document.querySelector('.products-list div'); // carts product
// let badge=document.querySelector('.badge');
let products=productsDB;
// add prodcut to the page
let drawUi;
(drawUi= function(products=[]){
    let productUi=products.map((item)=>{
     return `
        <div class="product-item" style="border:${item.isMyProduct==='yes'?'2px solid green':''}">
            <img class="product-item-image" src="${item.imageUrl}" alt="image">
            <div class="product-item-desc">
            <a onclick="svaeItemData(${item.id})" class="product-item-title">${item.title}</a>
            <p>${item.description}</p>
            <span>Size: ${item.size}</span>
            ${
             item.isMyProduct==='yes'?
             "<button class='edit-product-btn' onclick='editProduct("+item.id+")'>Edit Product</button>":""
            }
            </div>
            <div class="product-item-actions">
            <button class="add-to-cart" onclick="addedProduct(${item.id})">Add To Cart</button>
            <i class="fa-solid fa-heart" style="color:${
                item.liked==true?"red":""}
                " onclick="addToFav(${item.id})"></i>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML=productUi.join('');
})(JSON.parse(localStorage.getItem("products")) || products);

// add product to cart /////////////////////////////////////////////////////////////
function addedProduct(id){
    if(localStorage.getItem('username')){
    let products=JSON.parse(localStorage.getItem('products'))||productsDB;
    let prodcut= products.find((item)=>item.id===id);
    let isProductInCart=addedItem.some(i=>i.id===prodcut.id);
    if(isProductInCart){
        addedItem=addedItem.map(p=>{
            if(p.id===prodcut.id) 
            p.qunatity+=1;
            return p;
        });
    }
    else{
        addedItem.push(prodcut);
    }
    productsList.innerHTML="";
    addedItem.forEach(item=>productsList.innerHTML+=`<p>${item.title}${item.qunatity}</p>`);
    localStorage.setItem('productInCart',JSON.stringify(addedItem))
    let numOfProducts=document.querySelectorAll('.products-list div p');
    badge.style.display='block';
    badge.innerHTML=numOfProducts.length;
    }
    else{
        window.location='login.html';
    }   
}
// add product to favorite
let favItems=localStorage.getItem('favProducts')
? JSON.parse(localStorage.getItem('favProducts')):[];
function addToFav(id){
    if(localStorage.getItem('username')){
    let products=JSON.parse(localStorage.getItem('products'))||productsDB;
    let chossenProduct= products.find(item=>item.id===id);
    let isProductInFav=favItems.some(i=>i.id===chossenProduct.id);
    if(isProductInFav){
        favItems=favItems.map(item=>{
            return item;
        });
        
    }
    else{
        favItems.push(chossenProduct);
        chossenProduct.liked=true;  

    }
    localStorage.setItem('favProducts',JSON.stringify(favItems));
    localStorage.setItem('products',JSON.stringify(products));
    drawUi(products);
    }
    else{
        window.location='login.html';
    }   
}
// open cart menu

function svaeItemData(id){
    localStorage.setItem('productId',id);
    window.location='cartDetails.html';
}
// search function
let input=document.getElementById('search');
input.addEventListener('keyup',function(e){
    search(e.target.value,JSON.parse(localStorage.getItem('products')));
    if(e.target.value.trim()===""){
        drawUi(JSON.parse(localStorage.getItem('products')));
    }
});
// search product
function search(title,productsArray){
  
    let arr=productsArray.filter(item=>item.title.toLowerCase().indexOf(title.toLowerCase())!=-1);
    drawUi(arr);
}
// get uniqe product
function getUniqeArr(arr,filterdId){
    let uniqe= arr.map(item=>item[filterdId])
    .map((item,index,finalArr)=>finalArr.indexOf(item)===index&&index)
    .filter(item=>arr[item])
    .map(item=>arr[item]);
    return uniqe;
}

// Filter products by size
let filterSize= document.getElementById('filterSize');
filterSize.addEventListener('change',filterProductsBySize);
function filterProductsBySize(e){
    let val=e.target.value;
    let prodcuts=JSON.parse(localStorage.getItem('products')) || products;
    if(val==='all'){
        drawUi(prodcuts);
    }
    else{
        prodcuts=prodcuts.filter(item=>item.size===val);
        drawUi(prodcuts);
 
    }

}
// Edit product function
function editProduct(id){
    localStorage.setItem('editProduct',id);
    window.location='editProduct.html';
}