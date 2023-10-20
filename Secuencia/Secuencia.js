function imprimirDescendente(n) {
    if(n >= 0) {
        console.log(n);
        imprimirDescendente(n - 1);
    }
}

imprimirDescendente(12);
