var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var currentdate = new Date();
var reqFolder = "";
var attachmentsArray=[];
var today = new Date(),
timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var reporter = new HtmlScreenshotReporter({
dest: 'C:/Automation', // a location to store screen shots.
cleanDestination: true,
inlineImages: false,
preserveDirectory: true,
showSummary: true,
showConfiguration: true,
reportTitle: 'Automated Test Report for SS --- Test run on: ' + timeStamp,
filename: 'Report.html'

});
     


exports.config = {
framework: 'jasmine',

/////////////////////////////////////////////Jasmine Reporter///////////////////////////////////////
beforeLaunch: function() {
return new Promise(function(resolve){
reporter.beforeLaunch(resolve);
});
},
// Assign the test reporter to each running instance
onPrepare: function() {
jasmine.getEnv().addReporter(reporter);
var fs = require('fs');
fs.readdir(".", function (err, list) {
list.forEach(function (file) {
//console.log(file);
stats = fs.statSync(file);
var folderDate = new Date(stats.ctime);
if (folderDate.getTime() > currentdate.getTime()) {
reqFolder = file;
currentdate = stats.ctime;

}
})
console.log(reqFolder); // can check that whether destination folder to email is correct or not?

})
return global.browser.getProcessedConfig().then(function (config) {

});
},


// Close the report after all tests finish
afterLaunch: function(exitCode) {
return new Promise(function(resolve){
reporter.afterLaunch(resolve.bind(this, exitCode));
});
},
////////////////////////////////////////Jasmine Reporter Ends Here/////////////////////////////





///////////////////////////////////////////Email part Starts Here/////////////////////////////////
onComplete: function() { 

return new Promise(function (fulfill, reject){
setTimeout(function () {
var fs = require('fs');
fs.readdir(reqFolder, function (err, list) {
list.forEach(function (file) {
 //console.log(file);
var pathJson = {
"path": 'C:/Automation/' + reqFolder + '/' + file,
};
attachmentsArray.push(pathJson);
})
})
}, 2000);

setTimeout(function () {

var nodemailer = require('nodemailer');
console.log('............Please Wait! Email is sending in a while..............');
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
to: 'sjalil@globalrescue.com, mbaig@globalrescue.com,aaslam', // list of receivers (who receives)
subject: 'Create New Membership', // Subject line
text: 'Hello world ', // plaintext body
html: '<b>Dear All, </b><br> Please find attached Html report for purchasing membership on SS portal', // html body
/*attachments: [{ 
filename: 'My-Report.html',
path: 'C:/Automation/Automation/screenshots/My-Report.html' // stream this file
}]*/
attachments: attachmentsArray
};
transporter.sendMail(mailOptions, function(error, info){
if(error){
reject(err);
}
fulfill(info);
console.log('Message sent: ' + info.response);
});
browser.close();
}, 4000);
});
},
///////////////////////////////////////////////////Email part Ends Here////////////////////////////////////



//seleniumAddress: 'http://localhost:4444/wd/hub',
jasmineNodeOpts: {
onComplete: null,
showColors: true // Use colors in the command line report.
},

useAllAngular2AppRoots: true,
allScriptsTimeout: 500000,
directConnect: true,
specs: ['spec.js'],


capabilities: {
//'browserName': 'firefox',
'browserName': 'chrome',
chromeOptions: {
    args: ['--no-sandbox']
  },

},

/*
//////////////////////////////////////Datbase Connection//////////////////////////////////////////////////////////////
 ConnectDatabase: function(){
	var mysql = require("mysql")
	this.connection = mysql.createConnection({
		host:"gridqa",
		user:"gr",
		password:"gr",
        database:"ss"
	})
},  */

///////////////////////////////////////////Database connection part ends here/////////////////////////////////////////////////////////////


}

