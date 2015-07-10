/**
* Variables for Page Specific Elements
*/

module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/selectable/');
},

TitleTests: function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Selectable | Demoqa')
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