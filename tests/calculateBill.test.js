describe("The calculateBill function", function(){
        
    describe ("input bill string on text box", function(){

        it("should return the total phone bill for the string entered", function(){
            let bill = calcBills();
            assert.equal(9.75, bill.calculateBill("call, call, call, sms, sms"));
            
        });

        it("should return the total phone bill for the string entered", function(){
            let bill = calcBills();

        assert.equal(19.5, bill.calculateBill("call, call, call, call, call, call, sms, sms, sms, sms"));

        });

    });

    describe("update class lists", function(){

        it("should return a class name of 'warning' if the total bill exceeds 20", function(){
            let bill = calcBills();

            assert.equal(21.5, bill.calculateBill("call, call, call, call, call, call, call, sms, sms, sms"));
            assert.equal("warning", bill.signsClass());
            
        });

        it("should return a class name of 'danger' if the total bill exceeds 30", function(){
            let bill = calcBills();

            assert.equal(30.5, bill.calculateBill("call, call, call, call, call, call, call, call, call, call, sms, sms, sms, sms"));
            assert.equal("danger", bill.signsClass());
            
        });

    });


});