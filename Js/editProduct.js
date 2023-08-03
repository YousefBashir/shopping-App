let products=JSON.parse(localStorage.getItem('products'))|| productsDB;
let productId=JSON.parse(localStorage.getItem('editProduct'));
let getProduct=products.find(i=>i.id===productId);

// variable
let updateProductForm=document.getElementById('updateProductForm');
let productName=document.getElementById('productName');
let productDesc=document.getElementById('productDesc');
let productImage=document.getElementById('productImage');
let productSize=document.getElementById('productSize');
let productSizeValue;
let productImg;
// evaluate values
productName.value= getProduct.title;
productDesc.value=getProduct.description;
productSize.value=getProduct.size;
productImg=getProduct.imageUrl
// Events
productSize.addEventListener('change',getProductSize);
updateProductForm.addEventListener('submit',updateProduct)
productImage.addEventListener('change',uplodeImage);

// // Functions
function getProductSize(e){
    productSizeValue=e.target.value;
}
function uplodeImage(e){
    let file=this.files[0];
    getImageBase64(file);
    let types=["image/jpeg","image/png"]
    if(types.indexOf[file.type]==-1){
        alert('type not supported, jpeg and png only');
        return;
    }
    if(file.size>2*1024*1024){
        alert('Size of pic is so big, 2mgb only');
        return;
    }
}
function updateProduct(e){
    e.preventDefault();
    getProduct.title=productName.value;
    getProduct.description=productDesc.value;
    getProduct.size=productSize.value;
    getProduct.imageUrl=productImg;
    localStorage.setItem('products',JSON.stringify(products));
    setTimeout(()=>{
        window.location="index.html"
    },500);
}
function getImageBase64(file){
    let reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){
        productImage=reader.result;
    }
    reader.onerror=function(){
        alert("can't upload image")
    }
}