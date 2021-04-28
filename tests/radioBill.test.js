describe("the radioBill function", function(){

    describe("use the given call and sms values", function(){
        
        it ("should return the total bill when a certain number of calls are made at 2.75 each", function(){
           let billType = radioBill();

           billType.setCallCost2(2.75);
           billType.setSmsCost2(0.75);
           
           billType.makeAcall();
           billType.makeAcall();
           billType.makeAcall();

           assert.equal(8.25, billType.getTotalCost2());
           assert.equal(8.25, billType.getTotalCalls());
           assert.equal(0.00, billType.getTotalSms());

           


        });

        it ("should return the total bill when a certain number of sms's are sent at 0.75 each", function(){
            let billType = radioBill();
 
            billType.setCallCost2(2.75);
            billType.setSmsCost2(0.75);
            
            billType.sendSmss();
            billType.sendSmss();
            billType.sendSmss();
 
            assert.equal(2.25, billType.getTotalCost2());
            assert.equal(0.00, billType.getTotalCalls());
            assert.equal(2.25, billType.getTotalSms());
 
            
 
 
         });

         it ("should return the total bill when a calls are made at 2.75 each and sms's are sent at 0.75 each", function(){
            let billType = radioBill();
 
            billType.setCallCost2(2.75);
            billType.setSmsCost2(0.75);
            
            billType.sendSmss();
            billType.sendSmss();
            billType.sendSmss();
            billType.makeAcall();
            billType.makeAcall();

 
            assert.equal(7.75, billType.getTotalCost2());
            assert.equal(5.5, billType.getTotalCalls());
            assert.equal(2.25, billType.getTotalSms());
 
            
 
 
         });

    });

});