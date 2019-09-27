console.log("Thank you for visiting my first solo Web Page")
console.log("Well, by solo I mean not watching a tutorial,");
console.log("but I clearly tried to copy google's random number generator online");

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var number = document.querySelector("#randomNumber");
let activeRolling = false;

function generateRandom() {
    setRightOrder(num1, num2);
    if (activeRolling === false) {
        var randomNumber = randomNum(num1, num2);
        rollNumber(number.textContent, randomNumber);
    }
}
function randomNum(min, max) {
    var min = (parseInt(min.value));
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
    var time = function (start, end) {
        dif = Math.abs(start - end);
        if (dif < 10) {
            return 50;
        } else if (dif < 20) {
            return 40;
        }
        else if (dif < 50) {
            return 30;
        }
        else if (dif < 100) {
            return 20;
        }
        else if (dif < 500) {
            return 5;
        } else if (dif < 1000) {
            return 1;
        }
    }
    if (activeRolling === false) {
        activeRolling = true;
        if (start < end) {
            var timer = setInterval(function () {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                var dif = (Math.abs(start - end))
                if (dif > 100000) {
                    start += (10000);
                    number.textContent = start;
                }
                else if (dif > 100000) {
                    start += (10000);
                    number.textContent = start;
                }
                else if (dif > 10000) {
                    start += (1000);
                    number.textContent = start;
                }
                else if (dif > 1000) {
                    start += (100);
                    number.textContent = start;
                }
                else if (dif > 100) {
                    start += (10);
                    number.textContent = start;
                } else {
                    number.textContent = start++;
                }
            }, time(start, end));
        }
        else if (start > end) {
            var timer = setInterval(function () {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                var dif = (Math.abs(start - end))
                if (dif > 100000) {
                    start -= (10000);
                    number.textContent = start;
                }
                else if (dif > 100000) {
                    start -= (10000);
                    number.textContent = start;
                }
                else if (dif > 10000) {
                    start -= (1000);
                    number.textContent = start;
                }
                else if (dif > 1000) {
                    start -= (100);
                    number.textContent = start;
                }
                else if (dif > 100) {
                    start -= (10);
                    number.textContent = start;
                } else {
                    number.textContent = start--;
                }
            }, time(start, end));
        } else {
            number.textContent = start;
            activeRolling = false;
        }
    }
}

function setMax() {
    if (parseInt(num1.value) > 999999) {
        num1.value = 999999;
    }
    if (parseInt(num2.value) > 999999) {
        num2.value = 999999;
    }
}
