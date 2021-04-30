describe("The textBillTotal function", function(){

    describe("update totals for text input of calls and sms's", function(){

        it("should update the call total and global total when 'call' is entered on the text box", function(){
            let totalBill = textBillTotal();

            totalBill.callPrice(2.75);
            totalBill.smsPrice(0.75);

            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();

            assert.equal(8.25, totalBill.callTotalBill());
            assert.equal(0.00, totalBill.smsTotalBill());
            assert.equal(8.25, totalBill.getGlobalTotal());


        });

        it("should update the sms total and global total when 'sms' is entered on the text box", function(){
            let totalBill = textBillTotal();

            totalBill.callPrice(2.75);
            totalBill.smsPrice(0.75);

            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();

            assert.equal(0.00, totalBill.callTotalBill());
            assert.equal(3.00, totalBill.smsTotalBill());
            assert.equal(3.00, totalBill.getGlobalTotal());


        });

        it("should update the call and sms total as well as the global total when 'call' and 'sms' are entered on the text box", function(){
            
            let totalBill = textBillTotal();

            totalBill.callPrice(2.75);
            totalBill.smsPrice(0.75);

            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();

            assert.equal(16.5, totalBill.callTotalBill());
            assert.equal(3.00, totalBill.smsTotalBill());
            assert.equal(19.5, totalBill.getGlobalTotal());

        });
    });

    describe("setting warning and critical levels", function(){

        it("should return a class name of 'warning' when the global total exceeds 30", function(){
            let totalBill = textBillTotal();

            totalBill.callPrice(2.75);
            totalBill.smsPrice(0.75);
            totalBill.getWarningLevel(30);
            totalBill.getDangerLevel(50);


            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();

            assert.equal("warning", totalBill.globalLevels());
            assert.equal(36, totalBill.getGlobalTotal());
            
            
        });

        it("should return a class name of 'danger' when the global total exceeds 50", function(){
            let totalBill = textBillTotal();

            totalBill.callPrice(2.75);
            totalBill.smsPrice(0.75);
            totalBill.getWarningLevel(30);
            totalBill.getDangerLevel(50);


            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterCall();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();
            totalBill.enterSms();

            assert.equal("danger", totalBill.globalLevels());
            assert.equal(52.5, totalBill.getGlobalTotal());
            
            
        });

    });

});