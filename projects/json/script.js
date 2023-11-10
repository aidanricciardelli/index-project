document.querySelector('#search').addEventListener("click", getPokemon);



//makes Pokemon name appear with Capital first letter

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//converts searchbox text to lowercase to search pokemon name effectively

function lowerCaseName(string) {
    return string.toLowerCase();
}


function getPokemon(e) {

    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);


    //API website
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
           <div>
                <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            </div>
            <div class="pokemonInfo"></div>
            <h1>${capitalizeFirstLetter(data.name)}</h1>
            <p>Type: ${data.types["0"].type.name} 
        </div>
           
           `;



            //error console log

        }).catch((err) => {
            console.log('Pokemon not found', err);
        })

    e.preventDefault();


}


