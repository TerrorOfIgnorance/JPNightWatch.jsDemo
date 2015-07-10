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
var footerHeading = '.widget-title';
var footerParagraph = '.textwidget';
var facebookIcon = '.glyphicon.ipt-icon-facebook';
var twitterIcon = '.glyphicon.ipt-icon-twitter';
var googlePlusIcon = '.glyphicon.ipt-icon-google-plus';
var footerToolsQALink = '//html/body/div/footer/div[2]/p/a[1]';
var footerOneiricLink = '//html/body/div/footer/div[2]/p/a[2]';

/**
* Variables for Page Specific Elements
*/

module.exports = {
  'Sample Post Title and Visibility' : function (client) {
  	client
      .url('http://demoqa.com/sample-post/')
      .waitForElementVisible('body', 1000)
      .assert.title('Sample Post | Demoqa')
      .assert.visible(siteIcon)
      .assert.visible(upperMenuHomeLink)
      .assert.visible(upperMenuAboutUsLink)
      .assert.visible(upperMenuDemoDrop)
      .assert.visible(upperMenuBlogLink)
      .assert.visible(upperMenuContactLink)
      .assert.visible(footerHeading)
      .assert.visible(footerParagraph)
      .assert.visible(facebookIcon)
      .assert.visible(twitterIcon)
      .assert.visible(googlePlusIcon)
//  Services tab redirect       
      .click(upperMenuServicesLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/services/')
      .url('http://demoqa.com/sample-post')
//  Site Icon redirect
      .click(siteIcon)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/')
      .url('http://demoqa.com/sample-post')
//  Upper Home Link redirect
      .click(upperMenuHomeLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/')
      .url('http://demoqa.com/sample-post')
//  Upper Blog Link redirect
      .click(upperMenuBlogLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/blog/')
      .url('http://demoqa.com/sample-post')
//  Upper Contact Link redirect
      .click(upperMenuContactLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/contact/')
      .url('http://demoqa.com/sample-post')
//  Small Home Link redirect
      .click(smallHomeLink)
      .pause(2000)
      .verify.urlEquals('http://demoqa.com/')
      .url('http://demoqa.com/sample-post')
//  ToolsQA Link redirect
      .useXpath()
      .click(footerToolsQALink)
      .pause(4000)
      .verify.urlEquals('http://www.toolsqa.com/')
      .url('http://demoqa.com/sample-post')
      .assert.visible(footerToolsQALink)
      .assert.visible(footerOneiricLink) 
      .end();
  }
};