var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var number = document.querySelector("#randomNumber");
let activeRolling = false;

function generateRandom() {

    console.log(activeRolling)
    setRightOrder(num1, num2);
    if (activeRolling === false) {
        var randomNumber = randomNum(num1, num2);
        rollNumber(number.textContent, randomNumber);
    }


}
function randomNum(min, max) {
    var min = (parseInt(min.value) - 1);
    var max = (parseInt(max.value) + 1);
    var random = ((Math.floor(Math.random() * (max - min)) + min));
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
    if (activeRolling === false) {
        activeRolling = true;
        if (start < end) {
            var timer = setInterval(function () {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                number.textContent = start++;
            }, 100);
        }
        else if (start > end) {
            var timer = setInterval(function () {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                number.textContent = start--;
            }, 100);
        } else {
            number.textContent = start;
            activeRolling = false;
        }

    }
}