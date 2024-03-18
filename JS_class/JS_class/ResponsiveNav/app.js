const btn = document.querySelector('.close');
const nav = document.querySelector('.nav-container > nav');


btn.onclick =()=>{
   if(nav.style.display !== "none"){
    nav.style.display = 'none';
    btn.src = './images/icon-menu.svg';
   }else{
    nav.style.display = 'block';
    btn.src ='./images/icon-close.svg';
   }
}