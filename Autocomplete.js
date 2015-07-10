/**
* Variables for Page Specific Elements
*/
var defaultFunctionalityTab = '#ui-id-4';
var multipleValuesTab = '#ui-id-5';
var categoriesTab = '#ui-id-6';
// Default Functionality Input
var dfInput = '#tagss';
var actionScriptOption = '#ui-id-7';
var javaOption = '#ui-id-14';
// Multiple Values Input
var mvInput = '#tagsss';
var groovyOption = '#ui-id-8';
// Categories Input
var cInput = '#searcha';
var annhhx10Option = '#ui-id-10';
var andersAnderssonOption = '#ui-id-13';


module.exports = {
 
beforeEach: function(browser){
      browser
      .url('http://demoqa.com/autocomplete/');
},

AutoCompleteTitle: function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Autocomplete | Demoqa')
},

Visibilitytests: function (client){
      var visibility = require("./Universal.js");
      visibility.Visibilitytests(client);
},

RedirectTests: function (client){
      var redirects = require("./Universal.js");
      redirects.RedirectTests(client);

},

"Autocomplete Functionality Tests ": function (browser){
/**
* Tests whether autoComplete functionality works (a dropdown of options are visible)
* default functionality tab
*/  
     browser 
      .useCss()
      .click(defaultFunctionalityTab)
      .click(dfInput)
      .setValue(dfInput, 'a')
      .pause(1000)
      .verify.visible(actionScriptOption)
      .verify.visible(javaOption)
      .pause(1000)
/**
* Tests whether autoComplete functionality works (a dropdown of options are visible)
* multiple values tab
*/  
      .click(multipleValuesTab)
      .click(mvInput)
      .setValue(mvInput, 'v')
      .pause(1000)
      .verify.visible(groovyOption)
      .pause(1000)
/**
* Tests whether autoComplete functionality works (a dropdown of options are visible)
* categories tab
*/  
      .click(categoriesTab)
      .click(cInput)
      .setValue(cInput, 'n')
      .pause(1000)
      .verify.visible(annhhx10Option)
      .verify.visible(andersAnderssonOption)
},

after : function (browser){      
      browser
      .end();
},  

};