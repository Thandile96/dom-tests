describe("The calculateBill function", function(){
        
    describe ("input bill string on text box", function(){

        it("should return the total phone bill for the string entered", function(){

            assert.equal(9.75, calculateBill("call, call, call, sms, sms"));
            
        });

        it("should return the total phone bill for the string entered", function(){


        assert.equal(19.5, calculateBill("call, call, call, call, call, call, sms, sms, sms, sms"));

        });

    });

    describe("update class lists", function(){

        it("should return a class name of 'warning' if the total bill exceeds 20", function(){
           
            assert.equal(21.5, calculateBill("call, call, call, call, call, call, call, sms, sms, sms"));
            assert.equal("warning", classLists());
            
        });

        it("should return a class name of 'warning' if the total bill exceeds 30", function(){
           
            assert.equal(30.5, calculateBill("call, call, call, call, call, call, call, call, call, call, sms, sms, sms, sms"));
            assert.equal("danger", classLists());
            
        });

    });


});