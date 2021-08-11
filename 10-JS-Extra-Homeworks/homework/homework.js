// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arrMaster = []
  for(let prop in objeto){
    let arrInside = []
    arrInside.push(prop,objeto[prop])
    arrMaster.push(arrInside)
  }
  return arrMaster
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arrString = string.split('')
  let obj = {}
  for(i=0;i<arrString.length;i++){ // a 
    if(obj[arrString[i]]== undefined){
      obj[arrString[i]]= 1 
    } else {
      obj[arrString[i]]= obj[arrString[i]]+1
    }
  }
  return obj

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minus = [], mayus=[]
  let string = s.split('')
  for(i=0;i<string.length;i++){
    if(string[i] == string[i].toUpperCase()){
      mayus.push(string[i])
    } else if (string[i] != string[i].toUpperCase()){
      minus.push(string[i])
    }
  }
  return mayus.concat(minus).join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(' ')
  for(i=0;i<frase.length;i++){
    frase[i] = frase[i].split('').reverse().join('')    
  }
  return frase.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let n = numero.toString().split('').reverse().join('')

  if(n == numero.toString()){
    return 'Es capicua'
  } else{
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.split('')
  let str = ''
  cadena.map((x)=> {
    if(x == 'a' || x == 'b' || x == 'c'){
      str = str
    } else { 
      str = str + x
    }
   
})
return str
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let nuevo = []
  let cont = 1
  while(arr.length != nuevo.length){
  for(i=0;i<arr.length;i++){
    if(arr[i].length == cont){
      nuevo.push(arr[i])
    }
    else{

    }
  }
  cont++//cierre for 
}//cierre while
return nuevo
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let union = []
  let idx = 0
  for(i=0;i<arreglo2.length;i++){
  for(r=0;r<arreglo1.length;r++){
    if(arreglo2[i]===arreglo1[r]){
      union.push(arreglo1[r])
    } else{
    }
    }// 2 for
  } // 1 for
  return union
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

