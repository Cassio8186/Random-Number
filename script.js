function generateRandom() {

    var num1 = document.querySelector("#num1");
    var num2 = document.querySelector("#num2");
    setRightOrder(num1,num2);
}
function randomNumber(num1, num2) {

}

function setRightOrder(num1, num2) {
    const value1 = num1.value;
    const value2 = num2.value;
    if (value1 > value2) {
        num1.value = value2;
        num2.value = value1;
    }
}
generateRandom();