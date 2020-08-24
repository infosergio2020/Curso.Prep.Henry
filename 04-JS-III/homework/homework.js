// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
}

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array.pop();
}

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}

function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (let i = 0; i < array.length; i++) {
        array[i]++;

    }
    return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    frase = "";
    for (let i = 0; i < palabras.length - 1; i++) {
        frase += palabras[i] + ' ';
    }
    frase += palabras[palabras.length - 1];
    return frase;
}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    return (array.indexOf(elemento) != -1);
}

function agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    result = 0;
    numeros.forEach(element => {
        result += element;
    });
    return result;
}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    result = 0;
    resultadosTest.forEach(element => {
        result += element;
    });
    return (result / resultadosTest.length);
}

function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    max = -999;
    numeros.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return max;
}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0
       // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    if (arguments.length != 0) {
        result = 1;
        for (let i = 0; i < arguments.length; i++) {
            result = result * arguments[i];
        }
        return result;
    } else {
        return 0;
    }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
};