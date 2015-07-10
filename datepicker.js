/**
* Variables for Page Specific Elements
*/
var defaultFunctionalityTab = '#ui-id-1';
var animationsTab = '#ui-id-2';
var displayMonthAndYearTab = '#ui-id-3';
var formatDateTab = '#ui-id-4';
// Default functionality tab Elements
var dfDateInput = '#datepicker1';
var dfDatePickerHeader = '//*[@id="ui-datepicker-div"]/div/div';
// Animation tab Elements
var aDateInput = '#datepicker2';
var aDatePickerHeader = '//*[@id="ui-datepicker-div"]/div/div';
var animationsDropDown = '#anim';
var showDefaultOption = '//*[@id="anim"]/option[1]';
var slideDownOption = '//*[@id="anim"]/option[2]';
var fadeInOption = '//*[@id="anim"]/option[3]';
var blindOption = '//*[@id="anim"]/option[4]';
var bounceOption = '//*[@id="anim"]/option[5]';
var clipOption = '//*[@id="anim"]/option[6]';
var dropOption = '//*[@id="anim"]/option[7]';
var foldOption = '//*[@id="anim"]/option[8]';
var slideOption = '//*[@id="anim"]/option[9]';
var noneOption = '//*[@id="anim"]/option[10]';
// Display month and year Elements
var dmyDateInput = '#datepicker3';
var dmyDatePickerHeader ='//*[@id="ui-datepicker-div"]/div/div';
// Format date Elements
var fdDateInput = '#datepicker4';
var formatOptionsDrop = '#format';
var defaultOption = '//*[@id="format"]/option[1]';
var isoOption = '//*[@id="format"]/option[2]';
var smallOption = '//*[@id="format"]/option[3]';
var mediumOption = '//*[@id="format"]/option[4]';
var fullOption = '//*[@id="format"]/option[5]';
var withTextOption = '//*[@id="format"]/option[6]';


module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/datepicker/');
},

ContactTitleTests: function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Datepicker | Demoqa')
},

Visibilitytests: function (client){
      var visibility = require("./Universal.js");
      visibility.Visibilitytests(client);
},

RedirectTests: function (client){
      var redirects = require("./Universal.js");
      redirects.RedirectTests(client);

},

/**
*   Tests for the Datepicker Visibility and Functionality
*/

"Datepicker Functionality, Visibility Tests": function(browser){
   browser   
// Default Functionality
      .useCss()
      .click(defaultFunctionalityTab)
      .click(dfDateInput)
      .pause(1000)
      .useXpath()
      .verify.visible(dfDatePickerHeader)
// Animations
      .useCss()
      .click(animationsTab)
      .click(aDateInput)
      .pause(1000)
      .useXpath()
      .verify.visible(aDatePickerHeader)
// Display month and Year
      .useCss()
      .click(displayMonthAndYearTab)
      .click(dmyDateInput)
      .pause(1000)
      .useXpath()
      .verify.visible(dmyDatePickerHeader)
// Formant Date
      .useCss()
      .click(formatDateTab)
      .click(fdDateInput)
      .pause(1000)
      .useXpath()
      .verify.visible(dmyDatePickerHeader)
},

after : function (browser){      
      browser
      .end();
},  

};