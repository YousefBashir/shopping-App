let productsDom=document.querySelector('.products');

function drawFavoriteProductUi(allProducts=[]){
    let products=JSON.parse(localStorage.getItem('favProducts'))||allProducts;
    let productUi=products.map((item)=>{
     return `
        <div class="product-item">
            <img class="product-item-image" src="${item.imageUrl}" alt="camera image">
            <div class="product-item-desc">
            <h2 class="product-item-title">${item.title}</h2>
            <p>${item.description}</p>
            <span>Size: ${item.size}</span><br>
            <span>Quantity: ${item.qunatity}</span>
            </div>
            <div class="product-item-actions">
            <button class="add-to-cart" onclick="removeFromFavorite(${item.id})">Remove From Favorite</button>
            <i class="fa-solid fa-heart" style="color: red"></i>
            </div>
        </div>
        `;
    });
    productsDom.innerHTML=productUi.join('');
    JSON.parse(localStorage.getItem("favProducts")) || allProducts
}
drawFavoriteProductUi();
function removeFromFavorite(id){
    let productInCart=localStorage.getItem('favProducts')
    let prodcuts=JSON.parse(localStorage.getItem('products'));
    if(productInCart){
        let items=JSON.parse(productInCart);
        let filterdItem=items.filter(item=>item.id!==id);
        let deletedItem=prodcuts.find(item=>item.id===id);
        delete deletedItem.liked;
        localStorage.setItem('products',JSON.stringify(prodcuts)) ;
        localStorage.setItem('favProducts',JSON.stringify(filterdItem)) ;
        drawFavoriteProductUi(filterdItem);
        // localStorage.setItem('products',JSON.stringify(filterdItem)) ;
    }
}