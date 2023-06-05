let ingresarEdad= parseFloat(prompt("Ingresa tu edad"))
if(ingresarEdad>=0 && ingresarEdad<=12){
alert("Eres un infante")
}
if(ingresarEdad>=13 && ingresarEdad<=18){
alert("Eres un adolescente");
}
if(ingresarEdad>=19 && ingresarEdad<=45){
alert("Eres un mayor joven");
}
if(ingresarEdad>45 && ingresarEdad<=100){
alert("Eres un anciano")
}
else if(ingresarEdad>100){
alert("En realidad tiene esta edad?")
}