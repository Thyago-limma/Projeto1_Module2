const nome = document.getElementById("name");
let btn = document.getElementById("button");
const image = document.getElementById("Bullbassaur");

button.addEventListener("click", ()=>{
    if(btn.value == "evol"){
        nome.innerText = "Ivyssaur";
        image.src = "./assets/img/002.png";
        btn.value = "evol2";
        
    }else if(btn.value == "evol2"){
        nome.innerText = "Venussaur";
        image.src = "./assets/img/003.png";
        btn.value = "evol3";

    }else if(btn.value == "evol3"){
        nome.innerText = "Mega-Venussaur";
        image.src = "./assets/img/004.png";
        btn.value = "Inicio";
    }else{
        nome.innerText = "Bullbassaur";
        image.src = "./assets/img/001.png";
        btn.value = "evol";
    }
})