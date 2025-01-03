/*var numero=10

try {
    console.log(numero/numero)
    
    if(isNaN(numero))
        throw new Error("Este no es posible")
} catch (error) {
    console.log("El catch captura el error")
}

function suma(numero){
    return numero % numero
}
console.log(suma())

window.onload = function (){
    document.getElementById("todo").classList.add("loaded");
}; */

/*const nombre = prompt("Cual es tu nombre?")

function saludar(nombre) {
    console.log("Hola" + " " + nombre + " " + "Como estas?")
}
document.open()
document.write('<h1>hola ' + nombre + '</h1>')*/





//OPeradores aritmeticos
let a = 3
let b = 4
//console.log(a%b)

//Incrementar
console.log(++a);
console.log(a);

//Decremento
console.log(--a)
console.log(a)

//Shot Circuit
let nomte = 'iguana';
let usermname = nomte || "Anonimo";
console.log(usermname);

//Control de Flujo
//if, else, else if
let edad = 4

if (edad > 18) {
    console.log("Usuario Mayor de Edad");
} else if (edad > 13) {
    console.log("Usuario nesecita estar con sus padres");
} else {
    console.log("Usuario menor de edad");
}

//while

while (edad < 18) {
    if(edad % 2==0){
        console.log('Numero par', edad)
    }
    edad++;//comenta esta linea y podras ver un loop infinito
}

//do while
do {
    if(edad % 2==0){
        console.log('Numero par', edad)
    }
    edad++;
}  while (edad < 18)


//for 
for(let u = 20; u < 30;u++){
    if (u % 2 == 0){
        console.log('Numero par', u)
    }
}

//for of
let animales = ['Canchi', 'Dragon', 'Perrito']
for (let animal of animales){
    console.log(animal)
}
//for on
let user = {
    id:1,
    name:'Dammian',
    age:25,
}
for (let prop in user) {
    console.log(prop,user[prop]);
}

//continue and break

let cd = 0;
while (cd < 6){
    cd++;
    if (cd === 3){
        continue
    }
    if (cd ===4){
        break
    }
    console.log(cd)
    
}

//swicth
let accion= 'listar';

switch (accion){
    case 'listar':
        console.log('Accion de listar')
        break;
    case 'Guardar':
        console.log('Acion de guardar')

    default:
        console.log('Accion no reconocida')
}

//ejercicios

//ejercicio 1
let f = 30
let c = 20
function cualEsElMayor(f,c){
    if (c>f){
        console.log("El numer mayor es:" + c)
    } else if (f>c);{
        console.log("El numero mayor es:"+ f)
    }
} 

console.log(cualEsElMayor(f,c))

//ejercicio 2
