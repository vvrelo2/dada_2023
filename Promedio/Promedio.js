function calcularPromedio(arr) {
    // Verificar si el arreglo está vacío para evitar la división por cero
    if (arr.length === 0) {
        return 0;
    }

    // Calcular la suma de los elementos en el arreglo
    const suma = arr.reduce((total, elemento) => total + elemento, 0);

    // Calcular el promedio
    const promedio = suma / arr.length;

    return promedio;
}

// Ejemplo de uso:
const arreglo = [1, 2, 3, 4, 5];
const promedio = calcularPromedio(arreglo);
console.log("El promedio es:", promedio);