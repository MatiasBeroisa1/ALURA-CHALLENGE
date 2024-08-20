//en java codeo funciones, variables, inputs, outputs, funcionalidad en general
//java y javascrit son dos cosas totalmente diferentes.
//instancia es un objeto, un objeto es una instancia de una clase.
//que propiedades tiene, clase, innerhtml-que es para modificar lo que dice el boton
//como en la linea 11 conseguir valor con el id pero en vez de const, utilizar let, porque el const es para declarar una constante mientas que la variable varia, modificar el valor y despues variarlo
//.innerhtml 
//para luego darle mas color agregarle la clase hidden y el display none, para ocultar el elemento por defecto
//podemos hacer que el boton se resetee luego de encriptar
//

const button = document.getElementById("encrypt-button");

button.addEventListener("click", () => {
    let text = document.getElementById("text-input").value;
    const limiter = text.length;
    for (let i = 0; i < limiter; i++) { 
        console.log(text);
        console.log(i)
        if (text[i] == "a") {
            text = text.replace(text[i], "ai");
            
        }
        if (text[i] == "e") {
            text = text.replace(text[i], "enter");
            
        }
        if (text[i] == "i") {
            text = text.replace(text[i], "imes");
            
        }
        if (text[i] == "o") {
            text = text.replace(text[i], "ober");
            
        }
        if (text[i] == "u") {
            text = text.replace(text[i], "ufat");
            
        }
    }
    document.getElementById("text-input").value = text;
    alert("texto encriptado");

})




