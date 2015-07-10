/**
* Variables Representing Universal Elements Shared by all the Demo QA Pages	
*/
var middleParagraphHeading = '.entry-title';
var middleParagraph = '.entry-content>p';
var siteIcon = '.site-anchor>img';
var upperMenuHomeLink = '#menu-item-38>a';
var upperMenuAboutUsLink = '#menu-item-158>a';
var upperMenuServicesLink = '#menu-item-155>a';
var upperMenuDemoDrop = '.dropdown-toggle';
var upperMenuBlogLink = '#menu-item-65>a';
var upperMenuContactLink = '#menu-item-64>a';
var smallHomeLink = '#breadcrumbs>li>a';
var sideMenuRegistration = '#menu-item-374>a';
var sideMenuDraggable = '#menu-item-140>a';
var sideMenuDroppable = '#menu-item-141>a';
var sideMenuResizable = '#menu-item-143>a';
var sideMenuSelectable = '#menu-item-142>a';
var sideMenuSortable = '#menu-item-151>a';
var sideMenuAccordion = '#menu-item-144>a';
var sideMenuAutoComplete = '#menu-item-145>a';
var sideMenuDatepicker = '#menu-item-146>a';
var sideMenuMenu = '#menu-item-147>a';
var sideMenuSlider = '#menu-item-97>a';
var sideMenuTabs = '#menu-item-98>a';
var sideMenuTooltip = '#menu-item-99>a';
var sideMenuFramesAndWindows = '#menu-item-148>a';
var footerHeading = '.widget-title';
var footerParagraph = '.textwidget';
var facebookIcon = '.glyphicon.ipt-icon-facebook';
var twitterIcon = '.glyphicon.ipt-icon-twitter';
var googlePlusIcon = '.glyphicon.ipt-icon-google-plus';
var footerToolsQALink = '//html/body/div/footer/div[2]/p/a[1]';
var footerOneiricLink = '//html/body/div/footer/div[2]/p/a[2]';



module.exports = {

 Visibilitytests: function (client){
     client
      .useCss()
      .assert.visible('.site-anchor>img')
      .assert.visible('#menu-item-38>a')
      .assert.visible(upperMenuAboutUsLink)
      .assert.visible(upperMenuDemoDrop)
      .assert.visible(upperMenuBlogLink)
      .assert.visible(upperMenuContactLink)
      .assert.visible(sideMenuRegistration)
      .assert.visible(sideMenuDraggable)
      .assert.visible(sideMenuDroppable)
      .assert.visible(sideMenuResizable)
      .assert.visible(sideMenuSelectable)
      .assert.visible(sideMenuSortable)
      .assert.visible(sideMenuAccordion)
      .assert.visible(sideMenuAutoComplete)
      .assert.visible(sideMenuDatepicker)
      .assert.visible(sideMenuMenu)
      .assert.visible(sideMenuSlider)
      .assert.visible(sideMenuTabs)
      .assert.visible(sideMenuTooltip)
      .assert.visible(sideMenuFramesAndWindows)
      .assert.visible(footerHeading)
      .assert.visible(footerParagraph)
      .assert.visible(facebookIcon)
      .assert.visible(twitterIcon)
      .assert.visible(googlePlusIcon)
      .useXpath()
      .assert.visible(footerToolsQALink)
      .assert.visible(footerOneiricLink) 
      
},

RedirectTests: function (client){ 
      client
      .useCss()
//  Services tab redirect       
      .click(upperMenuServicesLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/services/')
//  Site Icon redirect
      .click(siteIcon)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/')
//  Upper Home Link redirect
      .click(upperMenuHomeLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/')
//  Upper Blog Link redirect
      .click(upperMenuBlogLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/blog/')
//  Upper Contact Link redirect
      .click(upperMenuContactLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/contact/')
//  Small Home Link redirect
      .click(smallHomeLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/')
//  Side Menu Registration redirect
      .click(sideMenuRegistration)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/registration/')
//  Side Menu Draggable redirect
      .click(sideMenuDraggable)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/draggable/')
//  Side Menu Droppable redirect
      .click(sideMenuDroppable)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/droppable/')
//  Side Menu Resizable redirect
      .click(sideMenuResizable)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/resizable/')
//  Side Menu Selectable redirect
      .click(sideMenuSelectable)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/selectable/')      
//  Side Menu Sortable redirect
      .click(sideMenuSortable)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/sortable/')
//  Side Menu Accordion redirect
      .click(sideMenuAccordion)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/accordion/')
//  Side Menu Autocomplete redirect
      .click(sideMenuAutoComplete)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/autocomplete/')
//  Side Menu Datepicker redirect
      .click(sideMenuDatepicker)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/datepicker/')
//  Side Menu Menu redirect
      .click(sideMenuMenu)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/menu/')
//  Side Menu Slider redirect
      .click(sideMenuSlider)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/slider/')
//  Side Menu Tabs redirect
      .click(sideMenuTabs)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/tabs/')
//  Side Menu Tooltip redirect
      .click(sideMenuTooltip)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/tooltip/')
//  Side Menu Frames and Windows redirect
      .click(sideMenuFramesAndWindows)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/frames-and-windows/')
//  ToolsQA Link redirect
      .useXpath()
      .click(footerToolsQALink)
      .pause(4000)
      .verify.urlEquals('http://www.toolsqa.com/')
      }
};


