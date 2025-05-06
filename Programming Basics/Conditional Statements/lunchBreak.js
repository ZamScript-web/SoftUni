function lunchBreak(seriesName, duration, breakTime){
    let timeForLunch = breakTime / 8;
    let timeForRelax = breakTime / 4;

    let timeRemaining = breakTime - timeForLunch - timeForRelax;

    if (timeRemaining >= duration) {
        timeRemaining -= duration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeRemaining)} minutes free time.`);
    } else {
        duration -= timeRemaining;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(duration)} more minutes.`);
    }
}

lunchBreak("Teen Wolf", 48, 60);