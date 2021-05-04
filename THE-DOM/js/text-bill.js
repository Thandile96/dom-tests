// get a reference to the textbox where the bill type is to be entered
var textboxElement = document.querySelector(".billTypeText");

//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

//add an event listener for when the add button is pressed

var textInstance = textBillTotal();

function textBill(){

 textInstance.getCost(textboxElement.value);

    callTotalOneElement.innerHTML = textInstance.callTotalBill().toFixed(2);
    smsTotalOneElement.innerHTML = textInstance.smsTotalBill().toFixed(2);
    totalOneElement.innerHTML = textInstance.getGlobalTotal().toFixed(2);
    totalOneElement.classList.add(textInstance.globalLevels())

}
addToBillBtnElement.addEventListener('click', textBill)


















