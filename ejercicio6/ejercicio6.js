let nombre= prompt(("Ingresa tu nombre"));
let edad= parseFloat(prompt(("Ingresa tu edad")));
let altura=parseFloat(prompt(("Ingresa tu estatura en centimetros")));
let vision=parseFloat(prompt(("Ingresa el grado de visión del 1 al 10")));
if( edad>=18 && altura>150 && vision>=8 && vision<=10){
document.write("Estas capacitado para conducir!");
}
else{
    document.write("Lo sentimos, pero aún no estas capacitado para conducir");
}