function encontrarIndiceDelMenorElemento(arr) {
    if (arr.length === 0) {
        return null;
    }

    let menorElemento = arr[0];
    let indiceDelMenor = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menorElemento) {
            menorElemento = arr[i];
            indiceDelMenor = i;
        }
    }

    return indiceDelMenor;
}

// Ejemplo de uso:
const arreglo = [5, 2, 9, 1, 7];
const indiceMenor = encontrarIndiceDelMenorElemento(arreglo);
console.log("El menor elemento se encuentra en el índice:", indiceMenor);
