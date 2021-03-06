function billWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var totalCallCost = 0;
    var totalSmsCost= 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost;
    }
 //set
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
 //get
    function getSmsCost() {
        return theSmsCost;
    }



 //set
    function setWarningLevel(warningLevel) {
    theWarningLevel = warningLevel;
    }
 //get
    function getWarningLevel() {
    return theWarningLevel;
    }  
 //set
    function setCriticalLevel(criticalLevel) {
    theCriticalLevel = criticalLevel;
    }
 //get
    function getCriticalLevel() {
    return theCriticalLevel;
    }  

    function makeCall(){
        if(!hasReachedCriticalLevel()) {
         totalCallCost += theCallCost;
         }
    }

    function getCosts(billType) {
        
        if (billType === "call"){
            makeCall()
     
        } else if (billType === "sms"){
             sendSms()
            }
    }

    function getTotalCost(){
        return totalCallCost + totalSmsCost;
    }

    function getTotalCallCost(){
        return totalCallCost;
    }

    function getTotalSmsCost(){
        return totalSmsCost;
    }
    function sendSms(){
        if(!hasReachedCriticalLevel()) {
           totalSmsCost += theSmsCost;
        }
        
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();

    }

    function totalClassName(){

        if(hasReachedCriticalLevel()){
         return "critical"
        }

        if(getTotalCost() >= getWarningLevel()) {
         return "warning"
        }
    }

    return {
        setCallCost,
        getCallCost,

        setSmsCost,
        getSmsCost,

        setWarningLevel,
        getWarningLevel,

        setCriticalLevel,
        getCriticalLevel,

        makeCall,
        sendSms,

        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        
        totalClassName,
        getCosts
    }
}  