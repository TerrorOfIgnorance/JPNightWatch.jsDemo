/**
* Variables for Page Specific Elements
*/

var defaultFunctionalityTab = '#ui-id-1';
var constrainMovementTab = '#ui-id-2';
var cursorStyleTab = '#ui-id-3';
var eventsTab = '#ui-id-4';
var draggableAndSortableTab = '#ui-id-5';
// Default functionality elements
var dfDraggable = '#draggable';
// Constrain Movement elements
var verticallyDraggable = '#draggabl>p';
var horizontallyDraggable = '#draggabl2>p';
var boxContainedDraggable = '#draggabl3>p';
var parentContainedDraggable = '#draggabl5';
// Cursor Style elements
var stickToCenter = '#drag>p';
var leftAndTopMinus5 = '#drag2>p';
var bottomCursor = '#drag3>p';
// Events elements
var draggableEvent = '#dragevent';
var eventStart = '#event-start';
var eventDrag = '#event-drag';
var eventStop = '#event-stop';
// Draggable and Sortable
var dragMeDown = '#draggablebox';
var item1Box = './/*[@id="sortablebox"]/li[1]';
var item2Box = '//*[@id="sortablebox"]/li[2]';
var item3Box = '//*[@id="sortablebox"]/li[3]';
var item4Box = '//*[@id="sortablebox"]/li[4]';
var item5Box = '//*[@id="sortablebox"]/li[5]';



module.exports = {

  beforeEach: function(browser){
      browser
      .url('http://demoqa.com/draggable/');
},

  'Draggable Title' : function (client) {
  	client
      .waitForElementVisible('body', 1000)
      .assert.title('Draggable | Demoqa')
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
*     Test for the Draggable divs' Functionality
*/ 
//  Default Functionality
     "Drag and drop test" : function (browser){
      browser
      .useCss()
      .click(defaultFunctionalityTab)
      .moveToElement(dfDraggable,0,0)
      .mouseButtonDown(0)
      .moveToElement('body',100,100)
      .mouseButtonUp(0)
      .pause(3000)
      .end();
  }
}; 