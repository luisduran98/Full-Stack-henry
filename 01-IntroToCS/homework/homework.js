'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var suma = [];
  var cambio = num.toString()
  var resultado = 0
  for (var i = cambio.length -1; i >= 0; i--){
  suma.push(cambio[i]);
  }
 for (var j = 0; j < suma.length; j++) {
  resultado = resultado + suma[j] * Math.pow(2,j);
 }

 return resultado;

  // var suma = 0
  // var binario = num.toString()
  // var nuevo = []
  // for (var i = binario.length - 1 ; i >= 0 ; i--) {
  //  nuevo.push(binario[i])
  // }
  // for (var i = 0; i < nuevo.length; i++) {
  //   suma = suma + nuevo[i] * Math.pow(2,i);
  // }
  // return suma;

}

function DecimalABinario(num) {
  // tu codigo aca

var suma = "";
for(var i = 0; i < num; i++){
 
 suma =  num % 2 + suma;
 num = Math.floor(num / 2);
}

return 1 + suma;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}