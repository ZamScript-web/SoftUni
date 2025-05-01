function depositCalculator(depositSum, time, percentage){
    let percentageSum = depositSum * percentage / 100;
    let interest = percentageSum / 12;
    let finalPrice = depositSum + time * interest;

    console.log(finalPrice);
}

depositCalculator(200, 3, 5.7);