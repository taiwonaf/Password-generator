let genOne = document.getElementById("gen-1");
let genTwo = document.getElementById("gen-2");
let genThree = document.getElementById("gen-3");
let genFour = document.getElementById("gen-4");
let genBtn = document.getElementById("gen-btn");
// let pass = document.querySelector("#num").value;
let passLength = 12;

genBtn.onclick = () => {
    console.log(pass);
}

let generatedPassword = " ";

genBtn.addEventListener('click', renderPassword);
let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let characters = ['~', ':', "'", '+', '[', '\\', '@', '^', '{', '%', '(', '-', '"', '*', '|', ',', '&', '<', '`', '}', '.', '_', '=', ']', '!', '>', ';', '?', '#', '$', ')', '/']

let passRandom = [alpha, digits, characters]

function randomNumber(randomGen) {
    random = Math.floor(Math.random() * randomGen.length);
    return random;
}

function generatePassword() {
    for (let i = 0; i < passLength; i++) {
        let randomSelected = passRandom[randomNumber(passRandom)];
        let selectedItem = randomSelected[randomNumber(randomSelected)];
        generatedPassword += selectedItem;
    }
    return generatedPassword
}

function renderPassword() {
    genOne.value = generatePassword()
    generatedPassword = ""
    genTwo.value = generatePassword()
    generatedPassword = ""
    genThree.value = generatePassword()
    generatedPassword = ""
    genFour.value = generatePassword()
    generatedPassword = ""
}