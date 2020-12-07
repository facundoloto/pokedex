let load=document.getElementById('load')
let caja=document.getElementById('caja')
let name=document.getElementById('name')
let img=document.getElementById('img')
let id=document.getElementById('id')
let habilidades=document.getElementById('exp')
let power=document.getElementById('power')
let type=document.getElementById('type')
let container=document.getElementById('container')
caja.addEventListener("keydown", (e)=> {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode ===13) {
e.preventDefault()
pokedex()

}
})

function pokedex(){
container.className=""
if(caja.value>893){
swal("this pokedex contains 893 pokemon")
name.textContent=""
type.textContent=""
habilidades.textContent=""
id.textContent=""
power.textContent=""
document.getElementById('img').innerHTML=""
}
else{
document.getElementById('load').innerHTML = "<img src='img/loader.gif' class='loader' >"
name.textContent=""
type.textContent=""
habilidades.textContent=""
id.textContent=""
power.textContent=""
document.getElementById('img').innerHTML=""
let form=caja.value

let xhttp=new XMLHttpRequest()
xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${form.toLowerCase(form)}`)
xhttp.send()
xhttp.onreadystatechange= function(){
if(this.readyState>1 && this.readyState<4){

}
else{
if(this.status==404){
swal("not found registry")
document.getElementById('load').innerHTML = ""


}
else{
if(this.readyState==4 && this.status==200)
{
container.className="ability"
let datoPokemon=JSON.parse( this.responseText)
document.getElementById('load').innerHTML = ""
let bg=datoPokemon.types[0].type.name
colorType(bg)
const imagen=datoPokemon.sprites.front_default
document.getElementById('img').innerHTML=`<img src='${imagen}' class='ability pokemon' >`
name.textContent=datoPokemon.name
type.textContent="Type:"+datoPokemon.types[0].type.name /*con esto sabemos el tipo*/
habilidades.textContent="Exp:"+datoPokemon.base_experience
id.textContent="#:"+datoPokemon.id
power.textContent="Power:"+datoPokemon.abilities[0].ability.name

console.log(datoPokemon.types[0].type.name)
}
}
} 
}
}
}
function colorType(bg){
    switch (bg) {
    case "normal":
    container.className=" ability normal"
    break;
    case "water":
    container.className=" ability water"
    break;  
    case "electric":
    container.className=" ability electric"
    break;
    case "Flying":
    container.className=" ability flying"
    break;
    case "ground":
    container.className=" ability ground"
    break;
    case "psychic":
    container.className=" ability psychic"
    break;
    case "rock":
    container.className=" ability rock"
    break;
    case "dark":
    container.className=" ability dark"
    break;
    case "steel":
    container.className=" ability steel"
    break;
    case "grass":
    container.className=" ability grass"
    break;
    case "ice":
    container.className=" ability ice"
    break;
    case "poison":
    container.className=" ability poison"
    break;
    case "bug":
    container.className=" ability bug"
    break;
    case "ghost":
    container.className=" ability ghost"
    break;
    case "dragon":
    container.className=" ability dragon"
    break;
    case "fairy":
    container.className=" ability fairy"
    break;
    case "fire":
    container.className=" ability fire"
    break;
    }
    
    }


