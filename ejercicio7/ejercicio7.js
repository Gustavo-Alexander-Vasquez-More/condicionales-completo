let nombre=prompt("Ingrese su nombre");
let pase=prompt("Ingrese su tipo de pase: (VIP/NORMAL)");
if( nombre==="gustavo" && pase==="vip"){
document.write("Bienvenido, A disfrutar!")
}
else{
let entrada=prompt("Posee entrada?: SI/NO")
if(entrada==="si"){
let utilizar=prompt(("Deseas utilizar tu entrada?(SI/NO)"));
if(utilizar==="si"){
document.write("Bienvenido, a divertirse!")    
}
}
else if(entrada==="no"){
let comprar=prompt(("Deseas comprar una entrada?(SI/NO)"));
if(comprar==="si"){
let dinero=parseFloat(prompt(("Ingrese el importe(min 1000)")));
if(dinero>=1000){
document.write("Venta exitosa! Puede pasar a disfrutar!");
}
else{
document.write("No tienes dinero suficiente!");
}
}
else if(comprar==="no"){
document.write("Muchas gracias. Hasta luego!")
}
}    
}
