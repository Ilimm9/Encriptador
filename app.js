// funciones para obtener y devolver texto
function ObtenerTxt (id){
     const texto = document.getElementById(id).value;
    return texto ? texto : "";  // Asegurar que devuelva una cadena vacía si es indefinido o nulo
 }

 // funciones para encriptar y desencriptar
 //vincular con los campos de texto del html

 function BtnEncriptar() {
    const texto = ObtenerTxt('mensaje');
    if (texto) {
        let textoEncriptado = texto.replaceAll(/a|e|i|o|u/g, function(match) {
            switch (match) {
                case 'a': return 'ai';
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'o': return 'ober';
                case 'u': return 'ufat';
            }
      });
        return document.getElementById('resultado').value = textoEncriptado;
    } else {
        alert("Por favor ingrese un texto para encriptar.");
    }
}

function BtnDesencriptar() {
    const texto = ObtenerTxt('mensaje'); 
    if (texto) { let textoDescifrado = texto.replaceAll(/ai|enter|imes|ober|ufat/g, function(match) {
        switch (match) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
        }
  }); return document.getElementById('resultado').value = textoDescifrado;
    } else {
        alert("Por favor ingrese un texto para desencriptar.");
    }
}

// mensaje de validacion
// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }



// boton de copiar, seleccionar todo lo del textarea
function BtnCopiar(){
ObtenerTxt('resultado');
navigator.clipboard.writeText(texto)
.then(() => {
            alert("Texto copiado al portapapeles");
   })
 .catch(err => {
   console.error('Error al copiar el texto: ', err);
    });
 }