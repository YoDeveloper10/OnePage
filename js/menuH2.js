const icone = document.querySelector('.mobile h2');

icone.addEventListener('click', ()=>{
    if(icone.style.color == "black"){
        icone.style.color = "white";
    }else{
        icone.style.color = "black";
    }
})

