function aquarium(lenght, width, height, percent){
    let area = lenght * width * height;
    let liters = area / 1000;
    let areaTaken = percent / 100;

    let litersNeeded = liters * (1 - areaTaken);
    
    console.log(litersNeeded);
}

aquarium(85, 75, 47, 17);