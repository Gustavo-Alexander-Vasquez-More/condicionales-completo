let jugador1=prompt("JUGADOR 1: Ingresa PIEDRA, PAPEL O TIJERA");
let jugador2=prompt("JUGADOR 2: Ingresa PIEDRA, PAPEL O TIJERA");
//CASO 1//
if(jugador1==="piedra" && jugador2==="piedra" || jugador1==="papel" && jugador2==="papel" || jugador1==="tijera" && jugador2==="tijera"){
alert("Empate!! Ambos jugadores hicieron la misma jugada!")
}
if(jugador1==="piedra" && jugador2==="tijera" || jugador1==="papel"&& jugador2==="piedra" || jugador1==="tijera"&&jugador2==="papel"){
alert("El jugador 1 ha ganado la partida!")
}
else if(jugador2==="piedra" && jugador1==="tijera" || jugador2==="papel"&& jugador1==="piedra" || jugador2==="tijera"&&jugador1==="papel"){
alert("El jugador 2 ha ganado la partida!")
}
else{
    if(jugador1!=="piedra" ||jugador1!=="papel"||jugador1!=="tijera"||jugador2!=="piedra"||jugador2!=="papel"||jugador2!=="tijera"){
alert("Uno de los jugadores ha hecho trampa. Solo se puede ingresar: piedra, papel o tijera!")
}
}

