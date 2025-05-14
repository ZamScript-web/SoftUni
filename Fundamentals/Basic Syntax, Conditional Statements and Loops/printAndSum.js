function printAndSum(start, end){
    let sum = 0;
    let whitespace = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        whitespace += i + " ";
    }
    console.log(whitespace);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);