
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var nodemailer = require('nodemailer');

var reporter = new HtmlScreenshotReporter({
  dest: 'C:\Automation/screenshots',
  filename: 'My-Report.html'
});




exports.config = {
    
  /////////////////////////////////////////////Jasmine Reporter///////////////////////////////////////
    
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },
  
    // Assign the test reporter to each running instance
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
    },
  
    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },
////////////////////////////////////////Jasmine Reporte Ends Here/////////////////////////////



///////////////////////////////////////////Email part Starts Here/////////////////////////////////


    onComplete: function() {    
      
      
        return new Promise(function (fulfill, reject){
            var transporter = nodemailer.createTransport({
                host: 'smtp.globalrescue-grid.com',
                port: 25,
                tls: { rejectUnauthorized: false },
                secure: false, // true for port 465 only
                auth: {
                    user: 'alerts_qa@globalrescue-grid.com',
                    pass: 'dm42BXe2n8'
                }
            });
            var mailOptions = {
                from: '"alerts_qa@globalrescue-grid.com" <>', // sender address (who sends)
                to: 'sjalil@globalrescue.com, mbaig@globalrescue.com', // list of receivers (who receives)
                subject: 'Regression Test Cycle', // Subject line
                text: 'Hello world ', // plaintext body
                html: '<b>Dear All, </b><br> Please find attached Html report of regression test cycle of SS portal', // html body
                attachments: [{   
                    filename: 'My-Report.html',
                    path: 'C:/Automation/Automation/screenshots/My-Report.html' // stream this file
                }]
        };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    reject(err);
                }
                fulfill(info);
            });
        });
    },

   
        
///////////////////////////////////////////////////Email part Ends Here////////////////////////////////////

// seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect: true,
specs: ['spec.js'],


capabilities: {
//'browserName': 'firefox',
'browserName': 'chrome',

},


useAllAngular2AppRoots: true,
framework: 'jasmine'

}


  