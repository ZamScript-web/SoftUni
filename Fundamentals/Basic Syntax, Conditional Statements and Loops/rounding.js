function rounding(number, precision){
    if (precision > 15) {
        precision = 15;
    }

    let rounded = number.toFixed(precision);
    let result = parseFloat(rounded);

    console.log(result);
}

rounding(3.1415926535897932384626433832795, 2);