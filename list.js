
let poke=document.getElementById('listPokemon')
//crear funcion para saber si el array esta en localstorage esta vacio entonces ejecuctar la funcion listar,si no esta vacio que no se ejcute
let loader=document.getElementById('load')
let filtrar=document.getElementById('filter')
//generaciones
let one=document.getElementById('firts')
let two=document.getElementById('seconds')
let trhee=document.getElementById('third')
let four=document.getElementById('quarter')
let five=document.getElementById('fifth')
let six=document.getElementById('sixth')
let seven=document.getElementById('seventh')
let eight=document.getElementById('eighth')
//agregar funcion bg para cada template
//por cada genercion una funcion que envia por parametro desde donde buscar en la api hasta donde tiene que terminar de buscar
one.addEventListener("click",function g1(){
remove()
const min=0
const max=151

listar(min,max)
}
)

two.addEventListener("click",function g2(){

const min=151
const max=251

listar(min,max)
}
)

trhee.addEventListener("click",function g3(){
const min=251
const max=386

listar(min,max)
}
)

four.addEventListener("click",function g4(){
const min=386
const max=493

listar(min,max)
}
)

five.addEventListener("click",function g5(){
const min=493
const max=649

listar(min,max)
}
)

six.addEventListener("click",function g6(){
const min=649
const max=721

listar(min,max)
}
)

seven.addEventListener("click",function g7(){
const min=721
const max=809

listar(min,max)
}
)

eight.addEventListener("click",function g8(){
const min=809
const max=893

listar(min,max)
}
)

























//max es hasta donde termina el array y min desde donde empieza por que por ejemplo la segunda generecion emíeza desde 151 y termina en la 250
async function listar(min,max){ //para usar await tiene que haber una funcion async global
let arr=new Array()
loader.innerHTML = "<img src='img/loader.gif' class='loader' >"//se carga gif de carga
let response=[]

try{
let max_poke=parseInt(max)
let min_poke=parseInt(min)
for(let i=min_poke;i<max_poke;i++){
let  total=await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`) //los await sirve para que se vuelva sincrono,osea que lo que sigue despuesde await espere hasta que termine de ejecutarse
let result_pokemon=await total.json() //el await este hace que se ejecute la funcion fetch await que guarda la paromesa que esta en la variable totalPromise
let obj=new pokemonObj()
obj.namePoke=result_pokemon.name
obj.idPoke=result_pokemon.id
obj.typePoke=result_pokemon.types[0].type.name
obj.url=String(`${result_pokemon.sprites.front_default}`) //al ser prototipado tenemos que poner la propiedad url y no el metodo set urlPoke
response.push(obj) //guarda objeto en array
}
arr= await Promise.all(response)//ejecuta la promesa response haciendo que los datos se carguen mas rapido hasta que esto no se cargue el codigo que sigue no se ejecutara
//localStorage.setItem('myArray', JSON.stringify(arr));
loader.style.display="none"; //cuando termine de carga la promesa seteo display none el div de esta el gif carga
for(let i=0;i<arr.length;i++){
const url=String (arr[i].url)
const template=document.getElementById("template")
const newTemplate=template.content.cloneNode(true)
newTemplate.getElementById('namePokemon').textContent=`${arr[i].name}`
newTemplate.getElementById('idPokemon').textContent=`${[arr[i].id]}`
newTemplate.getElementById('typePokemon').textContent=`${arr[i].type}`
newTemplate.getElementById('imgPoke').src=`${url}`
poke.appendChild(newTemplate)
console.log(arr[i].namePoke +" "+arr[i].typePoke)
}

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































































/*for (let i=0;i<150;i++){
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${i+1}`)
    xhttp.send()
    xhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){ //esta funcion guarda los datos de la api en el objeto y este lo manda a un array
    let poke=JSON.parse( this.responseText)
    let obj=new pokemonObj()
    obj.namePoke=poke.name
    obj.idPoke=poke.id
    obj.typePoke=poke.abilities[0].ability.name
    arr.push(obj) //guarda objeto en array
    }
    }

    }//fin del for
    console.log(arr.length)


*/



















/*const setArray=()=>{ //esta funcion espera hasta que los datos se guarden y luego se tiene que ejecutar
return new Promise((resolve,reject)=>{
setTimeout(()=>{ resolve(()=>{
 
     



}
)// fin del resolve
}//fin de la funcion de flecha del set time out

,3000)
setTimeout(()=>{resolve(arr)},3000)
}//return de la promesa 

)// fin de la promesa promise
}// fin de la funcion de flecha del getArray //todos estos comentarios son para guiarse donde termina cada funcion 

   
    async function loadArray(){
        await getArray()
       console.log(arr.length)
       for(let i=0;i<arr.length;i++){
        console.log(JSON.stringify(arr[i].name+ ""+ arr[i].idPoke))  //json stringfy transforma objetos en string las propiedades
        
        }
        
        }
        loadArray()
    */
    
    





















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

