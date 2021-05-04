//get a reference to the calculate button
var calculateBillElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
 
//link the function to a click event on the calculate button
var calcInstance = calcBills();

function calculateBill(){

    billTotalElement.innerHTML = calcInstance.calculateBill(billStringElement.value).toFixed(2);
    billTotalElement.classList.remove('warning')
    billTotalElement.classList.remove('danger')
    billTotalElement.classList.add(calcInstance.signsClass())
}

calculateBillElement.addEventListener('click', calculateBill)


