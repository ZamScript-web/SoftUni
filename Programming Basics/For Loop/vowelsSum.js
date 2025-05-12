function vowelsSum(text){
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let chars = text[i];
        if (chars === "a") {
            sum += 1;
        } else if (chars === "e") {
            sum += 2;
        } else if (chars === "i") {
            sum += 3;
        } else if (chars === "o") {
            sum += 4;
        } else if (chars === "u") {
            sum += 5;
        }
    }

    console.log(sum);
}

vowelsSum("beer");