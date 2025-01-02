var numero=10

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
};
