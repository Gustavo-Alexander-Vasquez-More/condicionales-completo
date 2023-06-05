
let nombre=prompt("Ingrese su nombre ó nombres: si tiene más de uno, tal y como figura en su DNI");
let apellido=prompt("Ingrese su apellido ó apellidos: si tiene mas de uno, tal y como figura en su DNI");
let dni=Number(prompt("Ingrese su numero de DNI:"));
let edad=Number(prompt("Ingrese su edad:"));
let nacimiento=Number(prompt("Ingrese el año en que nació:"));
let corrección=prompt("Estos son los datos ingresados: "+"Nombre: "+nombre+"/ Apellido: "+ apellido+"/ Número de DNI: "+dni+"/ Edad: "+edad+"/ Año de nacimiento: "+nacimiento+" "+"Comentar: SI para confirmar y NO en caso de que los datos sean incorrectos.");
if(corrección==="si"){
let datosIngresados={
Nombre: nombre,
apellido: apellido,
DNI: dni,
Edad: edad,
AñoNacimiento: nacimiento,
}
console.table(datosIngresados)
alert("Registro exitoso!")
}
else{
alert("vuelva a intentarlo en 1 mes.")
}