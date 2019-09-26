function generateRandom() {

    var num1 = document.querySelector("#num1");
    var num2 = document.querySelector("#num2");
    setRightorder(num1, num2);
    var randomNumber = randomNumber(num1, num2);

}
function randomNumber(num1, num2) {

}

function setRightOrder(num1, num2) {
    /**bugadown */
    const value1 = parseInt(num1.value);
    const value2 = parseInt(num2.value);
    if (value2 > value1) {
        num1.value = value2;
        num2.value = value1;
    }
}
