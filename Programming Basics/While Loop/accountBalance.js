function accountBalance(input){
    let totalAmount = 0;
    let i = 0;
    
    while (i < input.length) {
        let amount = parseFloat(input[i]);

        if (input[i] === "NoMoreMoney") {
            break;
        }

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        totalAmount += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);

        i++;
    }

    console.log(`Total: ${totalAmount.toFixed(2)}`);
}

accountBalance(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"]);