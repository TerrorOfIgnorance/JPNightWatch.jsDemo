/**
* Variables for Page Specific Elements
*/
var uniqueAndCleanImgLink = '//*[@id="post-9"]/div/div[1]/div/p[1]/a/img';
var customerSupportImgLink = './/*[@id="post-9"]/div/div[2]/div/p[1]/i/a/img';
var veryFlexibleImgLink = './/*[@id="post-9"]/div/div[3]/div/i/a/img';
var tab1 = '#ui-id-1';
var tab1Title = '#tabs-1>b';
var tab2 = '#ui-id-2';
var tab2Title = '#tabs-2>b';
var tab3 = '#ui-id-3';
var tab3Title = '#tabs-3>b';
var tab4 = '#ui-id-4';
var tab4Title = '#tabs-4>b';
var tab5 = '#ui-id-5';
var tab5Title = '#tabs-5>p>b';

module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/');
},

TitleTests: function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Demoqa | Just another WordPress site')
},

Visibilitytests: function (client){
      var visibility = require("./Universal.js");
      visibility.Visibilitytests(client);
},

RedirectTests: function (client){
      var redirects = require("./Universal.js");
      redirects.RedirectTests(client);

},      

"PageSpecific Redirects tests" : function(browser){  
/***
* Page Specific Redirects 
*/    
     browser
//    unique and clean 
      .click(uniqueAndCleanImgLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/wp-content/uploads/2014/08/pattern-14.png')
      .url('http://demoqa.com/')
//    customer support
      .click(customerSupportImgLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/wp-content/uploads/2014/08/pattern-14.png')
      .url('http://demoqa.com/')
//    very Flexible
      .click(veryFlexibleImgLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/wp-content/uploads/2014/08/pattern-14.png')
      .url('http://demoqa.com/')
},

"Tabs functionality tests" : function(browser){  
/**
*     Middle of the page tabs' Functionality
*/
     browser
      .useCss()
      .pause(2000)
      .click(tab1)
      .verify.containsText(tab1Title, "Content 1 Title")
      .pause(2000)
      .click(tab2)
      .verify.containsText(tab2Title, "Content 2 Title")
      .pause(2000)
      .click(tab3)
      .verify.containsText(tab3Title, "Content 3 Title")
      .pause(2000)
      .click(tab4)
      .verify.containsText(tab4Title, "Content 4 Title")
      .pause(2000)
      .click(tab5)
      .verify.containsText(tab5Title, "Content 5 Title")
      .end();
},

after : function (browser){      
      browser
      .end();
},  
};