(function($){

	var controller = new ScrollMagic.Controller();
    
   // TRIGGERS
   setTimeout(function() {

    //=====================================================================//
        // SCENE 1 TRIGGERS
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-1, LE SLIDER EST SUR LA SLIDE 01
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-1", duration: $("#trigger-scene-1").height()})
            .on("enter", function (event) {
                var i = parseInt($('#trigger-scene-1').attr('id').slice(-1));
                swiper.slideTo(i+1);
                tlScene1.restart();
            }).on("leave", function (event) {
                tlScene1.pause();              
            }).triggerHook(0.5).addIndicators({name: "TRIGGER SCENE FOULE"}).addTo(controller);
    
   }, 500);




})(jQuery);