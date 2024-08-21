//en java codeo funciones, variables, inputs, outputs, funcionalidad en general
//java y javascrit son dos cosas totalmente diferentes.
//instancia es un objeto, un objeto es una instancia de una clase.
//que propiedades tiene, clase, innerhtml-que es para modificar lo que dice el boton
//como en la linea 11 conseguir valor con el id pero en vez de const, utilizar let, porque el const es para declarar una constante mientas que la variable varia, modificar el valor y despues variarlo
//.innerhtml 
//para luego darle mas color agregarle la clase hidden y el display none, para ocultar el elemento por defecto
//podemos hacer que el boton se resetee luego de encriptar
//

const button = document.getElementById("btn-encriptar");
const romper = document.getElementById("btn-desencriptar");

button.addEventListener("click", () => {
    let text = document.getElementById("texto").value;
    let resultado = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("mensaje").value = resultado;
    document.getElementById("mensaje").classList.remove("hidden");
    document.getElementById("mensaje1").classList.add("hidden");
    document.getElementById("mensaje2").classList.add("hidden");
    document.getElementById("mensaje3").classList.add("hidden");
})

romper.addEventListener("click", () => {
    let text = document.getElementById("texto").value;
    let resultado = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("mensaje").value = resultado;
    document.getElementById("mensaje").classList.remove("hidden");
    document.getElementById("mensaje1").classList.add("hidden");
    document.getElementById("mensaje2").classList.add("hidden");
    document.getElementById("mensaje3").classList.add("hidden");
})




