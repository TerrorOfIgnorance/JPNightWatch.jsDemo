/**
* Variables for Page Specific Elements
*/
var middleParagraphHeading = '.entry-title';
var middleParagraph = '.entry-content>p';

module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/about-us');
},
'About Us Title' : function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('About us | Demoqa')
},
Visibilitytests: function (client){
      var visibility = require("./Universal.js");
      visibility.Visibilitytests(client);
},

RedirectTests: function (client){
      var redirects = require("./Universal.js");
      redirects.RedirectTests(client);
},

after : function (browser){      
      browser
      .end();
},  
};

  
    




