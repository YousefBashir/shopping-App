// variable
let createProductForm=document.getElementById('createProductForm');
let productName=document.getElementById('productName');
let productDesc=document.getElementById('productDesc');
let productImage=document.getElementById('productImage');
let productSize=document.getElementById('productSize');
let productSizeValue;
// Events
productSize.addEventListener('change',getProductSize);
createProductForm.addEventListener('submit',createProduct)
productImage.addEventListener('change',uplodeImage);

// Functions
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
function createProduct(e){
    e.preventDefault();
    let allProducts=JSON.parse(localStorage.getItem('products'))||productsDB;
    let nameValue=productName.value;
    let descValue=productDesc.value;
    if(nameValue&&descValue){
        let obj=
        {
            id:allProducts?allProducts.length+1:1,
            title:nameValue,
            size:productSizeValue,
            imageUrl:productImage,
            description:descValue,
            qunatity:1,
            isMyProduct:'yes'
        };
    let newProducts=allProducts ? [...allProducts,obj]:[obj];
    localStorage.setItem('products',JSON.stringify(newProducts));
    productName.value="";
    productDesc.value="";
    productSize.value="";
    setTimeout(()=>{
        window.location="index.html"
    },500);
    }
    else{
        alert('please enter product data')
    }
    
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