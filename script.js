var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var number = document.querySelector("#randomNumber");
function generateRandom() {


    setRightOrder(num1, num2);
    var randomNumber = randomNum(num1, num2);
    rollNumber(number.textContent, randomNumber);


}
function randomNum(min, max) {
    var min = (parseInt(min.value) - 1);
    var max = (parseInt(max.value) + 1);
    var random = ((Math.floor(Math.random() * (max - min)) + min));
    console.log("random: " + random);
    return random;
}

function setRightOrder(num1, num2) {
    const value1 = num1.value;
    const value2 = num2.value;
    if (value1 > value2) {
        num1.value = value2;
        num2.value = value1;
    }
}

function rollNumber(number1, number2) {
    start = parseInt(number1)
    end = parseInt(number2);
    if (start < end) {
        while (start != (end + 1)) {
            number.textContent = start++
        }
    }
    else if (start > end) {
        while (start != (end - 1)) {
            number.textContent = start--
        }
    } else { number.textContent = start }

}
