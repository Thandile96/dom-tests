function textBillTotal() {
    
    var callTotal = 0;
    var smsTotal = 0;
    var total = 0;

   
    function callTotalBill(){
        return callTotal;
    }

    function smsTotalBill(){
        return smsTotal;
    }


    function getGlobalTotal(){
        return callTotal + smsTotal;
    }

    function getCost(type){

        var bill = type.trim();
        
        if (bill === "call"){
            callTotal += 2.75;
           total += 2.75;
     
             } else if (bill === "sms"){
             smsTotal += 0.75;
            total += 0.75;
            }
     
    }

    function globalLevels(){
        if(getGlobalTotal() >= 30 && getGlobalTotal() < 50) {
            return "warning"
        }

        else if(getGlobalTotal() >= 50) {
            return "danger"
        }

    }

    return {
        callTotalBill,
        smsTotalBill,
        getGlobalTotal,

        globalLevels,

        getCost

    }
}