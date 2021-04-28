function radioBill() {
    var callCost2 = 0;
    var smsCost2 = 0;
    var callsTotal = 0;
    var smssTotal = 0;
    var totalsTotal = 0;

    var dangerLevel = 0;
    var warningLevel = 0;


    // function checkedRadioBtn() {
    //     if (billItemType === "call") {
    //         callsTotal += 2.75;
    //         totalsTotal += 2.75;
    //     }
    //     else if (billItemType === "sms") {
    //         smssTotal += 0.75;
    //         totalsTotal += 0.75;
    //     }
    // }

    // function callCost2() {
    //     if (billItemType === "call") {
    //         callsTotal += 2.75;
    //         totalsTotal += 2.75;
    //     }

    // }
     
    // function smsCost2() {
    //     if (billItemType === "sms") {
    //         smssTotal += 0.75;
    //         totalsTotal += 0.75;
    //     }
    // }

    function setSmsCost2(sms) {
        smsCost2 += sms;
    }

    function setCallCost2(call) {
        callCost2 += call;
    }

    function sendSmss(){
        // if(!hasReachedDangerlLevel) {
           smssTotal += smsCost2;
        
        
    }
    
    function makeAcall(){
        // if(!hasReachedDangerLevel) {
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
    
    return {
       // checkedRadioBtn,
        // getDangerLevel,
        // getWarningLevel2,
        makeAcall,
        sendSmss,
        getTotalCost2,
        getTotalCalls,
        getTotalSms,
        callCost2,
        setCallCost2,
        setSmsCost2,


    }

}
