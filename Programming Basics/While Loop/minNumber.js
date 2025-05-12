function minNumber(input){
    let minNumber = Number.POSITIVE_INFINITY;

    let i = 0;

    while (input[i] !== "Stop") {
        let number = parseFloat(input[i]);

        if (number < minNumber){
            minNumber = number;
        }

        i++;
    }

    console.log(minNumber);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);