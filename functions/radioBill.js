function radioBill() {
    var callCost2 = 0;
    var smsCost2 = 0;
    var callsTotal = 0;
    var smssTotal = 0;
    


    function givenSmsCost(sms) {
        smsCost2 += sms;
    }

    function givenCallCost(call) {
        callCost2 += call;
    }

    function sendSmss(){
           smssTotal += smsCost2;
        
    }
    
    function makeAcall(){
           callsTotal += callCost2;
    }

    function getTotalCost2(){
        return callsTotal+ smssTotal;
    }

    function getTotalCalls() {
        return callsTotal;
    }

    function getTotalSms() {
        return smssTotal;
    }

    function billLevels(){
        if (getTotalCost2() >= 30 && getTotalCost2() < 50) {
            return "warning"
        }

        else if (getTotalCost2() >= 50) {
            return "danger"
        }
    }


    function givenDangerLevel(){
        return dangerLevel;
    }

    function givenWarningLevel(){
        return warningLevel;
    }

    
    return {
       
        makeAcall,
        sendSmss,
        getTotalCost2,
        getTotalCalls,
        getTotalSms,
        givenCallCost,
        givenSmsCost,
        billLevels,
        givenWarningLevel,
        givenDangerLevel,


    }

}
