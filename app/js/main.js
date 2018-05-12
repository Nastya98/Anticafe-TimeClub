$(document).ready(function(){
//ANIMATE SCROLL  
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

//HAMBURGER MENU
    $.fatNav();
//TO GO
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });

//OWL-CAROUSEL HALLS
 $('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//OWL-CAROUSEL EVENTS
$('.event').owlCarousel({
    loop:true,
    pagination: true,
    center: true,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//OWL-CAROUSEL PARTNER
    $('.partner-display').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//ANIMATE PAYMENT-IMAGE
    $(".payment-img").on({
        mouseenter: function(){
            $(this).animate({  borderSpacing: -360 }, {
    		step: function(now,fx) {
     		$(this).css('-webkit-transform','rotate('+now+'deg)'); 
      		$(this).css('-moz-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');
    		},
    	duration: 300
			},'linear');
        },
        mouseleave: function(){
            $(this).animate({  borderSpacing: +360 }, {
    		step: function(now,fx) {
     		$(this).css('-webkit-transform','rotate('+now+'deg)'); 
      		$(this).css('-moz-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');
    		},
    	duration: 300
			},'linear');
        } 
    });
//MODAL WINDOW
    $('.modal-trigger').click(function(){
        $('#modal-window').fadeIn();
    });
    $('#close').click(function(){
        $('#modal-window').fadeOut();
    });

//FIXED MENU
var nav = $('.menu'),
navTopPosition = nav.offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navTopPosition) {
            nav.addClass("sticky");
            nav.addClass("background-menu");
        } else {
            nav.removeClass("sticky");
            nav.removeClass("background-menu");
        }
    });

//VALIDATION MAIN FORM
$("#commentForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        sname: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true
        }
    },
    messages: {
        email: {
            required: "E-mail обязательно для заполнения",
            email: "E-mail должен иметь '@'"
        },
        name: {
            required: "Имя обязательно должно быть заполнено",
            minlength: "Не менее 2-х символов"
        },
        sname: {
            required: "Фамилия обязательно должна быть заполнена",
            minlength: "Не менее 2-х символов"
        },
        phone: {
            required: "Телефон обязательно должен быть заполненным"
        }
    }
 });
jQuery(function($){
   $("#client-phone, #client-phone-modal").mask("+38 (999) 999-99-99");
});

//VALIDATION MODAL WINDOW
    $("#small-form").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Имя обязательно должно быть заполнено",
            minlength: "Не менее 2-х символов"
        },
        
        phone: {
            required: "Телефон обязательно должен быть заполненным"
        }
    }
 });

//SMOOTCH SCROLL
$(".menu, .fat-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
});

//SMOOTH MORE
$('.more').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
    return false; 
}); 
//ACTIVE NAV
$(document).on("scroll", onScroll);
    $("a[href^=#]").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.current").removeClass("current");
        $(this).addClass("current");
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });


//BTN MORE FOR ROOMS         
     $(".show").click(function(){
        $(this).find(".features").slideToggle()
});
     

});


//ACTIVE NAV
var menu_selector = ".menu"; 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.current").removeClass("current");
            $(this).addClass("current");
        } else {
            $(this).removeClass("current");
        }
    });
}