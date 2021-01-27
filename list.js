let poke=document.getElementById('listPokemon')

//crear funcion para saber si el array esta en localstorage esta vacio entonces ejecuctar la funcion listar,si no esta vacio que no se ejcute
let loader=document.getElementById('load')
loader.style.display="none" //desactivamos el gif de carga hasta que se aprenten los botones donde se necesitan cargar datos
let filtrar=document.getElementById('filter')
let arr=new Array()
let response=[]
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
let menu=document.getElementById("menu").parentNode


let title=document.getElementById('title')


function remove(){

while (poke.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
poke.removeChild(poke.firstChild); 
window.scrollTo(0, 0)
} 
}




//por cada generacion una funcion que envia por parametro desde donde buscar en la api hasta donde tiene que terminar de buscar
one.addEventListener("click",function g1(){

remove()
title.textContent="Kanto"
loader.style.display="block";

listar(0,151)
})


two.addEventListener("click",function g2(){
remove()
title.textContent="Johto"
loader.style.display="block"
listar(151,251)
})

trhee.addEventListener("click",()=>{
remove()
title.textContent="Hoenn"
loader.style.display="block";
listar(251,386)



})



four.addEventListener("click",()=>{

remove()
title.textContent="Sinnoh"
loader.style.display="block";




listar(386,493)

})
five.addEventListener("click",function g5(){
title.textContent="Teselia"
loader.style.display="block";
remove()
listar(493,649)
})

six.addEventListener("click",function g6(){

title.textContent="Kalos"
loader.style.display="block";

remove()

listar(649,721)
})

seven.addEventListener("click",function g7(){

title.textContent="Alola"
loader.style.display="block";

remove()

listar(721,809)
})

eight.addEventListener("click",function g8(){

title.textContent="Galar"
loader.style.display="block";

remove()

listar(809,893)
})



function colorCard(id,bg,type){


switch (bg) {
case "normal":

id.className="card-img-top  normal"
type.src="img/normal.png" //en base al tipo se le da un fondo y un sello en type del template
break;
case "water":

id.className=" card-img-top  water"

type.src="img/water.png"
break;  
case "electric":
id.className="card-img-top electric"
type.src="img/electric.png"
break;
case "fighting":
id.className="card-img-top  fighting"
type.src="img/fighting.png"
break;
case "ground":
id.className=" card-img-top  ground"
type.src="img/ground.png"
break;
case "psychic":
id.className=" card-img-top psychic"
type.src="img/psychic.png"
break;
case "rock":
id.className=" card-img-top rock"
type.src="img/rock.png"
break;
case "dark":
id.className=" card-img-top dark"
type.src="img/dark.png"
break;
case "steel":
id.className=" card-img-top steel"
type.src="img/steel.png"
break;
case "grass":
id.className=" card-img-top grass"
type.src="img/grass.png"
break;
case "ice":
id.className=" card-img-top ice"
type.src="img/ice.png"
break;
case "poison":
id.className=" card-img-top poison"
type.src="img/poison.png"
break;
case "bug":
id.className=" card-img-top bug"
type.src="img/bug.png"
break;
case "ghost":
id.className=" card-img-top ghost"
type.src="img/ghost.png"
break;
case "dragon":
id.className=" card-img-top dragon"
type.src="img/dragon.png"
break;
case "fairy":
id.className=" card-img-top fairy"
type.src="img/fairy.png"
break;
case "fire":
id.className=" card-img-top  fire"
type.src="img/fire.png"
break;
case "flying":
id.className=" card-img-top flying"
type.src="img/flying.png"
break;
}
}



//max es hasta donde termina el array y min desde donde empieza por que por ejemplo la segunda generecion emíeza desde 151 y termina en la 250
async function listar(min,max){ //para usar await tiene que haber una funcion async global

try{

let max_poke=parseInt(max)
let min_poke=parseInt(min)

let fragment = document.createDocumentFragment();
menu.disabled=true;
for(let i=min_poke;i<max_poke;i++){


let  total=await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`) //los await sirve para que se vuelva sincrono,osea que lo que sigue despuesde await espere hasta que termine de ejecutarse

let result_pokemon=await total.json() //el await este hace que se ejecute la funcion fetch await que guarda la paromesa que esta en la variable totalPromise

let url=String(`${result_pokemon.sprites.front_default}`) //al ser prototipado tenemos que poner la propiedad url y no el metodo set urlPoke

const template=document.getElementById("template") //guardamos el temaplate en una variable

const newTemplate=template.content.cloneNode(true) //clonamos el template

newTemplate.getElementById('namePokemon').textContent=`${result_pokemon.name}` //le agreamos los elementos que tiene el template

newTemplate.getElementById('idPokemon').textContent=`N°${result_pokemon.id}`

let type=newTemplate.getElementById('typePokemon')

newTemplate.getElementById('abilityPokemon').textContent=`${result_pokemon.abilities[0].ability.name}`

const img=newTemplate.getElementById('imgPoke')

let bgPoke=result_pokemon.types[0].type.name

const card=newTemplate.getElementById('card')

img.src=`${url}`

colorCard(card,bgPoke,type)

fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos




}
loader.style.display="none";

poke.appendChild(fragment)
menu.disabled=false
}








catch(Error){
console.log(Error)
}
}


