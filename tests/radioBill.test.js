describe("The radioBill function", function(){

   describe("use the given call and sms values", function(){
        
       it ("should return the total bill when a certain number of calls are made at 2.75 each", function(){
           let billType = radioBill();
           
           billType.getBills("call");
           billType.getBills("call");
           billType.getBills("call");

           assert.equal(8.25, billType.getTotalCost2());
           assert.equal(8.25, billType.getTotalCalls());
           assert.equal(0.00, billType.getTotalSms());

        });

        it ("should return the total bill when a certain number of sms's are sent at 0.75 each", function(){
            let billType = radioBill();
            
            billType.getBills("sms");
            billType.getBills("sms");
            billType.getBills("sms");
 
            assert.equal(2.25, billType.getTotalCost2());
            assert.equal(0.00, billType.getTotalCalls());
            assert.equal(2.25, billType.getTotalSms());
 
         });

         it ("should return the total bill when a calls are made at 2.75 each and sms's are sent at 0.75 each", function(){
            let billType = radioBill();
 
            billType.getBills("sms");
            billType.getBills("sms");
            billType.getBills("sms");
            billType.getBills("call");
            billType.getBills("call");

 
            assert.equal(7.75, billType.getTotalCost2());
            assert.equal(5.5, billType.getTotalCalls());
            assert.equal(2.25, billType.getTotalSms());
 
         });

   });

   describe("warning and danger levels", function(){
       
      it("should return 'warning' when the total bill is greater than 30", function(){
         let billType = radioBill();

         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("sms");
         billType.getBills("sms");
         billType.getBills("sms");

         assert.equal("warning", billType.billLevels());
         assert.equal(35.25, billType.getTotalCost2());


      });

      it("should return 'danger' when the total bill is greater than 50", function(){
         let billType = radioBill();
      
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("call");
         billType.getBills("sms");
         billType.getBills("sms");
         billType.getBills("sms");
         billType.getBills("sms");
         billType.getBills("sms");
         billType.getBills("sms");
         

         assert.equal("danger", billType.billLevels());
         assert.equal(51.25, billType.getTotalCost2());

      });

   });

});