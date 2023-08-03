// get element form html
let editForm=document.querySelector('#edit-profile-form')
let userName=document.querySelector('#user-name');
let userEmail=document.querySelector('#user-email');
let userImg=document.querySelector('#user-img');
// get data from local storage
let name=localStorage.getItem('username');
let email=localStorage.getItem('email');
userName.value=name;
userEmail.value=email;
editForm.addEventListener('submit',editUser);
userImg.addEventListener('change',uplodeUserImg);
// edit user
function editUser(e){
  e.preventDefault();
  let newName=userName.value;
  let newEmail=userEmail.value;
  localStorage.setItem('username',newName);
  localStorage.setItem('email',newEmail);
  localStorage.setItem('userimg',userImg);
  setTimeout(()=>{
    window.location='profile.html'
  },500)
}
function uplodeUserImg(e){
  
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
// get image base64
function getImageBase64(file){
  let reader= new FileReader();
  reader.readAsDataURL(file);
  reader.onload=function(){
      userImg=reader.result;
  }
  reader.onerror=function(){
      alert("can't upload image")
  }
}