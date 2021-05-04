var callTotalField = document.querySelector(".callTotalSettings")
var smsTotalField = document.querySelector(".smsTotalSettings")
var totalField = document.querySelector(".totalSettings")
var addRadioBillButton = document.querySelector(".buttonSettings")
var updateButton = document.querySelector(".updateSettings")

var callCostSet = document.querySelector(".callCostSetting")
var smsCostSet = document.querySelector(".smsCostSetting")
var warningLevelSet = document.querySelector(".warningLevelSetting")
var criticalLevelSet = document.querySelector(".criticalLevelSetting")

var settingsInstance = billWithSettings(); 

function updateSettings(){
  
   Number(settingsInstance.setCallCost(Number(callCostSet.value)));
   Number(settingsInstance.setSmsCost(Number(smsCostSet.value)));
   Number(settingsInstance.setWarningLevel(warningLevelSet.value));
   Number(settingsInstance.setCriticalLevel(criticalLevelSet.value));

   addClass()
}
updateButton.addEventListener('click', updateSettings)

function billSettings() {

    var radioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var radio = radioButton.value;
    
    if (radio) {
        settingsInstance.getCosts(radio);
    }
   
    addClass()
    callTotalField.innerHTML = settingsInstance.getTotalCallCost()
    smsTotalField.innerHTML = settingsInstance.getTotalSmsCost()
    totalField.innerHTML = settingsInstance.getTotalCost()
    
}

function addClass(){
    totalField.classList.remove('warning')
    totalField.classList.remove('critical')
    totalField.classList.add(settingsInstance.totalClassName())


}
addRadioBillButton.addEventListener('click', billSettings)



