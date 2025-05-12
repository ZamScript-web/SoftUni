function graduation(input){
    let studentName = input[0];
    let grades = input.slice(1);
    let failedSubjects = 0;
    let totalGrades = 0;
    let currentGrade = 1;
    let i = 0;

    while (i < grades.length) {
        let grade = parseFloat(grades[i]);
        totalGrades += grade;

        if (grade < 4) {
            failedSubjects++;
            if (failedSubjects > 1){
                console.log(`${studentName} has been excluded at ${currentGrade} grade`);
                return;
            }
        } else {
            currentGrade++;
        }

        i++;
    }

    let averageGrade = totalGrades / grades.length;
    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);