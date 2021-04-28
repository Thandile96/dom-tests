describe("The bill with settings function", function(){
 
    describe("set values", function(){

        it ("should be able to set the call cost", function (){
            let settingsBill = billWithSettings();
            
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(2.25);
            assert.equal(2.25, settingsBill.getCallCost());

            let settingsBill2 = billWithSettings();
            settingsBill2.setCallCost(1.75);
            assert.equal(1.75, settingsBill2.getCallCost());

        });

        it ("should be able to set the sms cost", function(){
            let settingsBill = billWithSettings();

            settingsBill.setSmsCost(0.55);
            assert.equal(0.55, settingsBill.getSmsCost());

            let settingsBill2 = billWithSettings();
            settingsBill2.setSmsCost(0.70);
            assert.equal(0.70, settingsBill2.getSmsCost());

        });

        it ("should be able to set call and sms cost", function(){
            let settingsBill = billWithSettings();
            settingsBill.setCallCost(1.85);
            settingsBill.setSmsCost(0.65);

            assert.equal(1.85, settingsBill.getCallCost());
            assert.equal(0.65, settingsBill.getSmsCost());
        });

        it ("should be able to set the warning level", function(){
            let settingsBill = billWithSettings();

            settingsBill.setWarningLevel(15);
            assert.equal(15, settingsBill.getWarningLevel());

        });

        it ("should be able to set the critical level", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(30);
            assert.equal(30, settingsBill.getCriticalLevel());

        });

        it ("should be able to set warning and critical level", function(){
            let settingsBill = billWithSettings();

            settingsBill.setWarningLevel(20);
            settingsBill.setCriticalLevel(35);

            assert.equal(20, settingsBill.getWarningLevel());
            assert.equal(35, settingsBill.getCriticalLevel());
        });

    });

    describe("use values", function(){
        it ("should be able to use the call cost set", function(){
            let settingsBill = billWithSettings();
            
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.25);
            settingsBill.setSmsCost(0.45);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(3.75, settingsBill.getTotalCost());
            assert.equal(3.75, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        });

        it ("should be able to use the call cost set for 2 calls at 1.85 each", function(){
            let settingsBill = billWithSettings();
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalLevel(10);


            settingsBill.setCallCost(1.85);
            settingsBill.setSmsCost(0.45);

            settingsBill.makeCall();
            settingsBill.makeCall();
            // settingsBill.makeCall();

            assert.equal(3.70, settingsBill.getTotalCost());
            assert.equal(3.70, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        });

        it ("should be able to send 2 sms's at 0.75 each", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.85);
            settingsBill.setSmsCost(0.75);

            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(1.50, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.50, settingsBill.getTotalSmsCost());

        });

        it ("should be able to send 2 sms's at 0.75 each and make 1 call at 1.85 each", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.85);
            settingsBill.setSmsCost(0.75);

            settingsBill.sendSms();
            settingsBill.sendSms();

            settingsBill.makeCall();

            assert.equal(3.35, settingsBill.getTotalCost());
            assert.equal(1.85, settingsBill.getTotalCallCost());
            assert.equal(1.50, settingsBill.getTotalSmsCost());

        });
    });

    describe("warning and critical level", function(){

        it("should return a class name of 'warning' if warning level is reached", function() {
            let settingsBill = billWithSettings();

            settingsBill.setCallCost(1.85);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalLevel(10);

           
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            

            assert.equal("warning", settingsBill.totalClassName());

        });

        it("should return a class name of 'critical' when critical level is reached", function() {
            let settingsBill = billWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(10);
           
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            

            assert.equal("critical", settingsBill.totalClassName());

        });

        it("should stop the total call cost from increasing when the critical level is reached", function() {
            let settingsBill = billWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);

            // settingsBill.setWarningLevel(8);
            settingsBill.setCriticalLevel(10);
           
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            // settingsBill.makeCall();
            

            assert.equal("critical", settingsBill.totalClassName());
            assert.equal(10, settingsBill.getTotalCallCost());

        });


        it("should allow the total to increase after reaching the critical level & then upping the critical level", function() {
            let settingsBill = billWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);

            settingsBill.setWarningLevel(8);
            settingsBill.setCriticalLevel(10);
           
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            // settingsBill.makeCall();
            

            assert.equal("critical", settingsBill.totalClassName());
            assert.equal(10, settingsBill.getTotalCallCost());
            
            settingsBill.setCriticalLevel(20);
            assert.equal("warning", settingsBill.totalClassName());
            settingsBill.makeCall();
            settingsBill.makeCall();
            
            assert.equal(15, settingsBill.getTotalCallCost());
        });
  
  
    });
    
});