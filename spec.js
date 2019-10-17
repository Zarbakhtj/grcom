var step1 = require('../Automation/MembershipSteps/MembershipStep1.js').Step1;
var step2 = require('../Automation/MembershipSteps/MembershipStep2.js').Step2;
var step3 = require('../Automation/MembershipSteps/MembershipStep3.js').Step3;
var step4 = require('../Automation/MembershipSteps/MembershipStep4.js').Step4;
var step5 = require('../Automation/MembershipSteps/MembershipStep5.js').Step5;


describe('Test Cases Step 1',function() {
   
    it('open browser',function(){ 
    browser.get('http://gridqa/ss/#!/signup/step1')
    browser.manage().window().maximize();
    browser.waitForAngular();
        }),

    it('GR logo should be present',function(){
        var grlogo = element(by.xpath('//*[@id="wrapper"]/nav/div/div[1]/div/a/img'));
         expect(grlogo.isPresent()).toBe(true);
        }),

    it('Select membership',function(){
        element(by.css('[ng-click="mediator.tours.membershipSelected(CONSTANTS.MEMBERSHIP_OPTIONS.MEMBERSHIP.TRAVEL);"]')).click();
       }),

    it('Select type',function(){
        element(by.css('[ng-click="mediator.tours.tr.typeSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TYPE.INDIVIDUAL);"]')).click();
        }),


    it('Select Term',function(){
        element(by.css('[ng-click="mediator.tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.DAY_7);"]')).click();
        }),



    it('Max trip length is disabled',function(){
        step1.isDisabled();
        }),


    it('Select Security Add On',function(){
        step1.selectSecurity();
        }),

        it('Email already exists',function(){
            step1.emailAlreadyExists();
            }),
   

    //    it('Select Max trip Length',function(){
    //        element(by.css('[ng-click="mediator.tours.tr.tripSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TRIPS.DAY_45);"]')).click();
    //        })

    it('Enter Email',function(){
        step1.setEmail();
        }),


        it('Verify Price',function(){
            step1.checkPrice();
            }),

    it('Click on Continue button',function(){
        step1.submit();
        })



})



describe('Test Cases Step 2', function(){


    it('Set first name ',function(){
        step2.setfname();
        })

    it('Set last name',function(){

        step2.setlastname();

    })

    it('Enter Phone Number',function(){

        step2.phoneNumber();

    })

    it('Set DOB',function(){

        step2.setDOB();

    })

    it('Set Membership Start date',function(){

        step2.setMembershipDate();

    })

    it('Select gender from radio buttons',function(){

        step2.selectGender();

    })

    it('Select address from address component',function(){

        step2.getadress();

    })

    it('Click on Continue button',function(){

        step1.submit();

    })

})



describe('Test Cases Step 3',function() {

    it('It will verify the text on Addition page',function(){

        step3.verifyText();

    })


    it('It should select the Travel Insurance to No',function(){

        step3.setTravelInsurance();

    })

    it('Set medical devices',function(){

        step3.setmedicalDevice();

    })

    it('Click on Continue button on step 3',function(){

        step1.submit();

    })


})

    

 describe('Test Cases Step 4', function(){

    it('Enter Credit Card Number',function(){

    step4.enterCC();
    })


    it('Select Expiry Month',function(){

        step4.selectExpiryMonth();
        })

        it('Select Expiry Year',function(){

            step4.selectExpiryYear();
            })

            it('Enter CVV',function(){

                step4.enterCVV();
                })

                it('Click on Submit button',function(){

                    step1.submit();
                    })
                    
                    it('Purchase Membership',function(){

                        step4.purchaseMembership();
                        })                 


 })
 
 describe('Test Cases Step 5',function(){


it('Verify Text',function(){


    step5.verifyText();
})



 })
    
    
    