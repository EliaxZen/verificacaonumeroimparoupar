const numero = 11;

//Para um número ser par o resto da divisão deve ser igual a zero, caso contrário ele é impar
const numeroPar = (numero % 2) === 0;

if(numeroPar) {
  console.log("É par")
} else {
  console.log("É impar")
}