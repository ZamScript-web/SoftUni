function areaOfFigures(figure, numA, numB){
    if (figure === "square") {
        let area = numA * numA;

        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let area = numA * numB;

        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let area = Math.PI * numA * numA;

        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let area = numA * numB / 2;

        console.log(area.toFixed(3));
    }
}

areaOfFigures("triangle", 4.5, 20);