let prodcut=JSON.parse(localStorage.getItem('products'));
let prodcutID=localStorage.getItem('productId');
let itemDom=document.querySelector('.item-details')
let productDetails=prodcut.find((item)=>item.id==prodcutID);
console.log(productDetails);
itemDom.innerHTML=
`
<img src="${productDetails.imageUrl}" alt="">
<h2 class="item-title">${productDetails.title}</h2>
<span class="size">Size: ${productDetails.size}</span>
<br>
<span class="size">Qunatity: ${productDetails.qunatity}</span>
<br>
<button onclick="editProduct(${productDetails.id})">Edit product</button>

`;

// Edit product function
function editProduct(id){
    localStorage.setItem('editProduct',id);
    window.location='editProduct.html';
}