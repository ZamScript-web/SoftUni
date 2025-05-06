function worldSwimmingRecord(record, meters, time){
    let needToSwim = meters * time;
    let addedTime = Math.floor(meters / 15) * 12.5;

    let totalTime = needToSwim + addedTime;

    if (totalTime >= record) {
        let timeNeeded = totalTime - record;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(55555.67, 3017, 5.03);