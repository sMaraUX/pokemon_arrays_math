//CLASE POKEMON
class Pokemon {
  constructor(nombre, vida, ataque1, ataque2) {
    this.nombre = nombre
    this.vida = vida
    this.ataque = ataque1
    this.ataque2 = ataque2
  }
  //METODO BATALLA
}

//CLASES HIJAS: Pokemons disponibles

class Pikachu extends Pokemon {
  constructor(nombre, vida, ataque, ataque2) {
    super(nombre, vida, ataque, ataque2)
  }
}
class Charmander extends Pokemon {
  constructor(nombre, vida, ataque, ataque2) {
    super(nombre, vida, ataque, ataque2)
  }
}
class Squirtle extends Pokemon {
  constructor(nombre, vida, ataque, ataque2) {
    super(nombre, vida, ataque, ataque2)
  }
}
class Bulbasaur extends Pokemon {
  constructor(nombre, vida, ataque, ataque2) {
    super(nombre, vida, ataque, ataque2)
  }
}

// ataques y daños

const impactTrueno = 230
const rayo = 300
const lanzallamas = 230
const ascuas = 120
const pistoladeAgua = 210
const burbujas = 150
const latigazo = 200
const latigoCepa = 60


// GENERANDO POKEMONS

const pikachu = new Pikachu("Pikachu", 1350, impactTrueno, rayo)
const charmander = new Charmander("Charmander", 1260, lanzallamas, ascuas)
const squirtle = new Squirtle("Squirtle", 1250, pistoladeAgua, burbujas)
const bulbasaur = new Bulbasaur("Bulbasaur", 1210, latigazo, latigoCepa)


// jugadores

const jugador1 = {
  nombre: "",
  tupokebola1: "",
  tupokebola2: ""
}

const jugador2 = {
  nombre: "",
  tupokebola1: "",
  tupokebola2: ""
}

// funciones de asigancion de pokebolas

function j1pokebolas1() {
  if (jugador1.tupokebola1 == "1") {
    jugador1.tupokebola1 = pikachu
    alert(`Jugador ${jugador1.nombre} su pokebola contiene un Pikachu!` )
  } else if(jugador1.tupokebola1 == "2") {
    jugador1.tupokebola1 = charmander
    alert(`Jugador ${jugador1.nombre} su pokebola contiene un Charmander!` )
  } else if(jugador1.tupokebola1 == "3") {
    jugador1.tupokebola1 = pokebola3
    alert(`Jugador ${jugador1.nombre} sus pokebola contiene a Squirtle!` )
  } else if(jugador1.tupokebola1 == "4") {
    jugador1.tupokebola1 = pokebola4
    alert(`Jugador ${jugador1.nombre} sus pokebola contiene a Bulbasaur!` )
  } else { alert("Esta pokebola no existe!")
  jugador1.tupokebola1 = prompt(`${jugador1.nombre} 2 Elija sus Pokebolas: 1 | 2 | 3 | 4`)
  j1pokebolas1()
  }
}

function j1pokebolas2() {
  if (jugador1.tupokebola2 == "1") {
    jugador1.tupokebola2 = pikachu
    alert(`Jugador ${jugador1.nombre} su pokebola contiene un Pikachu!` )
  } else if(jugador1.tupokebola2 == "2") {
    jugador1.tupokebola2 = charmander
    alert(`Jugador ${jugador1.nombre} su pokebola contiene un Charmander!` )
  } else if(jugador1.tupokebola2 == "3") {
    jugador1.tupokebola2 = squirtle
    alert(`Jugador ${jugador1.nombre} sus pokebola contiene a Squirtle!` )
  } else if(jugador1.tupokebola2 == "4") {
    jugador1.tupokebola2 = bulbasaur
    alert(`Jugador ${jugador1.nombre} sus pokebola contiene a Bulbasaur!` )
  } else { alert("Esta pokebola no existe!")
  jugador1.tupokebola2 = prompt(`${jugador1.nombre} 2 Elija sus Pokebolas: 1 | 2 | 3 | 4`)
  j1pokebolas1()
  }
}

function j2pokebolas1() {
  if (jugador2.tupokebola1 == "1") {
    jugador2.tupokebola1 = pikachu
    alert(`Jugador ${jugador2.nombre} su pokebola contiene un Pikachu!` )
  } else if(jugador2.tupokebola1 == "2") {
    jugador2.tupokebola1 = charmander
    alert(`Jugador ${jugador2.nombre} su pokebola contiene un Charmander!` )
  } else if(jugador2.tupokebola1 == "3") {
    jugador2.tupokebola1 = squirtle
    alert(`Jugador ${jugador2.nombre} sus pokebola contiene a Squirtle!` )
  } else if(jugador2.tupokebola1 == "4") {
    jugador2.tupokebola1 = bulbasaur
    alert(`Jugador ${jugador2.nombre} sus pokebola contiene a Bulbasaur!` )
  } else { alert("Esta pokebola no existe!")
  jugador2.tupokebola1 = prompt(`${jugador2.nombre} 2 Elija sus Pokebolas: 1 | 2 | 3 | 4`)
  j1pokebolas1()
  }
}

function j2pokebolas2() {
  if (jugador2.tupokebola2 == "1") {
    jugador2.tupokebola2 = pikachu
    alert(`Jugador ${jugador2.nombre} su pokebola contiene un Pikachu!` )
  } else if(jugador2.tupokebola2 == "2") {
    jugador2.tupokebola2 = charmander
    alert(`Jugador ${jugador2.nombre} su pokebola contiene un Charmander!` )
  } else if(jugador2.tupokebola2 == "3") {
    jugador2.tupokebola2 = squirtle
    alert(`Jugador ${jugador2.nombre} sus pokebola contiene a Squirtle!` )
  } else if(jugador2.tupokebola2 == "4") {
    jugador2.tupokebola2 = bulbasaur
    alert(`Jugador ${jugador2.nombre} sus pokebola contiene a Bulbasaur!` )
  } else { alert("Esta pokebola no existe!")
  jugador2.tupokebola2 = prompt(`${jugador2.nombre} 2 Elija sus Pokebolas: 1 | 2 | 3 | 4`)
  j1pokebolas1()
  }
}

//comienza el juego

alert("Bienvenidos a su primer batalla Pokemon");

//DEFINIR SETTINGS DE ENTRENADORES

jugador1.nombre = prompt("Ingrese el nombre del primer entrenador")
jugador2.nombre = prompt("Ingrese el nombre del segundo entrenador")

// elegir compañeros

jugador1.tupokebola1 = prompt(`${jugador1.nombre} Elija su primer Pokebola: 1 | 2 | 3 | 4`)
j1pokebolas1()
jugador1.tupokebola2 = prompt(`${jugador1.nombre} Elija su segunda Pokebola: 1 | 2 | 3 | 4`)
j1pokebolas2()
jugador2.tupokebola1 = prompt(`${jugador2.nombre} Elija su primer Pokebola: 1 | 2 | 3 | 4`)
j2pokebolas1()
jugador2.tupokebola2 = prompt(`${jugador2.nombre} Elija su segunda Pokebola: 1 | 2 | 3 | 4`)
j2pokebolas2()


const jugador1pokebolas = []
jugador1pokebolas.push(jugador1.tupokebola1, jugador1.tupokebola2)
const jugador2pokebolas = []
jugador2pokebolas.push(jugador2.tupokebola1, jugador2.tupokebola2)

let jugador2random = jugador2pokebolas[Math.floor(Math.random()*jugador2pokebolas.length)]
let jugador1random = jugador1pokebolas[Math.floor(Math.random()*jugador1pokebolas.length)]

alert(`${jugador2.nombre} arroja una pokebola y sale: ${jugador2random.nombre}! con ${jugador2random.vida} de vida`)
alert(`${jugador1.nombre} arroja una pokebola y sale: ${jugador1random.nombre}! con ${jugador1random.vida} de vida`)




// batalla

// function batalla() {
//   jugador2.tupokebola1.vida - jugador1.tupokebola1.ataque1 
//   return alert(jugador2.tupokebola1.vida)
// }

// batalla()