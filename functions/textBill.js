function textBillTotal() {
    
    var callTotal = 0;
    var smsTotal = 0;
    var callCost = 0;
    var smsCost = 0;

    var theWarningLevel = 0;
    var theDangerLevel = 0;

    function callPrice(call){
        callCost += call;
    }

    function smsPrice(sms){
        smsCost += sms;
    }

    function enterCall(){
        callTotal += callCost;

    }

    function enterSms(){
        smsTotal += smsCost;
    }

    function callTotalBill(){
        return callTotal;
    }

    function smsTotalBill(){
        return smsTotal;
    }


    function getGlobalTotal(){
        return callTotal + smsTotal;
    }

    function globalLevels(){
        if(getGlobalTotal() >= 30 && getGlobalTotal() < 50) {
            return "warning"
        }

        else if(getGlobalTotal() >= 50) {
            return "danger"
        }

    }

    function getWarningLevel(warningLevel) {
        return theWarningLevel;
    }

    function getDangerLevel(dangerLevel) {
        return theDangerLevel;
    }


    return {
        callPrice,
        smsPrice,
        callTotalBill,
        smsTotalBill,
        getGlobalTotal,
        enterSms,
        enterCall,
        globalLevels,
        getWarningLevel,
        getDangerLevel,

    }
}