function repaiting(nylon, paint, thinner, hours){
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + paint * 0.10) * 14.50;
    let thinnerPrice = thinner * 5;

    let materialPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
    let workersPrice = (materialPrice * 0.30) * hours;

    let finalPrice = materialPrice + workersPrice;

    console.log(finalPrice);
}

repaiting(10, 11, 4, 8);