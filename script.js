const botonEncriptado = document.querySelector('#botonEncriptado');
const botonDesencriptado = document.querySelector('#botonDesencriptado');
const botoncopiar = document.querySelector('#botonCopiar');


botonEncriptado.addEventListener('click', encriptar); 
botonDesencriptado.addEventListener('click', desencriptar);
botoncopiar.addEventListener('click', copiar);

const seccion1 = document.querySelector("base1");

function validando_mensaje(){
    var validacion = document.getElementById("textoIngresado").value
    let letraspermitidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = "";
    for (let letra of validacion){
        if(!letraspermitidas.includes(letra)){
        mensajeError += "recuerde que solo son permitidas letras minusculas y sin acentos, " + letra + "no es valida";
    }
        if (mensajeError.length === 0){
            return true;
        }
            return false;
    }
}


function encriptar(){   
    if (!validando_mensaje()) return;
    
var frase = document.getElementById("textoIngresado").value.toLowerCase();

var textoIngresado = frase.replace(/e/img, "enter");
var textoIngresado = textoIngresado.replace(/i/img, "imes");
var textoIngresado = textoIngresado.replace(/a/img, "ai");
var textoIngresado = textoIngresado.replace(/o/img, "ober");
var textoIngresado = textoIngresado.replace(/u/img, "ufat");

document.getElementById("lupa").style.display = "none";
document.getElementById("textoEncriptado").innerHTML = textoIngresado;
}


function desencriptar(){
    if (!validando_mensaje()) return;
var frase = document.getElementById("textoIngresado").value.toLowerCase();

var textoIngresado = frase.replace(/enter/img, "e");
var textoIngresado = textoIngresado.replace(/imes/img, "i");
var textoIngresado = textoIngresado.replace(/ai/img, "a");
var textoIngresado = textoIngresado.replace(/ober/img, "o");
var textoIngresado = textoIngresado.replace(/ufat/img, "u");
document.getElementById("textoEncriptado").innerHTML = textoIngresado;

}
function copiar(){
var contenido = document.querySelector("#textoEncriptado");
contenido.select();
document.execCommand("copy"); 
alert("Se copio el mensaje.");
}

