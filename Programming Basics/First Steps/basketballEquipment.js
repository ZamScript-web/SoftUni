function basketballEquipment(taxForTraining){
    let shoes = taxForTraining * 0.60;
    let gear = shoes * 0.80;
    let ball = gear * 1 / 4;
    let accessories = ball * 1 / 5;

    let finalPrice = taxForTraining + shoes + gear + ball + accessories;

    console.log(finalPrice);
}

basketballEquipment(365);