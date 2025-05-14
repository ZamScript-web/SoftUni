function vacation(groupOfPeople, typeOfGroup, dayOfWeek){
    let discount = 0.0;
    let price = 0.0

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                price = 8.45 * groupOfPeople;
                if (groupOfPeople >= 30) {
                    discount = price * 0.15;
                    price -= discount
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            } else if (dayOfWeek === "Saturday") {
                price = 9.80 * groupOfPeople;
                if (groupOfPeople >= 30) {
                    discount = price * 0.15;
                    price -= discount
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            } else if (dayOfWeek === "Sunday") {
                price = 10.46 * groupOfPeople;
                if (groupOfPeople >= 30) {
                    discount = price * 0.15;
                    price -= discount
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
            break;
        case "Business":
            if (dayOfWeek === "Friday") {
                price = 10.90 * groupOfPeople;
                if (groupOfPeople >= 100) {
                    let totalPrice = 10.90 * (groupOfPeople - 10)
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            } else if (dayOfWeek === "Saturday") {
                price = 15.60 * groupOfPeople;
                if (groupOfPeople >= 100) {
                    let totalPrice = 10.90 * (groupOfPeople - 10)
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            } else if (dayOfWeek === "Sunday") {
                price = 16 * groupOfPeople;
                if (groupOfPeople >= 100) {
                    let totalPrice = 10.90 * (groupOfPeople - 10)
                    console.log(`Total price: ${totalPrice.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                price = 15 * groupOfPeople;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    discount = price * 0.05;
                    price -= discount
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            } else if (dayOfWeek === "Saturday") {
                price = 20 * groupOfPeople;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    discount = price * 0.05;
                    price -= discount
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            } else if (dayOfWeek === "Sunday") {
                price = 22.50 * groupOfPeople;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    discount = price * 0.05;
                    price -= discount
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
            break;
    }
}

vacation(30, "Students", "Sunday");