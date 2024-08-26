
// funciones para encriptar y desencriptar
function Encriptar(texto){
    let textoEncriptado = texto.replace(/a|e|i|o|u/g, function(match) {
      if (match === 'a') {
          return 'ai';
      } else if (match === 'e') {
          return 'enter';
      }else if (match === 'i') {
          return 'imes';
      }else if (match === 'o') {
          return 'ober';
      }else if (match === 'u') {
          return 'ufat';
      }
  }); return textoEncriptado;
  }

    
  function Desencriptar(texto){
    let textoDescifrado = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
      if (match === 'ai') {
          return 'a';
      } else if (match === 'enter') {
          return 'e';
      }else if (match === 'imes') {
          return 'i';
      }else if (match === 'ober') {
          return 'o';
      }else if (match === 'ufat') {
          return 'u';
      }
  }); return textoDescifrado;
  }