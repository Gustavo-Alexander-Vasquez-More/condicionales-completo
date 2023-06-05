let persona1= {
nombre: "gustavo",
edad: 24,
altura: 1.75,
}
let persona2= {
nombre: "alex",
edad: 25,
altura: 1.80,
}

if(persona1.altura > persona2.altura){
document.write("Gustavo es mas alto y ");
}
if(persona2.altura > persona1.altura){
document.write("Alex es mas alto y ");
}
if(persona1.edad > persona2.edad){
document.write("Gustavo es mayor");
}
else if(persona2.edad > persona1.edad){
document.write("Alex es mayor");
}