const textArea = document.querySelector(".areatexto");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".botonCopiar");
botonCopiar.style.display="none";

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//console.table(matrizCodigo);
function validarTexto(){

    let textoIngresado=document.querySelector(".areatexto").value;
    let validador=textoIngresado.match(/^[a-z]*$/);
    if(!validador||validador===0){
        alert("Solo permitido minúsculas sin acentos")
        location.reload();
        return true;
    }
}

function btnEncrip(){
    if(!validarTexto()){
    const textoEncriptado = encriptar(textArea.value);    
    mensaje.value =textoEncriptado;
    textArea.value = " "; 
    mensaje.style.backgroundImage="none"; 
    botonCopiar.style.display="block"; 
    }
}

function encriptar(stringEncriptada){
let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length ;i++){

    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }

}
return stringEncriptada;
}

function btnDesencrip(){
    textoEncriptado=desencriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value = " "; 
}

function desencriptar(stringDesencriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    stringDesencriptado=stringDesencriptado.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){

        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
}

return stringDesencriptado;

}

function copiar(){
mensaje.select();
navigator.clipboard.writeText(mensaje.value)
mensaje.value="";
alert("Texto copiado");

}
