function triangleOfNumbers(n){
    for (let i = 1; i <= n; i++) {
        console.log((i + ' ').repeat(i).trim());
    }
}

triangleOfNumbers(6);