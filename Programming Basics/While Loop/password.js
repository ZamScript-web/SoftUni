function password(input){
    let username = input[0];
    let password = input[2];

    let i = 2;

    let currentPassword = input[i];

    while (currentPassword !== password) {
        index++;
        currentPassword = input[i];
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);