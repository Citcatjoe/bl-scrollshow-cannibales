(function($){

	// data = [
    //     { 
    //         title: 'titre 1',
    //         chapeau: 'chapeau 1'
    //     },
    //     { 
    //         title: 'titre 2',
    //         chapeau: 'chapeau 2'
    //     }	
	// ];
	// console.log(data);

    // buildCards(data);
    // function buildCards(data){
    //     var source   = $("#card-template").html();
    //     var template = Handlebars.compile(source);
    //     var html = template({'card':data});
    //     $(".authors").prepend(html); 
    // }
    
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: "fade",
        speed: 200,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

    // var triggers = document.querySelectorAll(".trigger");
    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: '100%'}});

    // for (var tl=0; tl<triggers.length; tl++) {
		
    //    console.log(tl);
    //    new ScrollMagic.Scene({triggerElement: "#trigger"+tl})
    //    .on("enter", function (event) {
    //           console.log('connard');
    //    }).triggerHook(0.8).addTo(controller); 
    // }
    new ScrollMagic.Scene({triggerElement: "#trigger0"})
    .on("enter", function (event) {
            var i = parseInt($('#trigger0').attr('id').slice(-1));
            swiper.slideTo(i+1);
            //$('.scroller').removeClass('is-visible');
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger1"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger1').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger2').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger3"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger3').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: "#trigger4"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger4').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger5"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger5').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger6"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger6').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger7"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger7').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger8"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger8').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger9"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger9').attr('id').slice(-1));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger10"})
    .on("enter", function (event) {
        var i = parseInt($('#trigger10').attr('id').slice(-2));
        swiper.slideTo(i+1);
    }).triggerHook(0.8).addTo(controller);
        
    
    

})(jQuery);