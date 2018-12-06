/*!
Copyright (c) 2017 - 2018 DAI Builds LLC | All Rights Reserved.
* @license: None
* @authors: Roberto Iriondo
* @author-url: https://www.robertoiriondo.com
* @copyright: DAI Builds LLC
* @description: Small text generation snippet made with javascript.
*/
"use strict";document.addEventListener("DOMContentLoaded",function(){function b(e,f,g){f<e.length?(document.querySelector("h9").innerHTML=e.substring(0,f+1)+"<span aria-hidden=\"true\"></span>",setTimeout(function(){b(e,f+1,g)},100)):"function"==typeof g&&setTimeout(g,700)}function c(e){var e=0;"undefined"==typeof d[e]&&setTimeout(function(){c(0)},2e4),e<d[e].length&&b(d[e],0,function(){c(e+1)})}var d=["create a performance oriented mobile app or website for your business","automatize your business' social media platforms","maximize your lead generation","maximize your ROI on SEO &amp; Digital Marketing"];c(0)}),$(window).bind("load",function(){$(".uw-imgcont").prop("title","News and Updates | DAI Builds Digital Marketing Agency").prop("rel","noopener"),$("a.uw-text").prop("rel","noopener"),$("a.uw-w-branding").prop("rel","noopener")});