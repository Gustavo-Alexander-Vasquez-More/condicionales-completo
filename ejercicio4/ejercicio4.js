let num1=parseFloat(prompt(("Ingrese el primer numero")));
let num2=parseFloat(prompt(("Ingrese el segundo numero")));
let num3=parseFloat(prompt(("Ingrese el tercer numero")));

if(num1<num2 && num1<num3){
document.write("El primer numero es el mas chico");
}
if(num2<num1 && num2<num3){
document.write("El segundo numero es el mas chico");
}
else if(num3<num1 && num3<num2){
document.write("El tercer numero es el mas chico");
}

