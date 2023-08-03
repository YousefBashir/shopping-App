// draw ui
let noProducts=document.querySelector(".no-products");
let productsDom =document.querySelector('.products');
let drawUi;
(drawUi= function(products=[]){
    let myProdcuts=products.filter(item=> item.isMyProduct==="yes");
    if(myProdcuts.length!=0){
    let productUi=myProdcuts.map((item)=>{
     return `
        <div class="product-item" style="border:${item.isMyProduct==='yes'?'2px solid green':''}">
            <img class="product-item-image" src="${item.imageUrl}" alt="image">
            <div class="product-item-desc">
            <a onclick="svaeItemData(${item.id})" class="product-item-title">${item.title}</a>
            <p>${item.description}</p>
            <span>Size: ${item.size}</span>
            <button class='edit-product-btn' onclick='editProduct(${item.id})'>Edit Product</button>
            <button class="delete-product" onclick="deleteProduct(${item.id})">Delete Product</button>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML=productUi.join('');
}
    else{
        noProducts.innerHTML="No products"
    }
})(JSON.parse(localStorage.getItem("products")) || productsDB);
// edit product
function editProduct(id){
    localStorage.setItem('editProduct',id);
    window.location='editProduct.html';
}
// delete product
function deleteProduct(id){
 let products= JSON.parse(localStorage.getItem("products")) || productsDB;
 let myProdcuts=products.filter(item=> item.isMyProduct==="yes");
 let filterdProducts=myProdcuts.filter(item=>item.id!==id);
drawUi(filterdProducts);
let clickedProduct=myProdcuts.find(item=>item.id===id);
products=products.filter(i=>i.id!==clickedProduct.id);
console.log(products)
localStorage.setItem('products',JSON.stringify(products));
// setTimeout(()=>{
//     window.location="myProducts.html";
// },100)

}