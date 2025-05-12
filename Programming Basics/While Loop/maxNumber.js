function maxNumber(input){
    let maxNumber = Number.NEGATIVE_INFINITY;

    let i = 0;

    while (input[i] !== "Stop") {
        let number = parseFloat(input[i]);

        if (number > maxNumber){
            maxNumber = number;
        }

        i++;
    }

    console.log(maxNumber);
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"]);