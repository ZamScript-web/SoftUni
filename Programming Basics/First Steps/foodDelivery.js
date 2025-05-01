function foodDelivery(chickenMenu, fishMenu, veganMenu){
    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veganPrice = veganMenu * 8.15;

    let menuPrice = chickenPrice + fishPrice + veganPrice;

    let desertPrice = menuPrice * 0.20;

    let totalPrice = menuPrice + desertPrice + 2.50;

    console.log(totalPrice);
}

foodDelivery(2, 4, 3);