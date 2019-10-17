var faker = require('faker');


exports.Step1 = {

    setEmail: function () {
        var varEmail = faker.internet.email();
        element(by.model('signup.contact.email')).sendKeys(varEmail);
       
    },


    submit: function () {
        element(by.css('[ng-click="submit();"]')).click();
        
    },

    isDisabled: function(){
       var abc = element(by.id('tourstep4'));
       expect(abc.isEnabled()).toBe(true);

    },

    selectSecurity: function(){

        browser.executeScript('window.scrollTo(0,50);');
        element(by.model('signup.membershipOptions.hasSecurity')).click();
    },

    checkPrice: function(){

        var price = element(by.className('sticky-price-text v2 cost'));
        expect(price.getText()).toContain('$225.00');
    },

   
    emailAlreadyExists: function(){

        element(by.model('signup.contact.email')).sendKeys('azia@globalrescue.com.invalid');
        element(by.css('[ng-click="submit();"]')).click();
        element(by.css('[ng-click="cancel()"]')).click();
        element(by.model('signup.contact.email')).clear();
        var msg = element(by.className('help-block ng-scope'));
        expect(msg.getText()).toEqual('Email is mandatory. Please enter a value.');

    },



}



   