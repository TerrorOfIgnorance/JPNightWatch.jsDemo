/**
* Variables for Page Specific Elements
*/
var defaultFunctionalityTab = '#ui-id-1';
var customizeIconsTab = '#ui-id-2';
var fillSpaceTab = '#ui-id-3';
// Default Functionality Elements
var dfTabSection1Header = '#ui-accordion-accordion-header-0';
var dfTabSection1Paragraph ='#ui-accordion-accordion-panel-0>p';
var dfTabSection2Header = '#ui-accordion-accordion-header-1';
var dfTabSection2Paragraph ='#ui-accordion-accordion-panel-1>p';
var dfTabSection3Header = '#ui-accordion-accordion-header-2';
var dfTabSection3Paragraph ='#ui-accordion-accordion-panel-2>p';
var dfTabSection4Header = '#ui-accordion-accordion-header-3';
var dfTabSection4Paragraph ='#ui-accordion-accordion-panel-3>p';
// Customize Icons Elements
var ciTabSection1Header = '#ui-accordion-accordion_icons-header-0';
var ciTabSection1Paragraph ='#ui-accordion-accordion_icons-panel-0>p';
var ciTabSection1Arrow = '//*[@id="ui-accordion-accordion_icons-header-0"]/span';
var ciTabSection2Header = '#ui-accordion-accordion_icons-header-1';
var ciTabSection2Paragraph ='#ui-accordion-accordion_icons-panel-1>p';
var ciTabSection2Arrow = '//*[@id="ui-accordion-accordion_icons-header-1"]/span';
var ciTabSection3Header = '#ui-accordion-accordion_icons-header-2';
var ciTabSection3Paragraph ='#ui-accordion-accordion_icons-panel-2>p';
var ciTabSection3Arrow = '//*[@id="ui-accordion-accordion_icons-header-2"]/span';
var ciTabSection4Header = '#ui-accordion-accordion_icons-header-3';
var ciTabSection4Paragraph ='#ui-accordion-accordion_icons-panel-3>p';
var ciTabSection4Arrow = '//*[@id="ui-accordion-accordion_icons-header-3"]/span';
var toggleIconsButton = '#toggle';
// Fill Space Elements
var fsTabSection1Header ='#ui-accordion-accordion_fill-header-0';
var fsTabSection1Paragraph ='#ui-accordion-accordion_fill-panel-0>p';
var fsTabSection2Header ='#ui-accordion-accordion_fill-header-1';
var fsTabSection2Paragraph ='#ui-accordion-accordion_fill-panel-1>p';
var fsTabSection3Header ='#ui-accordion-accordion_fill-header-2';
var fsTabSection3Paragraph ='#ui-accordion-accordion_fill-panel-2>p';
var fsTabSection4Header ='#ui-accordion-accordion_fill-header-3';
var fsTabSection4Paragraph ='#ui-accordion-accordion_fill-panel-3>p';

module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/accordion/');
},

'Draggable Title' : function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Accordion | Demoqa')
},

Visibilitytests: function (client){
      var visibility = require("./Universal.js");
      visibility.Visibilitytests(client);
},

RedirectTests: function (client){
      var redirects = require("./Universal.js");
      redirects.RedirectTests(client);

},  

"Accordion functionality tests" : function (browser){
/**
* Tests whether paragraphs are displayed when headers are clicked
* default functionality tab
*/
    browser
      .useCss()
      .click(defaultFunctionalityTab)
      .click(dfTabSection2Header)
      .verify.visible(dfTabSection2Paragraph)
      .click(dfTabSection3Header)
      .verify.visible(dfTabSection3Paragraph)
      .click(dfTabSection4Header)
      .verify.visible(dfTabSection4Paragraph)
      .click(dfTabSection1Header)
      .verify.visible(dfTabSection1Paragraph)
/**
* Tests whether paragraphs are displayed when headers are clicked
* customize icons tab
*/
      .click(customizeIconsTab)
      .click(ciTabSection2Header)
      .verify.visible(ciTabSection2Paragraph)
      .click(ciTabSection3Header)
      .verify.visible(ciTabSection3Paragraph)
      .click(ciTabSection4Header)
      .verify.visible(ciTabSection4Paragraph)
      .click(ciTabSection1Header)
      .verify.visible(ciTabSection1Paragraph)
/**
* Tests whether paragraphs are displayed when headers are clicked
* fill space tab
*/
      .click(fillSpaceTab)
      .click(fsTabSection2Header)
      .verify.visible(fsTabSection2Paragraph)
      .click(fsTabSection3Header)
      .verify.visible(fsTabSection3Paragraph)
      .click(fsTabSection4Header)
      .verify.visible(fsTabSection4Paragraph)
      .click(fsTabSection1Header)
      .verify.visible(fsTabSection1Paragraph)
},
  
after : function (browser){      
      browser
      .end();
},  
};