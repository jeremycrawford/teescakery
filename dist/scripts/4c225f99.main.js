console.log("'Allo 'Allo!"),$("#home-button").click(function(){$("body").animate({scrollTop:$("#main").offset().top},1250)}),$("#work-button").click(function(){$("body").animate({scrollTop:$("#work-header").offset().top},1250)}),$("#about-button").click(function(){$("body").animate({scrollTop:$("#about").offset().top},1e3)}),$("#contact-button").click(function(){$("body").animate({scrollTop:$("#footer").offset().top},750)}),$("#nav-arrow").click(function(){$("body").animate({scrollTop:$("#work-header").offset().top},1250)}),$(".birthday-button").click(function(){$(".birthday-gallery-container").slideToggle("slow")}),$(".anniversary-button").click(function(){$(".anniversary-gallery-container").slideToggle("slow")}),$("#exit-birthday-container").click(function(){$(".birthday-gallery-container").slideToggle("slow")}),$("#exit-anniversary-container").click(function(){$(".anniversary-gallery-container").slideToggle("slow")}),$(".birthday-button").click(function(){$("body").animate({scrollTop:$(".birthday-gallery-container").offset().top-200},750)}),$(".anniversary-button").click(function(){$("body").animate({scrollTop:$(".anniversary-gallery-container").offset().top-200},750)});