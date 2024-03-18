function welcome(){
    alert("Welcome to my page");
}

const btn = document.querySelector(".btn");

// btn.onclick = function(){
//     alert("Working");
// }
// btn.onclick =()=>{
//     alert('Working');
// }

function message(){
    alert("This is working");
}
function hoverMe(){
    btn.style.background = 'crimson';
}
btn.addEventListener('click', message);
btn.addEventListener('mouseover', hoverMe)