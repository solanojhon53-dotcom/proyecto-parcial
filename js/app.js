const buscador=
document.getElementById(
"busqueda"
);

const cards=
document.querySelectorAll(
".card"
);

const mensaje=
document.getElementById(
"mensaje"
);

const boton=
document.getElementById(
"modoBtn"
);



buscador.addEventListener(

"input",

()=>{

let texto=
buscador.value
.toLowerCase();

let encontrados=0;


cards.forEach(card=>{

let contenido=
card.textContent
.toLowerCase();


if(
contenido.includes(texto)
){

card.style.display="";

encontrados++;

}
else{

card.style.display=
"none";

}

});


mensaje.style.display=
encontrados===0
?
"block"
:
"none";

}

);



boton.addEventListener(

"click",

()=>{

document.body.classList.toggle(
"dark"
);


if(
document.body.classList.contains(
"dark"
)
){

boton.innerHTML=
"☀️ Modo claro";

}else{

boton.innerHTML=
"🌙 Modo oscuro";

}

}

);