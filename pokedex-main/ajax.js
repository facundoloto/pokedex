async function allPokemon(){
    let result_pokemon=[]
    for(let i=min_poke;i<max_poke;i++){
        let total=await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`) //los await sirve para que se vuelva sincrono,osea que lo que sigue despuesde await espere hasta que termine de ejecutar
        let pokemon=  await total.json()
        result_pokemon.push(pokemon)
        console.log("cargando")
        }
}