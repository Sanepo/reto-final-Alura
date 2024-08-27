/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/*Requisitos 
Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/ 

let letras = 0;
let textoIngresado = "";
let infoCopiar = document.getElementById("infoCopiar");
let acentosInfo = document.getElementById("acentosInfo");
let acentosDectector = /^[\u0061-\u007A\u0020]+$/;


function encriptarTexto() {
    let textoIngresado = document.getElementById('entradaTexto').value.toLowerCase();
    if(acentosDectector.test(textoIngresado) == false){
        acentosInfo.innerHTML = "Por favor ingresar texto sin acentos :)"
    }else{
        textoIngresado = textoIngresado.replaceAll("e", "enter");
        textoIngresado = textoIngresado.replaceAll("i", "imes");
        textoIngresado = textoIngresado.replaceAll("a", "ai");
        textoIngresado = textoIngresado.replaceAll("o", "ober");
        textoIngresado = textoIngresado.replaceAll("u", "ufat");

        acentosInfo.innerHTML = "Solo letras minúsculas y sin acentos";
        infoCopiar.innerHTML = "";
        document.getElementById('resultadoTexto').value = textoIngresado;
    }
}

function desencriptarTexto() {
    let textoIngresado = document.getElementById('entradaTexto').value.toLowerCase()
    if(acentosDectector.test(textoIngresado) == false){
        acentosInfo.innerHTML = "Por favor ingresar texto sin acentos :)"
    }else{
        textoIngresado = textoIngresado.replaceAll("enter", "e");
        textoIngresado = textoIngresado.replaceAll("imes", "i");
        textoIngresado = textoIngresado.replaceAll("ai", "a");
        textoIngresado = textoIngresado.replaceAll("ober", "o");
        textoIngresado = textoIngresado.replaceAll("ufat", "u");

        acentosInfo.innerHTML = "Solo letras minúsculas y sin acentos";
        infoCopiar.innerHTML = "";
        document.getElementById('resultadoTexto').value = textoIngresado;
    }    
}

function copiarTexto(){   
    let textoCopiado = document.getElementById("resultadoTexto").value;
    if(textoCopiado == ""){
        infoCopiar.innerHTML = "No se encontró ningún texto para copiar.";
    }
    else{
        navigator.clipboard.writeText(textoCopiado);
        infoCopiar.innerHTML = "¡Texto Copiado!";
    }
}

 
