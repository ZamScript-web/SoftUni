function godzillaVsKong(movieBudget, actors, gear){
    let decor = movieBudget * 0.10;
    let gearPrice = actors * gear;

    if (actors > 150) {
        gearPrice *= 0.90;
    }

    let totalPrice = decor + gearPrice;

    if (movieBudget >= totalPrice) {
        let finalPrice = movieBudget - totalPrice;
        console.log(`Action!\rWingard starts filming with ${finalPrice.toFixed(2)} leva left.`);
    } else {
        let finalPrice = totalPrice - movieBudget;
        console.log(`Not enough money!\rWingard needs ${finalPrice.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(9587.88, 222, 55.68);