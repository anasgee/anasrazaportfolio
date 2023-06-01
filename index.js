

let hamburger=document.getElementById("ham");
let cross =document.getElementById("cross");
hamburger.addEventListener('click', ()=>{
    document.getElementById("right_nav").style.display="block";
    hamburger.style.display="none";
    cross.style.display="block"
    document.getElementById("right_nav").style.transform="translateY(40px)";
        document.getElementById("right_nav").style.transition= "transform 0.3s ease-in";
})
cross.addEventListener("click", ()=>{
    document.getElementById("right_nav").style.display="none";
    hamburger.style.display="block";
    cross.style.display="none"
})