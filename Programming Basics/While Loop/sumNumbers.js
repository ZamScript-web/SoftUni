function sumNumbers(input){
    let target = Number(input[0]);
    let sum = 0;
    let i = 1;

    while (sum < target) {
        let currentNumber = Number(input[i]);
        sum += currentNumber;
        i++;
    }

    console.log(sum);
}

sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"]);