
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

function remove(){

while (poke.firstChild) { //si hay un hijo pasa al ciclo y elimana a todos hasta que el primero hijo de falso(ya no tenga ningun nodo hijo)
poke.removeChild(poke.firstChild); 
} 
}
//agregar funcion bg para cada template
//por cada generacion una funcion que envia por parametro desde donde buscar en la api hasta donde tiene que terminar de buscar
one.addEventListener("click",function g1(){
remove()
loader.style.display="block";
const min=0
const max=151
listar(min,max)
}
)

two.addEventListener("click",function g2(){
remove()
loader.style.display="block";
const min=151
const max=251
listar(min,max)
})
trhee.addEventListener("click",function g3(){
remove()
loader.style.display="block";
const min=251
const max=386
listar(min,max)
})
four.addEventListener("click",function g4(){
  loader.style.display="block";
remove()
const min=386
const max=493
listar(min,max)
})
five.addEventListener("click",function g5(){
  loader.style.display="block";
remove()
const min=493
const max=649
listar(min,max)
})

six.addEventListener("click",function g6(){
  loader.style.display="block";
remove()
const min=649
const max=721
listar(min,max)
})

seven.addEventListener("click",function g7(){
  loader.style.display="block";
remove()
const min=721
const max=809
listar(min,max)
})

eight.addEventListener("click",function g8(){
  loader.style.display="block";
remove()
const min=809
const max=893
listar(min,max)
})

//max es hasta donde termina el array y min desde donde empieza por que por ejemplo la segunda generecion emíeza desde 151 y termina en la 250
async function listar(min,max){ //para usar await tiene que haber una funcion async global


  
response=[]
try{

let max_poke=parseInt(max)
let min_poke=parseInt(min)
let fragment = document.createDocumentFragment();
for(let i=min_poke;i<max_poke;i++){

let  total=await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`) //los await sirve para que se vuelva sincrono,osea que lo que sigue despuesde await espere hasta que termine de ejecutarse
let result_pokemon=await total.json() //el await este hace que se ejecute la funcion fetch await que guarda la paromesa que esta en la variable totalPromise
let obj=new pokemonObj()
obj.namePoke=result_pokemon.name
obj.idPoke=result_pokemon.id
obj.typePoke=result_pokemon.types[0].type.name
obj.url=String(`${result_pokemon.sprites.front_default}`) //al ser prototipado tenemos que poner la propiedad url y no el metodo set urlPoke
const template=document.getElementById("template") //guardamos el temaplate en una variable
const newTemplate=template.content.cloneNode(true) //clonamos el template
newTemplate.getElementById('namePokemon').textContent=`${result_pokemon.name}` //le agreamos los elementos que tiene el template
newTemplate.getElementById('idPokemon').textContent=`#${result_pokemon.id}`
newTemplate.getElementById('typePokemon').textContent=`type: ${result_pokemon.types[0].type.name}`
newTemplate.getElementById('abilityPokemon').textContent=`ability:${result_pokemon.abilities[0].ability.name}`
newTemplate.getElementById('imgPoke').src=`${obj.url}`
fragment.appendChild(newTemplate) //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
response.push(obj) //guarda objeto en array

}
poke.appendChild(fragment) //usamos fragment
arr= await Promise.all(response)//ejecuta la promesa response haciendo que los datos se carguen mas rapido hasta que esto no se cargue el codigo que sigue no se ejecutara
//localStorage.setItem('myArray', JSON.stringify(arr));
loader.style.display="none"; //cuando termine de carga la promesa seteo display none el div de esta el gif carga

}
catch(Error){
console.log(Error)
}
}


function filterType(){//ejemplo de como se filtra //enviar como parametro el array de cada generacion de pokemones
const filter = arr.filter(el => el.type=="normal");
for(let i=0;i<filter.length;i++){
console.log("pokemon de hierba: "+filter[i].name+" "+filter[i].type)
}
}