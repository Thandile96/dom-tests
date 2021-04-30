
var type;
function calculateBill(billItem){
            
    var billTotal = 0;
        type = billItem;
        var billItems = billItem.split(",");

        for (var i=0;i<billItems.length;i++){
            var billItemString = billItems[i].trim();
            if (billItemString === "call"){
                billTotal += 2.75;
            }
            else if (billItemString === "sms"){
                billTotal += 0.75;
                    
            }
        }
        return billTotal;
            

    }

    function classLists() {

       if (calculateBill(type) >= 20 && calculateBill(type) < 30 ){
            return "warning";
        }

       else if (calculateBill(type) >= 30 ){
        return "danger";

        }

        return calculateBill(type);
    }

              
   
    
            


