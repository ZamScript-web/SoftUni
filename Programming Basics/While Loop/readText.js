function readText(arr){
    let i = 0;

    while (arr[i] !== "Stop") {
        console.log(arr[i]);
        i++;
    }
}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);