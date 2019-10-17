var faker = require('faker');


exports.Step2 = {


setfname: function(){

    var fname = faker.name.findName();
    element(by.model('signup.contact.firstName')).sendKeys(fname);

},

setlastname: function(){

    var lastname = faker.name.findName();
    element(by.model('signup.contact.lastName')).sendKeys(lastname);

},

phoneNumber: function(){

    element(by.model('signup.tempPrimaryPhone')).sendKeys('6174524200');
},

setDOB: function(){
browser.sleep(2000);
var today = new Date();


// get today's date

console.log(today);
var dd = today.getDate();
console.log(dd);
var mm = today.getMonth()+1;
console.log(mm); //January is 0!
var yyyy = today.getFullYear();
console.log(yyyy);

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;

var picker = element(by.model("signup.contact.displayDob"));
picker.sendKeys(today);


},


setMembershipDate: function(){

    var picker = element(by.model("signup.contract.displayMembershipStartDate"));

// get today's date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;


picker.sendKeys(today);


},

selectGender: function(){

    element(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.MALE}"]')).click();

},



    getadress: function(){

      //  element(by.model("addressObject.selectedAddress")).click();
     //   browser.sleep(6000);
     //   browser.driver.actions().mouseMove(element(by.model("addressObject.selectedAddress"))).sendKeys('123');
     //   browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
     //   browser.actions().sendKeys(protractor.Key.ENTER).perform();  


     browser.actions().mouseMove(element(by.model("addressObject.selectedAddress")).sendKeys('islamabad')).perform().then(function () {
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


}
    


}