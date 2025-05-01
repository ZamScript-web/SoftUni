function suppliesForSchool(pens, markers, deskCleaner, discount){
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let deskCleanerPrice = deskCleaner * 1.20;

    let materialPrice = pensPrice + markersPrice + deskCleanerPrice;
    let finalPrice = materialPrice - (materialPrice * (discount / 100));

    console.log(finalPrice);
}

suppliesForSchool(2, 3, 4, 25);