exports.Step4={


enterCC: function(){

browser.sleep(3000);
var CC = element(by.model("signup.contact.creditCardProfile.creditCardNumber"));
browser.executeScript("arguments[0].scrollIntoView();", CC.getWebElement());
CC.sendKeys('4111111111111111');


},


selectExpiryMonth: function(){

    browser.actions().mouseMove(element(by.model("signup.contact.creditCardProfile.expiryMonth")).click()).perform().then(function () {
        browser.sleep(8000);
        var index = 2;
        // press the down arrow for the autocomplete item we want to choose
        for (i = 0; i < index; i++) {

            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        }
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
    });


},


selectExpiryYear: function(){

    browser.actions().mouseMove(element(by.model("signup.contact.creditCardProfile.expiryYear")).click()).perform().then(function () {
        browser.sleep(8000);
        var index = 2;
        // press the down arrow for the autocomplete item we want to choose
        for (i = 0; i < index; i++) {

            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        }
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
    });


},


enterCVV: function(){

    element(by.model("signup.contact.creditCardProfile.creditCardCcv")).sendKeys('123');

},


purchaseMembership: function(){


    element(by.id('msaCheckBox')).click();
    browser.sleep(1000);
    element(by.id('consentAggremetBtn')).click();
}




}