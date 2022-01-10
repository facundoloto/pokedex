
let loader=document.getElementById('load')
loader.style.display="none"
let menus=document.querySelectorAll(".menus button");
function desabilitar(){
    for(i=0; i<menus.length;i++) { 
    menus[i].setAttribute('disabled', true); 
    } 
    }
    
    function activar(){
    for(i=0; i<menus.length;i++) { 
    menus[i].removeAttribute("disabled");
    
    }   
    }
//max es hasta donde termina el array y min desde donde empieza por que por ejemplo la segunda generecion emíeza desde 151 y termina en la 250
async function listar(min,max){ //para usar await tiene que haber una funcion async global
    try{
    let poke=document.getElementById('listPokemon')
//crear funcion para saber si el array esta en localstorage esta vacio entonces ejecuctar la funcion listar,si no esta vacio que no se ejcute
    let max_poke=parseInt(max)
    let min_poke=parseInt(min)
    let fragment = document.createDocumentFragment();
    let newTemplate=""
    
    for(let i=min_poke;i<max_poke;i++){
        desabilitar()
        loader.style.display="block"
        let template=document.getElementById("template") //guardamos el temaplate en una variable
        let total=await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`) //los await sirve para que se vuelva sincrono,osea que lo que sigue despuesde await espere hasta que termine de ejecutar
        let result_pokemon=await total.json()
        console.log(result_pokemon.name)
        let url=String(`${result_pokemon.sprites.front_default}`) //al ser prototipado tenemos que poner la propiedad url y no el metodo set urlPoke
         //clonamos el template
        newTemplate=template.content.cloneNode(true)
        newTemplate.getElementById('namePokemon').textContent=`${result_pokemon.name}` //le agreamos los elementos que tiene el template
        newTemplate.getElementById('idPokemon').textContent=`N°${result_pokemon.id}`
        let type=newTemplate.getElementById('typePokemon')
        newTemplate.getElementById('abilityPokemon').textContent=`${result_pokemon.abilities[0].ability.name}`
        const img=newTemplate.getElementById('imgPoke')
        let bgPoke=result_pokemon.types[0].type.name
        const card=newTemplate.getElementById('card')
        img.src=`${url}`
        colorCard(card,bgPoke,type)
        //fragment guarda todos los elementos para cuando queramos usarlos lo podamos mostrar en el dom cuando queramos
        fragment.appendChild(newTemplate) 
    }
    loader.style.display="none"
    
    poke.appendChild(fragment)
    activar()
       

    //es importante que toda funciona retorne lo que se va mostrar o se envie de una funcion en este caso el render del template 
    //ya que si lo ponemos en el for se va chocar con los otros llamados cuando se invoque y se va rendizar los template de diferente tipos en este caso por region
    }
    catch(Error){
    console.log(Error)
    }
    }