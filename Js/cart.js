let productsDom=document.querySelector('.products');

function drawCartProductUi(allProducts=[]){
    let products=JSON.parse(localStorage.getItem('productInCart'))||allProducts;
    let productUi=products.map((item)=>{
     return `
        <div class="product-item">
            <img class="product-item-image" src="${item.imageUrl}" alt="image">
            <div class="product-item-desc">
            <h2 class="product-item-title">${item.title}</h2>
            <p>${item.description}</p>
            <span>Size: ${item.size}</span><br>
            <span>Quantity: ${item.qunatity}</span>
            </div>
            <div class="product-item-actions">
            <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Cart</button>
            <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML=productUi.join('');
}
drawCartProductUi();
function removeFromCart(id){
    let productInCart=localStorage.getItem('productInCart')
    if(productInCart){
        let items=JSON.parse(productInCart);
        let filterdItem=items.filter(item=>item.id!==id);
        drawCartProductUi(filterdItem);
        localStorage.setItem('productInCart',JSON.stringify(filterdItem)) ;
    }
}