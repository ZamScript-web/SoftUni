function shopping(budget, GPU, CPU, RAM){
    let gpuPrice = GPU * 250;
    let cpuPrice = CPU * gpuPrice * 0.35;
    let ramPrice = RAM * gpuPrice * 0.10;

    let totalPrice = gpuPrice + cpuPrice + ramPrice;

    if (GPU > CPU) {
        totalPrice *= 0.85;
    }

    let difference = Math.abs(budget - totalPrice).toFixed(2);

    if (totalPrice <= budget) {
        console.log(`You have ${difference} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference} leva more!`);
    }
}

shopping(920.45, 3, 1, 1);