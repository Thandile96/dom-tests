function radioBill() {
   
    var callsTotalsTwo = 0;
    var smsTotalsTwo = 0;
    
  function getBills(billItemType) {
       var item = billItemType.trim();
        
         if (item === "call") {
            callsTotalsTwo += 2.75;
            
         }
        
         else if (item === "sms"){
            smsTotalsTwo += 0.75;
            
        }
  }

    function getTotalCalls() {
        return callsTotalsTwo;
    }

    function getTotalSms() {
        return smsTotalsTwo;
    }

    function getTotalCost2(){
        return callsTotalsTwo + smsTotalsTwo;
    }

    function billLevels(){
        if (getTotalCost2() >= 30 && getTotalCost2() < 50) {
            return "warning"
        }

        else if (getTotalCost2() >= 50) {
            return "danger"
        }
    }

    
    return {
    
        getBills,
        getTotalCost2,
        getTotalCalls,
        getTotalSms,
        
        billLevels,

    }

}
