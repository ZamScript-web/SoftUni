function yardGreening(meters){
    let greeningPrice = meters * 7.61;
    let discount = 0.18 * greeningPrice;
    let finalPrice = greeningPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);