let numero1=Number(prompt("Ingrese el primer numero"));
let numero2=Number(prompt("Ingrese el segundo numero"));
let operacion=prompt("Ingresa la operacion que deseas realizar(suma, resta, multiplicación o división");

switch(operacion){
case "suma":
        alert(numero1 + numero2)
        break;
case "resta":
        alert(numero1-numero2)
        break;
case "multiplicación":
        alert(numero1 * numero2)
        break;
case "división":
if(numero2!==0){
        alert(numero1 / numero2)
        break}
else{
    alert("ERROR, no es posible dividir entre 0")
}
}
