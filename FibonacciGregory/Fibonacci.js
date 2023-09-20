function generarFibonacci(N) {
    var fibonacci = [0, 1]; // Inicializamos la serie con los dos primeros términos

    for (var i = 2; i < N; i++) {
        var siguienteTermino = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(siguienteTermino);
    }

    return fibonacci;
}

var N = 10; // Cambia este valor para obtener más o menos términos
var resultado = generarFibonacci(N);

console.log("Los primeros " + N + " términos de la serie de Fibonacci son: " + resultado);
