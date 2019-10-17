exports.Step3 ={


verifyText: function(){

var text = element(by.className('text-uc'));
expect(text.getText()).toEqual('PROTECT YOURSELF. PROTECT YOUR TRIP.');

},

setTravelInsurance: function(){

   browser.executeScript('window.scrollTo(0,200);');
    browser.sleep(3000);
    var no = element(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 2}"]'));
        
    browser.sleep(3000);
     browser.executeScript("arguments[0].scrollIntoView();", no.getWebElement());
     no.click();
},

setmedicalDevice: function(){

element(by.id('quantity')).sendKeys('50');

}






}