var numero=10

try {
    console.log(numero/numero)
    
    if(isNaN(numero))
        throw new Error("Este no es posible")
} catch (error) {
    console.log("El catch captura el error")
}


window.onload = function (){
    document.getElementById("seccion").classList.add("loaded");
};
