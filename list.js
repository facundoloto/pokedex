const list=document.getElementById('list')
const poke=document.getElementById ("poke")
const contenedor=document.getElementById('contenedor')
const buscar=document.getElementById('buscar')
const search=document.getElementById('search')

 
  
list.addEventListener("click",function listar(){
poke.className="list"
contenedor.className="oculto"
buscar.className="oculto"
pokemons()
})


search.addEventListener("click",function intro(){
contenedor.className="contenedor"
buscar.className="intro"
poke.className="oculto"
})

function pokemons(){

let http=150
let arr= new Object()
for(let i=0;i<150;i++){
 
let xhttp=new XMLHttpRequest()
xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${i+1}`)
xhttp.send()
xhttp.onreadystatechange= function(){
if(this.readyState==4 && this.status==200){
let poke1=JSON.parse( this.responseText)

let proto = {
    id:`${poke1.id}`,
    name:`${poke1.name}`
 }
 arr.push(proto);
}

}




}
console.log(arr.length)
}























/*´
const newTemplate=template.content.cloneNode(true)
newTemplate.getElementById('namePokemon').textContent=`${Pokemon.name}`
newTemplate.getElementById('idPokemon').textContent=`${Pokemon.id}`
newTemplate.getElementById('typePokemon').textContent=`${Pokemon.types[0].type.name }`
const imagen=Pokemon.sprites.front_default
newTemplate.getElementById('imgPoke').setAttribute("src",imagen)
poke.appendChild(newTemplate)
console.log(Pokemon.name)*/






/*
const template=document.getElementById("template")
const newTemplate=template.content.cloneNode(true)
newTemplate.getElementById('namePokemon').textContent=`${data.results[i].name}`
newTemplate.getElementById('idPokemon').textContent=`${[i]}`
newTemplate.getElementById('typePokemon').textContent=`${data.results[i].name.id}`
/*newTemplate.querySelector("img").setAttribute("src",`${data.results[i].sprites.front_default}`)
poke.appendChild(newTemplate)
console.log(data.results[i].name)
}

*/

