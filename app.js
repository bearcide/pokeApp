<<<<<<< HEAD
const imgPoke2 = document.querySelector('#poke2');
const namePoke2 = document.querySelector('#nombrePoke-rival');
const poke2Tipo = document.querySelector('#tipoRival');
const poke2Ataque = document.querySelector('#ataqueRival');

const imgPokeProp = document.querySelector('#pokeProp');
const namePokeProp = document.querySelector('#nombrePoke-Prop');
const pokePropTipo = document.querySelector('#tipoProp');
const pokePropAtaque = document.querySelector('#ataqueProp');

const input = document.querySelector('#input');
const btnElegir = document.querySelector('#btn-poke');
const btnCombate = document.querySelector('#btn-combate');


const getNumRandom = () => {
    let min = Math.ceil(0);
    let max = Math.floor(1001);

    return Math.floor(Math.random() * (max - min) + min);
  }

const obtenerPokePropio = ()=>{
    const num = input.value
    console.log(num);
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res)=>{

        return res.data
    }).then((res)=>{
        console.log(res);
        imgPokeProp.src = res.sprites.back_default;
        pokePropTipo.innerHTML = res.types[0].type.name;
        namePokeProp.innerHTML = res.name;
        pokePropAtaque.innerHTML = res.stats[0].base_stat;
    })
    console.log(imgPokeProp);
}

const obtenerPokeRival = () =>{

    const numPokeRival = getNumRandom();

    axios.get(`https://pokeapi.co/api/v2/pokemon/${numPokeRival}`).then((res)=>{

        return res.data
    }).then((res)=>{
        console.log(res);
        imgPoke2.src = res.sprites.front_default;
        poke2Tipo.innerHTML = res.types[0].type.name;
        namePoke2.innerHTML = res.name;
        poke2Ataque.innerHTML = res.stats[0].base_stat;
    })

    console.log(imgPoke2);
}

const combate = ()=>{
    const ataqueRival = parseInt(poke2Ataque.textContent);
    const ataquePropio = parseInt(pokePropAtaque.textContent);

    if(ataqueRival > ataquePropio) {
        alert("Tu pokemon murio :(");
    } else if(ataqueRival < ataquePropio){
        alert('Ganaste!');
    } else {
        alert('Empate...');
    }
}

window.addEventListener('load', obtenerPokeRival)
btnElegir.addEventListener('click', obtenerPokePropio);
btnCombate.addEventListener('click', combate);



=======
const imgPoke2 = document.querySelector('#poke2');
const namePoke2 = document.querySelector('#nombrePoke-rival');
const poke2Tipo = document.querySelector('#tipoRival');
const poke2Ataque = document.querySelector('#ataqueRival');

const imgPokeProp = document.querySelector('#pokeProp');
const namePokeProp = document.querySelector('#nombrePoke-Prop');
const pokePropTipo = document.querySelector('#tipoProp');
const pokePropAtaque = document.querySelector('#ataqueProp');

const input = document.querySelector('#input');
const btnElegir = document.querySelector('#btn-poke');
const btnCombate = document.querySelector('#btn-combate');


const getNumRandom = () => {
    let min = Math.ceil(0);
    let max = Math.floor(1001);

    return Math.floor(Math.random() * (max - min) + min);
  }

const obtenerPokePropio = ()=>{
    const num = input.value
    console.log(num);
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res)=>{

        return res.data
    }).then((res)=>{
        console.log(res);
        imgPokeProp.src = res.sprites.back_default;
        pokePropTipo.innerHTML = res.types[0].type.name;
        namePokeProp.innerHTML = res.name;
        pokePropAtaque.innerHTML = res.stats[0].base_stat;
    })
    console.log(imgPokeProp);
}

const obtenerPokeRival = () =>{

    const numPokeRival = getNumRandom();

    axios.get(`https://pokeapi.co/api/v2/pokemon/${numPokeRival}`).then((res)=>{

        return res.data
    }).then((res)=>{
        console.log(res);
        imgPoke2.src = res.sprites.front_default;
        poke2Tipo.innerHTML = res.types[0].type.name;
        namePoke2.innerHTML = res.name;
        poke2Ataque.innerHTML = res.stats[0].base_stat;
    })

    console.log(imgPoke2);
}

const combate = ()=>{
    const ataqueRival = parseInt(poke2Ataque.textContent);
    const ataquePropio = parseInt(pokePropAtaque.textContent);

    if(ataqueRival > ataquePropio) {
        alert("Tu pokemon murio :(");
    } else if(ataqueRival < ataquePropio){
        alert('Ganaste!');
    } else {
        alert('Empate...');
    }
}

window.addEventListener('load', obtenerPokeRival)
btnElegir.addEventListener('click', obtenerPokePropio);
btnCombate.addEventListener('click', combate);



>>>>>>> 669fb2d174773a8b7724ae2095f312fdc44acf96
