let poke=document.getElementById('listPokemon')
//crear funcion para saber si el array esta en localstorage esta vacio entonces ejecuctar la funcion listar,si no esta vacio que no se ejcute
let filtrar=document.getElementById('filter')
let arr=new Array()
let response=[]
let bandera=false
//generaciones
let template=document.getElementById('template')
let one=document.getElementById('firts')
let two=document.getElementById('seconds')
let trhee=document.getElementById('third')
let four=document.getElementById('quarter')
let five=document.getElementById('fifth')
let six=document.getElementById('sixth')
let seven=document.getElementById('seventh')
let eight=document.getElementById('eighth')
let title=document.getElementById('title')
let menus=document.querySelectorAll(".menus button");
let salir=document.getElementById("salir")
function disabilitar(){
for(i=0; i<menus.length;i++) { 
menus[i].setAttribute('disabled', true); 
} 
}

function activar(){
for(i=0; i<menus.length;i++) { 
menus[i].removeAttribute("disabled");

}   
}

function remove(){
while (poke.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
poke.removeChild(poke.firstChild); 
window.scrollTo(0, 0) //vuelve arriba de todo dentro del dom
} 
}

//por cada generacion una funcion que envia por parametro desde donde buscar en la api hasta donde tiene que terminar de buscar
one.addEventListener("click",function g1(){
remove()
title.textContent="Kanto"

    listar(0,152)  


})

two.addEventListener("click",function g2(){
remove()
title.textContent="Johto"


    listar(153,250)  

 
})

trhee.addEventListener("click",()=>{
remove()
title.textContent="Hoenn"

listar(251,386)
})

four.addEventListener("click",()=>{
remove()
title.textContent="Sinnoh"

listar(386,493)
})

five.addEventListener("click",function g5(){


remove()
title.textContent="Teselia"
listar(493,649)
})

six.addEventListener("click",function g6(){
remove()
title.textContent="Kalos"
listar(649,721)
})

seven.addEventListener("click",function g7(){

remove()
title.textContent="Alola"
listar(721,809)
})

eight.addEventListener("click",function g8(){

remove()
title.textContent="Galar"
listar(809,893)
})

