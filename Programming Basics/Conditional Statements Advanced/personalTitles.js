function personalTitles(age, gender){
    switch (gender) {
        case "m":
            if (age >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            }
            break;
        case "f":
            if (age >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            }
            break;
    }
}

personalTitles(17, "m");