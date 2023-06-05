// Establecer el número a adivinar en la variable numeroIncognita
let numeroIncognita=5;
let numeroIngresado=parseFloat(prompt("Ingrese un numero del 1 al 10"));
//intento1//
if(numeroIngresado===numeroIncognita){
alert("Has ganado, el numero es correcto");
}
else if(numeroIngresado>numeroIncognita){
alert("El numero ingresado es mayor. Te quedan 2 intentos")
}
else{
alert("El numero ingresado es menor.Te quedan 2 intentos")
}
//segundo intento//
numeroIngresado=parseFloat(prompt("Segundo intento. ingrese otro numero del 1 al 10"))
if(numeroIngresado===numeroIncognita){
alert("Has ganado, el numero es correcto");
}
else if(numeroIngresado>numeroIncognita){
    alert("El numero ingresado es mayor. Te queda 1 intento")
    }
    else{
    alert("El numero ingresado es menor.Te queda 1 intento")
    }

//tercer intento//
numeroIngresado=parseFloat(prompt("Ultimo intento. ingrese otro numero del 1 al 10"))
if(numeroIngresado===numeroIncognita){
    alert("Has ganado, el numero es correcto");
    }
else{
    alert("Numero incorrecto, no has acertado.")
}


