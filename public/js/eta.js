var numero = 10

try {
    console.log(numero / numero)

    if (isNaN(numero))
        throw new Error("Este no es posible")
} catch (error) {
    console.log("El catch captura el error")
}
/*
function suma(numero){
    return numero % numero
}
console.log(suma())

window.onload = function (){
    document.getElementById("todo").classList.add("loaded");
}; 

const nombre = prompt("Cual es tu nombre?")

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
    if (edad % 2 == 0) {
        console.log('Numero par', edad)
    }
    edad++;//comenta esta linea y podras ver un loop infinito
}

//do while
do {
    if (edad % 2 == 0) {
        console.log('Numero par', edad)
    }
    edad++;
} while (edad < 18)


//for 
for (let u = 20; u < 30; u++) {
    if (u % 2 == 0) {
        console.log('Numero par', u)
    }
}

//for of
let animales = ['Canchi', 'Dragon', 'Perrito']
for (let animal of animales) {
    console.log(animal)
}
//for on
let user = {
    id: 1,
    name: 'Dammian',
    age: 25,
}
for (let prop in user) {
    console.log(prop, user[prop]);
}

//continue and break

let cd = 0;
while (cd < 6) {
    cd++;
    if (cd === 3) {
        continue
    }
    if (cd === 4) {
        break
    }
    console.log(cd)

}

//swicth
let accion = 'listar';

switch (accion) {
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
function cualEsElMayor(f, c) {
    if (c > f) {
        console.log("El numer mayor es:" + c)
    } else if (f > c); {
        console.log("El numero mayor es:" + f)
    }
}

console.log(cualEsElMayor(f, c))

//ejercicio 2
function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        console.log("La resolucion es de 8K")
    } else if (ancho >= 3840 && alto >= 2160) {
        console.log("La resolucion es de 4k")
    } else if (ancho >= 2560 && alto >= 1440) {
        console.log("La resolucion es WQHD")
    } else if (ancho >= 1920 && alto >= 1080) {
        console.log("La resolucion es FHD")
    } else if (ancho >= 1280 && alto >= 720) {
        console.log("La resolucion es HD")
    }
}

console.log(nombreResolucion(1366, 768))

//ejercicio 3
let fals = ["arroz", "mora", "patilla", "eta"]
function getbyIdx(arr) {
    if (arr < 0) {
        return "Elmento no existe"
    } else if (arr == 0) {
        let idx = fals[0]
        console.log(idx)
    } else if (arr == 1) {
        let idx = fals[1]
        console.log(idx)
    } else if (arr == 2) {
        let idx = fals[2]
        console.log(idx)
    } else if (arr == 3) {
        let idx = fals[3]
        console.log(idx)
    } else if (arr >= 4) {
        return "Este elmento no existe"
    }
}
console.log(getbyIdx(1))



let fr = 0
while (fr <= 10) {
    if (fr % 2 !== 0) {
        console.log(fr)
        fr++
        continue
    } else {
        fr++
    }
} 

