/**
* Variables for Page Specific Elements
*/
var samplePost2StringLink = '/html/body/div/div/div[1]/main/article[1]/header/h2/a';
var samplePost2DateLink = '/html/body/div/div/div[1]/main/article[1]/header/div/span[1]/a/time';
var samplePost2ImgLink = '/html/body/div/div/div[1]/main/article[1]/div[2]/a/img';
var samplePostStringLink = '/html/body/div/div/div[1]/main/article[2]/header/h2/a';
var samplePostDateLink = '/html/body/div/div/div[1]/main/article[2]/header/div/span[1]/a/time';
var samplePostImgLink = '/html/body/div/div/div[1]/main/article[2]/div[2]/a/img';
var post2ReadMoreButton = '/html/body/div/div/div[1]/main/article[1]/footer/p[2]/a';
var postReadMoreButton = '/html/body/div/div/div[1]/main/article[2]/footer/p[2]/a';

module.exports = {

beforeEach: function(browser){
      browser
      .url('http://demoqa.com/blog/');
},

BlogTitleTests: function (client) {
      client
      .waitForElementVisible('body', 1000)
      .assert.title('Blog | Demoqa | Just another WordPress site')
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
* Tests whether blog specific links are functional
*/ 
// String Link post2
"Blog Specific Redirect Tests": function (browser){
      browser 
		.useXpath()
		.click(samplePost2StringLink)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post2/')
	  	.url('http://demoqa.com/blog/')
// Date Link post2
		.click(samplePost2DateLink)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post2/')
	  	.url('http://demoqa.com/blog/')
// Image Link post2
		.click(samplePost2ImgLink)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post2/')
	  	.url('http://demoqa.com/blog/')
// Button Link post2
	  	.click(post2ReadMoreButton)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post2/')
	  	.url('http://demoqa.com/blog/')
// String Link post
	  	.click(samplePostStringLink)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post/')
	  	.url('http://demoqa.com/blog/')
// Date Link post
	  	.click(samplePostDateLink)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post/')
	  	.url('http://demoqa.com/blog/')
// Image Link post
	  	.click(samplePostImgLink)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post/')
	  	.url('http://demoqa.com/blog/')
// Button Link post
	  	.click(postReadMoreButton)
		.pause(1000)
	  	.verify.urlEquals('http://demoqa.com/sample-post/')
	  	.url('http://demoqa.com/blog/')
      	.end();
},

after : function (browser){      
      browser
      .end();
}, 
};