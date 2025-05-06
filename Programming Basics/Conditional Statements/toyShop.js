function toyShop(holidayPrice, puzzles, talkingDolls, bears, minions, trucks){
    let toysPrice = (puzzles * 2.60) + (talkingDolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let toysCount = puzzles + talkingDolls + bears + minions + trucks;

    let discount = 0;

    if (toysCount >= 50) {
        discount += toysPrice * 0.25;
    }

    let totalPrice = toysPrice - discount;
    let rent = totalPrice * 0.10;
    let earnings = totalPrice - rent;

    if (earnings >= holidayPrice) {
        earnings -= holidayPrice;
        console.log(`Yes! ${earnings.toFixed(2)} lv left.`);
    } else {
        holidayPrice -= earnings;
        console.log(`Not enough money! ${holidayPrice.toFixed(2)} lv needed.`);
    }
}

toyShop(320, 8, 2, 5, 5, 1);