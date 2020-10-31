let buton=document.getElementById('button')
let container=document.getElementById('container')
let caja=document.getElementById('caja')
let name=document.getElementById('name')
let img=document.getElementById('img')
let id=document.getElementById('id')
let habilidades=document.getElementById('exp')
let power=document.getElementById('power')
let type=document.getElementById('type')

caja.addEventListener("keydown", (e)=> {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode ===13) {
    e.preventDefault()
    pokedex()
    }
  })
  buton.addEventListener('click',pokedex())
function pokedex(){
    if(caja.value>893){
    swal("el registro de esta pokedex solo tiene 893 pokemones")
    
    }
    else{
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja.value}`)
    xhttp.send()
    xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200)
    {
    let datoPokemon=JSON.parse( this.responseText)
    console.log(datoPokemon)
    img.setAttribute("src",datoPokemon.sprites.front_default)
    name.textContent=datoPokemon.name
    type.textContent="Tipo:"+datoPokemon.types[0].type.name /*con esto sabemos el tipo*/
    habilidades.textContent="Exp:"+datoPokemon.base_experience
    id.textContent="#:"+datoPokemon.id
    power.textContent="Power:"+datoPokemon.abilities[0].ability.name
   
    /* p.textContent=datoPokemon.name +" "+ datoPokemon.base_experience +" "+datoPokemon.effect_entries
    */
    }
} 
    }   
}


