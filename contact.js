/**
* Variables for Page Specific Elements
*/
var yourNameInput = '//*[@id="wpcf7-f375-p28-o1"]/form/p[1]/span/input';
var yourNameErrorMessage = '//*[@id="wpcf7-f375-p28-o1"]/form/p[1]/span/span';
var yourEmailInput = '//*[@id="wpcf7-f375-p28-o1"]/form/p[2]/span/input';
var yourEmailErrorMessage = '//*[@id="wpcf7-f375-p28-o1"]/form/p[2]/span/span';
var subjectInput = '//*[@id="wpcf7-f375-p28-o1"]/form/p[3]/span/input';
var messageInput = '//*[@id="wpcf7-f375-p28-o1"]/form/p[4]/span/textarea';
var sendButton = '//*[@id="wpcf7-f375-p28-o1"]/form/p[5]/input';
var submitMessage = '//*[@id="wpcf7-f375-p28-o1"]/form/div[2]';


module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/contact/');
},

ContactTitleTests: function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Contact | Demoqa')
},

Visibilitytests: function (client){
      var visibility = require("./Universal.js");
      visibility.Visibilitytests(client);
},

RedirectTests: function (client){
      var redirects = require("./Universal.js");
      redirects.RedirectTests(client);

},

/***
* Tests for Form Validation and Submission
*/

"Form function and Validation Tests" : function (browser){
//  Error Messages Function
   browser   
      .verify.elementNotPresent(yourNameErrorMessage)
      .verify.elementNotPresent(yourEmailErrorMessage)
      .click(sendButton)
      .pause(2000)
      .verify.visible(yourNameErrorMessage)
      .verify.visible(yourEmailErrorMessage)
      .verify.visible(submitMessage)
      .verify.containsText(submitMessage,"Validation errors occurred. Please confirm the fields and submit it again.")
// Form Submission functionality
      .setValue(yourNameInput,"Alonso Quixano")
      .setValue(yourEmailInput,"test@test.com")
      .setValue(messageInput,"message")
      .setValue(subjectInput,"subject")
      .click(sendButton)
      .pause(2000)
      .verify.containsText(submitMessage,"Your message was sent successfully. Thanks.")
// Email validation
      .setValue(yourEmailInput,"kljfdklsjf")
      .click(sendButton)
      .pause(2000)
      .verify.containsText(yourEmailErrorMessage,"Email address seems invalid.")
},

after : function (browser){      
      browser
      .end();
},  
};