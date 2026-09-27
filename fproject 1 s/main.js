const send=document.getElementById("Send");
const hrest=document.getElementById("hrest");
const modal=document.getElementById("modal");

send.addEventListener("click",()=>{
    modal.style.display="block";
})

hrest.addEventListener("click",()=>{
    modal.style.display="none";
})