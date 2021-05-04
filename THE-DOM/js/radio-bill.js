//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")

//create a variable that will keep track of the total bill
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")
var totalTwoElement = document.querySelector(".totalTwo")

var radioInstance = radioBill();

function radBill() {

  var radioButton = document.querySelector("input[name='billItemType']:checked");
   if(radioButton){
    radioInstance.getBills(radioButton.value);
    }
 
    callTotalTwoElement.innerHTML = (radioInstance.getTotalCalls()).toFixed(2)
    smsTotalTwoElement.innerHTML = (radioInstance.getTotalSms()).toFixed(2)
    totalTwoElement.innerHTML = radioInstance.getTotalCost2().toFixed(2)
    totalTwoElement.classList.add(radioInstance.billLevels())
   
}
radioBillAddBtnElement.addEventListener('click', radBill)
