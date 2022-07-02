let a;
let b;
let c;
let d;
window.alert("Ingrese sólo valores numéricos");
window.alert("Ingrese valores enteros y positivos");
a=prompt('Ingrese el primer número:','');
b=prompt('Ingrese el segundo número:','');
c=prompt('Ingrese el tercer número:','');
d=prompt('Ingrese el cuarto número:',''); 

if (a==b || a==c || a==d || b==c || c==d){
    window.alert("Hay datos repetidos"+"\n");
    console.log("esto es una prueba de consola")
}
else{
    window.alert("No hay datos repetidos"+"\n");
} 

window.alert("El mayor número es: "+ Math.max(a,b,c,d));
window.alert("El menor número es: "+ Math.min(a,b,c,d));