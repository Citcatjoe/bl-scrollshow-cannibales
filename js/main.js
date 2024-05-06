(function($){

	window.scrollTo(0, 0);

    // $(window).on('resize', function() {
    //     location.reload();
    // });
    
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
        fadeEffect: { crossFade: true },
        speed: 350,
        allowTouchMove: false,
      
        
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        
    });

    // alert($(window).width());
    // alert($(window).height());
    
    
    var controller = new ScrollMagic.Controller();

    $body = $('body');
    var $story = $('.story');
    
    // DANS LA ZONE TRIGGER 0 (HERO), LE SLIDER EST SUR LA SLIDE 00
    new ScrollMagic.Scene({triggerElement: "#trigger0", duration: $("#trigger0").height()})
    .on("enter", function (event) {
            var i = parseInt($('#trigger0').attr('id').slice(-1));
            swiper.slideTo(i+1);
            
            tlIntroAmitBlink.seek('startblink');
            tlIntroAmitBlink.play();

            //Commented because already Burns
            //tlBurn.seek('startblink');
            tlBurn.play();

    }).triggerHook(1)
    // .addIndicators({name: "TRIGGER HERO"})
    .addTo(controller);

    // ZONE CHAPEAU
    new ScrollMagic.Scene({triggerElement: ".chapeau", duration: $(".chapeau").height()})
    .on("enter", function (event) {
            var i = parseInt($('#trigger0').attr('id').slice(-1));
            swiper.slideTo(i+1);
            
           

            //Commented because already Burns
            //tlBurn.seek('startblink');
            tlBurn.play();

    }).triggerHook(1)
    // .addIndicators({name: "TRIGGER CHAPEAU BACK DEBUT"})
    .addTo(controller);


    



    // TRIGGERS
    setTimeout(function() { 

        //tlScene1.restart(); //WORK !!!
        //tlScene1.seek("test"); // WORK !!!
        //=====================================================================//
        // SCENE 1 TRIGGERS
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-1, LE SLIDER EST SUR LA SLIDE 01
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-1", duration: $("#trigger-scene-1").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    
                    tlIntroAmitBlink.pause();
                    tlIntroAmitBlink.seek('startblink');

                    tlBurn.pause();
                    tlBurn.seek('startburn');

                    tlScene1.seek('start');
                    tlScene1.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene1.tweenTo('stop1');
                }
                swiper.slideTo(2);  
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            // .addIndicators({name: "TRIGGER SCENE 1"})
            .addTo(controller);
        

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-1b", duration: $("#trigger-scene-1b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene1.tweenTo('stop2');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene1.tweenTo('stop2');
                }
                swiper.slideTo(2);  
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            // .addIndicators({name: "TRIGGER SCENE 1 B"})
            .addTo(controller);
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-1c", duration: $("#trigger-scene-1c").height() +140})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene1.tweenTo('end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene1.seek('end');
                    s02BlinkTl.seek('start'); 
                    s02BlinkTl.pause();  
                }
                swiper.slideTo(2);  
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            // .addIndicators({name: "TRIGGER SCENE 1 C"})
            .addTo(controller);










        //=====================================================================//
        // SCENE 2 - 4è SLIDE - TRIGGER
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-2", duration: $("#trigger-scene-2").height() +90 })
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene2.tweenFromTo('start', 'end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene2.tweenTo('end');
                }
                swiper.slideTo(4);
            }).on("leave", function (event) {
                // tlScene2.pause();  
                // s02BlinkTl.pause();      
            }).triggerHook(0.8)
            // .addIndicators({name: "TRIGGER SCENE 02"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-2b", duration: $("#trigger-scene-2b").height() })
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    s02BlinkTl.seek('start'); 
                    s02BlinkTl.pause();
                    tlScene2.tweenTo('closure');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene1.seek('end');
                }
                swiper.slideTo(4);
            }).on("leave", function (event) {
                tlScene2.pause();  
                s02BlinkTl.pause();      
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 02 B"})
            .addTo(controller);







        //=====================================================================//
        // SCENE 3 - 5è SLIDE - TRIGGER
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-3", duration: $("#trigger-scene-3").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    s02BlinkTl.seek('start'); 
                    s02BlinkTl.pause();
                    tlScene3.seek('start');
                    tlScene3.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene3.tweenTo('stop1');
                }
                swiper.slideTo(6);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 03"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-3b", duration: $("#trigger-scene-3b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene3.tweenTo('stop2');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene3.tweenTo('stop2');
                }
                swiper.slideTo(6);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 03 B"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-3c", duration: $("#trigger-scene-3c").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene3.tweenTo('end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene3.seek('end');
                }
                swiper.slideTo(6);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 03 C"})
            .addTo(controller);

        //=====================================================================//
        // SCENE 4 - 6è SLIDE - TRIGGER
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-4", duration: $("#trigger-scene-4").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene4.seek('start');
                    tlScene4.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene4.tweenTo('stop1');
                }
                swiper.slideTo(7);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 04"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-4b", duration: $("#trigger-scene-4b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene4.tweenTo('stop2');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene4.tweenTo('stop2');
                }
                swiper.slideTo(7);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 04 B"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-4c", duration: $("#trigger-scene-4c").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene4.tweenTo('end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene4.seek('end');
                    s0506BlinkTl.pause();
                    s0506BlinkTl.seek('startblink');
                }
                swiper.slideTo(7);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 04 C"})
            .addTo(controller);


        //=====================================================================//
        // SCENE 5-6
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-5", duration: $("#trigger-scene-5").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene56.seek('start');
                    tlScene56.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene56.tweenTo('stop1');
                }
                swiper.slideTo(11);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 05"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-5b", duration: $("#trigger-scene-5b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {

                    s0506BlinkTl.pause();
                    s0506BlinkTl.seek('startblink');
                    tlScene56.tweenTo('stop2');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene56.tweenTo('stop2');
                    s0506BlinkTl.play();
                    s0506BlinkTl.seek('start');
                }
                swiper.slideTo(11);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 05 B"})
            .addTo(controller);

        

        //=====================================================================//
        // SCENE 6 *NEW*
        //=====================================================================//
        
        tlSvComesIn =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            
            .fromTo($s06SvCorps, 0.25, {autoAlpha: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, transformOrigin: "right bottom"}, "+=1");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6z", duration: $("#trigger-scene-6z").height()})
            .on("enter", function (event) {
                s0506BlinkTl.pause();
                s0506BlinkTl.seek('startblink');
                tlSvComesIn.play();
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 06 Z"})
            .addTo(controller);

        // DIALOGUES 1 ET 2
        $dialog1 = $('.dialog-1');
        $typing1 = $('.typing-1');
        $dots1 = $typing1.find('.dot');

        $dialog2 = $('.dialog-2');
        $typing2 = $('.typing-2');
        $dots2 = $typing2.find('.dot');

        tlDialog12 =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
           
            .staggerTo($dots1, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots1, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots1, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots1, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog1, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "right bottom"})
            .to($typing1, 0.25, {autoAlpha: 0}, "-=0.25")
            
            .fromTo($s06AmitCorps, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "+=0.25")
            .fromTo($typing2, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "-=0.25")
            .fromTo($s06AmitPupilles, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "-=0.25")
            .fromTo($s06AmitYeuxOuverts, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "-=0.25")
            
            
            .staggerTo($dots2, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots2, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots2, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots2, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog2, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "left bottom"})
            .to($typing2, 0.25, {autoAlpha: 0}, "-=0.25");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6", duration: $("#trigger-scene-6").height()})
            .on("enter", function (event) {
                tlDialog12.play();
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER SCENE 06"})
            .addTo(controller);

        // DIALOGUES 3 ET 4
        $dialog3 = $('.dialog-3');
        $typing3 = $('.typing-3');
        $dots3 = $typing3.find('.dot');

        $dialog4 = $('.dialog-4');
        $typing4 = $('.typing-4');
        $dots4 = $typing4.find('.dot');

        tlDialog34 =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            .staggerTo($dots3, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots3, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots3, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots3, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog3, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "right bottom"})
            .to($typing3, 0.25, {autoAlpha: 0}, "-=0.25")
            
            .fromTo($typing4, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "+=0.25")
            .staggerTo($dots4, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots4, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots4, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots4, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog4, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "left bottom"})
            .to($typing4, 0.25, {autoAlpha: 0}, "-=0.25");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6b", duration: $("#trigger-scene-6b").height()})
            .on("enter", function (event) {
                tlDialog34.play();
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER SCENE 06 B"})
            .addTo(controller);

        // DIALOGUES 5 ET 6
        $dialog5 = $('.dialog-5');
        $typing5 = $('.typing-5');
        $dots5 = $typing5.find('.dot');

        $dialog6 = $('.dialog-6');
        $typing6 = $('.typing-6');
        $dots6 = $typing6.find('.dot');

        tlDialog56 =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            .staggerTo($dots5, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots5, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots5, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots5, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog5, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "right bottom"})
            .to($typing5, 0.25, {autoAlpha: 0}, "-=0.25")
            
            .fromTo($typing6, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "+=0.25")
            .staggerTo($dots6, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots6, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots6, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots6, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog6, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "left bottom"})
            .to($typing6, 0.25, {autoAlpha: 0}, "-=0.25");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6c", duration: $("#trigger-scene-6c").height()})
            .on("enter", function (event) {
                tlDialog56.play();
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER SCENE 06 C"})
            .addTo(controller);

        // DIALOGUES 7 ET 8
        $dialog7 = $('.dialog-7');
        $typing7 = $('.typing-7');
        $dots7 = $typing7.find('.dot');

        $dialog8 = $('.dialog-8');
        $typing8 = $('.typing-8');
        $dots8 = $typing8.find('.dot');

        tlDialog78 =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            .staggerTo($dots7, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots7, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots7, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots7, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog7, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "right bottom"})
            .to($typing7, 0.25, {autoAlpha: 0}, "-=0.25")
            
            .fromTo($typing8, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "+=0.25")
            .staggerTo($dots8, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots8, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots8, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots8, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog8, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "left bottom"})
            .to($typing8, 0.25, {autoAlpha: 0}, "-=0.25");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6d", duration: $("#trigger-scene-6d").height()})
            .on("enter", function (event) {
                tlDialog78.play();
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER SCENE 06 D"})
            .addTo(controller);

        // DIALOGUES 9 ET 10
        $dialog9 = $('.dialog-9');
        $typing9 = $('.typing-9');
        $dots9 = $typing9.find('.dot');

        $dialog10 = $('.dialog-10');
        $typing10 = $('.typing-10');
        $dots10 = $typing10.find('.dot');

        tlDialog910 =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            .staggerTo($dots9, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots9, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots9, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots9, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog9, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "right bottom"})
            .to($typing9, 0.25, {autoAlpha: 0}, "-=0.25")
            
            .fromTo($typing10, 0.25, {autoAlpha: 0}, {autoAlpha: 1}, "+=0.25")
            .staggerTo($dots10, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots10, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots10, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots10, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog10, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "left bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "left bottom"})
            .to($typing10, 0.25, {autoAlpha: 0}, "-=0.25");
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6e", duration: $("#trigger-scene-6e").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlDialog910.play();
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlDialog910.seek('end');
                    tlDialog11.tweenTo('stop1-=0.5');
                }
                
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER SCENE 06 E"})
            .addTo(controller);

        // DIALOGUE 11 + VANISH
        $dialog11 = $('.dialog-11');
        $typing11 = $('.typing-11');
        $dots11 = $typing11.find('.dot');

        $wiggle = $('.wiggle');

        tlDialog11 =  new TimelineMax({ paused: true, immediateRender: true, repeat: 0})
            .addLabel('start')
            .staggerTo($dots11, 0.3, {autoAlpha: 0.5}, 0.15)
            .staggerTo($dots11, 0.3, {autoAlpha: 1}, 0.15)
            .staggerTo($dots11, 0.3, {autoAlpha: 0.5}, 0.15, "-=0.1")
            .staggerTo($dots11, 0.3, {autoAlpha: 1}, 0.15, "-=0.1")
            .fromTo($dialog11, 0.25, {autoAlpha: 0, scale: 0, transformOrigin: "right bottom"}, {autoAlpha: 1, scale: 1, transformOrigin: "right bottom"})


            .to($('.wiggle'), 0, {x: "+3px", y: "+7px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "+7px", y: "-2px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "-5px", y: "-5px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "-6px", y: "+6px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "-9px", y: "+7px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "+7px", y: "-4px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "+5px", y: "+8px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "-4px", y: "+9px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "-3px", y: "-3px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "+8px", y: "-7px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "+3px", y: "+3px"}, "+=0.05")
            .to($('.wiggle'), 0, {x: "0", y: "0"}, "+=0.05")


            .to($typing11, 0.25, {autoAlpha: 0}, "-=1")
            .addLabel('stop1')
            .to($s06SvCorps, 0.5, { autoAlpha: 0.25, ease: "none" }, "-=0.5")
            .to($s06SvCorps, 0.5, { autoAlpha: 1, ease: "none" })
            .to($s06SvCorps, 0.5, { autoAlpha: 0.25, ease: "none" })
            .to($s06SvCorps, 0.5, { autoAlpha: 1, ease: "none" })
            .to($s06SvCorps, 0.5, { autoAlpha: 0, ease: "none" })
            .to($s06SvGone, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "+=0.75")
            .addLabel('end');
            
           
        
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-6f", duration: $("#trigger-scene-6f").height()})
            .on("enter", function (event) {

                tlDialog11.play();
                // if (event.scrollDirection === 'FORWARD') 
                // {
                //     tlDialog11.play();
                // } else if (event.scrollDirection === 'REVERSE') 
                // {
                //     tlDialog11.seekd('end');
                // }
                
                swiper.slideTo(16);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER SCENE 06 F"})
            .addTo(controller);

       
        

        //=====================================================================//
        // SCENE 7
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-7", duration: $("#trigger-scene-7").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    s0506BlinkTl.pause();
                    s0506BlinkTl.seek('startblink');
                    //alert('ici');
                    //tlScene56.pause();
                    tlScene7.seek('start');
                    tlScene7.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    // tlScene7.tweenTo('stop1');
                }
                swiper.slideTo(12);
            }).on("leave", function (event) {
                tlScene7.pause();
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 7"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-7b", duration: $("#trigger-scene-7b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    // tlScene4.seek('start');
                    tlScene7.tweenTo('stop2');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene7.tweenTo('stop2');
                }
                swiper.slideTo(12);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 7 B"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-7c", duration: $("#trigger-scene-7c").height() +90})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    // tlScene4.seek('start');
                    tlScene7.tweenTo('end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene7.seek('end');
                    s08BlinkTl.pause();
                    
                }
                swiper.slideTo(12);
            }).on("leave", function (event) {
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 7 C"})
            .addTo(controller);

        //=====================================================================//
        // SCENE 8
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-scene-8", duration: $("#trigger-scene-8").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene8.seek('start');
                    tlScene8.tweenTo('stop1');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    s08BlinkTl.seek('startblink');
                    s08BlinkTl.pause();
                    tlScene8.tweenTo('start');
                //    alert('ICI');
                }
                swiper.slideTo(14);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-8b", duration: $("#trigger-scene-8b").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    tlScene8.tweenTo('stop2');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    s08BlinkTl.pause();
                    tlScene8.tweenTo('stop2');
                   
                }
                swiper.slideTo(14);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8B"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#trigger-scene-8c", duration: $("#trigger-scene-8c").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {   
                    tlScene8.tweenTo('end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    tlScene8.seek('end');
                    s08BlinkTl.play();
                }
                swiper.slideTo(14);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER SCENE 8C"})
            .addTo(controller);

        //=====================================================================//
        // OUTRO
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-outro", duration: $("#trigger-outro").height()})
        .on("enter", function (event) {
            if (event.scrollDirection === 'FORWARD') 
            {
                s08BlinkTl.pause();
                tlSceneOutro.play();
            } else if (event.scrollDirection === 'REVERSE') 
            {
               
               
            }
            swiper.slideTo(17);
        }).on("leave", function (event) {
           
        }).triggerHook(0.8)
        //.addIndicators({name: "TRIGGER OUTRO"})
        .addTo(controller);

        //=====================================================================//
        // END
        //=====================================================================//
        // DANS LA ZONE TRIGGER-SCENE-2, LE SLIDER EST SUR LA SLIDE 02
        new ScrollMagic.Scene({triggerElement: "#trigger-end", duration: $("#trigger-end").height()})
            .on("enter", function (event) {
                if (event.scrollDirection === 'FORWARD') 
                {
                    
                    // tlScene56.pause();
                    // tlScene7.seek('start').tweenTo('stop1');
                 
                    //s08BlinkTl.play();
                    //tlScene8.tweenFromTo('start', 'end');
                } else if (event.scrollDirection === 'REVERSE') 
                {
                    //tlScene7.tweenTo('stop1');
                    //tlScene8.pause();
                   
                }
                swiper.slideTo(15);
            }).on("leave", function (event) {
               
            }).triggerHook(0.8)
            //.addIndicators({name: "TRIGGER END"})
            .addTo(controller);
        


        //=====================================================================//
        // NOTIFICATION (ANDREOLI 1) TRIGGER
        //=====================================================================//
        new ScrollMagic.Scene({triggerElement: "#trigger-notif-andreoli1"})
            .on("enter", function (event) {
                var notif = $('.notification-andreoli1');
                revealNotification(notif);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER ANDREOLI 1"})
            .addTo(controller);
        
        //=====================================================================//
        // NOTIFICATION  (PAREIN 1) TRIGGER
        //=====================================================================//
        new ScrollMagic.Scene({triggerElement: "#trigger-notif-parein1"})
        .on("enter", function (event) {
            var notif = $('.notification-parein1');
            revealNotification(notif);
        }).on("leave", function (event) {
        }).triggerHook(1)
        //.addIndicators({name: "TRIGGER PAREIN 1"})
        .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (ANDREOLI 2) TRIGGER
        //=====================================================================//
        new ScrollMagic.Scene({triggerElement: "#trigger-notif-andreoli2"})
            .on("enter", function (event) {
                var notif = $('.notification-andreoli2');
                revealNotification(notif);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER ANDREOLI 2"})
            .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (TATONE 1) TRIGGER
        //=====================================================================//
        new ScrollMagic.Scene({triggerElement: "#trigger-notif-tatone1"})
            .on("enter", function (event) {
                var notif = $('.notification-tatone1');
                revealNotification(notif);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER TATONE 1"})
            .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (ANDREOLI 3) TRIGGER
        //=====================================================================//
        new ScrollMagic.Scene({triggerElement: "#trigger-notif-andreoli3"})
            .on("enter", function (event) {
                var notif = $('.notification-andreoli3');
                revealNotification(notif);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER ANDREOLI 3"})
            .addTo(controller);

        //=====================================================================//
        // NOTIFICATION (TATONE 2) TRIGGER
        //=====================================================================//
        new ScrollMagic.Scene({triggerElement: "#trigger-notif-tatone2"})
            .on("enter", function (event) {
                var notif = $('.notification-tatone2');
                revealNotification(notif);
            }).on("leave", function (event) {
            }).triggerHook(1)
            //.addIndicators({name: "TRIGGER TATONE 2"})
            .addTo(controller);

     
           
        //=====================================================================//
        // FOOTER TRIGGER
        //=====================================================================//
        // new ScrollMagic.Scene({triggerElement: "#trigger10"})
        //     .on("enter", function (event) {
        //         var i = parseInt($('#trigger10').attr('id').slice(-2));
        //         swiper.slideTo(i+1);
        //     }).triggerHook(0.5).addTo(controller);

        
    }, 500);


    tlIntro =  new TimelineMax({ 
        paused: false, 
        immediateRender: true
    });
    $IntroAmitElems = $('.intro-amit-elems'),
    $IntroElems = $('.intro-elements'),
    $IntroAmitCorps = $IntroAmitElems.find('.intro-amit-corps'),
    //$IntroAmitPupilles = $IntroAmitElems.find('.intro-amit-pupilles'),
    $IntroAmitYeuxOuverts = $IntroAmitElems.find('.intro-amit-yeux-ouverts'),
    $IntroAmitYeuxFermes = $IntroAmitElems.find('.intro-amit-yeux-fermes'),
    $IntroAuteur = $IntroElems.find('.intro-auteur'),
    $introFigure = $IntroElems.find('figure'),
    $introTable1 = $IntroElems.find('.intro-table1'),
    $introTable2 = $IntroElems.find('.intro-table2'),
    $introTable3 = $IntroElems.find('.intro-table3'),
    $introTable4 = $IntroElems.find('.intro-table4'),
    $introH1a = $IntroElems.find('.intro-h1a'),
    $introH1b = $IntroElems.find('.intro-h1b'),
    $introSt = $IntroElems.find('.st');
   
    setStageIntro();
    function setStageIntro(){
        var clearTl = new TimelineMax();
        clearTl
            .set($IntroAmitElems, { autoAlpha: 0, x: "-=5px", transformOrigin: "center center"})
            //.set($IntroAmitPupilles, { transformOrigin: "center center" })
            .set($IntroAmitYeuxFermes, { autoAlpha: 0 })
            .set($IntroElems, { autoAlpha: 1 })
            .set($introFigure, { autoAlpha: 0.1, transformOrigin: "center center" })
            .set($introTable1, { autoAlpha: 1, x: "-5px" })
            .set($introTable2, { autoAlpha: 0, x: "-5px" })
            .set($introTable3, { autoAlpha: 0, x: "-5px" })
            .set($introTable4, { autoAlpha: 0, x: "-5px" })
            .set($IntroAuteur, { autoAlpha: 0 })
            .set($introH1a, { autoAlpha: 0, y: "+=20px" })
            .set($introH1b, { autoAlpha: 0, y: "+=20px" })
            .set($introSt, { autoAlpha: 0 })

            
        return clearTl;
        
    }

   

    tlIntro
        .addLabel('start')
            .to($introTable1, 0, { autoAlpha: 1, ease: Power4.easeInOut })
            .to($introFigure, 5, { autoAlpha: 1, scale: 1, transformOrigin: "center center", ease: Power4.easeInOut })
            .to($introH1a, 3, { autoAlpha: 1, y: "-=20px", ease: Power4.easeInOut }, "-=2.5")
            .to($introH1b, 3, { autoAlpha: 1, y: "-=20px", ease: Power4.easeInOut }, "-=2")
            .to($IntroAuteur, 2, { autoAlpha: 0.5, ease: Power4.easeInOut },"-=4")
            .to($IntroAmitElems, 2, { autoAlpha: 0.1, x: "+=5px", ease: Power4.easeInOut },"-=4")
            .to($introSt, 2, { autoAlpha: 0.5, ease: Power4.easeInOut })
            .to($IntroAmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut },"-=1")
            //.to($IntroAmitPupilles, 0, { x: "+=5px", y: "+=5px", ease: Power4.easeInOut }, "-=0.9")
            .to($IntroAmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut, onComplete: playTlIntroAmitBlink }, "-=0.75");

    // $story.on('click', function() {
    //     testTl.play();
    // });
   
    var tlBurn = new TimelineMax({ paused: false, repeat: -1 })
        // BLINK MOTHER FUCKER
        .addLabel('startburn')
        .to($introTable2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($introTable1, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($introTable3, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($introTable2, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($introTable4, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($introTable3, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($introTable1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($introTable4, 0, { autoAlpha: 0, ease: Power4.easeInOut })
        .addLabel('endburn');
    
    function playTlIntroAmitBlink(){
        tlIntroAmitBlink.play();
    }

    var tlIntroAmitBlink = new TimelineMax({ paused: true, repeat: -1 })
        .addLabel('startblink')
        .to($IntroAmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=5")
        .to($IntroAmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .to($IntroAmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($IntroAmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .addLabel('endblink');



    //=====================================================================//
    // SCENE 1
    //=====================================================================//
    tlScene1 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $s01 = $('.s01'),
    $s01Toque = $s01.find('.s01-toque'),
    $s01Meuf = $s01.find('.s01-meuf'),
    $s01Echarpe = $s01.find('.s01-echarpe'),
    $s01Chauve = $s01.find('.s01-chauve'),
    $s01Oeuf = $s01.find('.s01-oeuf'),
    $s01Detective = $s01.find('.s01-detective'),
    $s01Couteau = $s01.find('.s01-couteau'),
    $s01Croise = $s01.find('.s01-croise'),
    $s01Dahmer = $s01.find('.s01-dahmer'),
    $s01Sandwich = $s01.find('.s01-sandwich'),
    $s01Ventre = $s01.find('.s01-ventre'),
    $s01Cigarette = $s01.find('.s01-cigarette'),
    $s01Casquette = $s01.find('.s01-casquette'),
    $s01Valise = $s01.find('.s01-valise'),
    $s01Derniere = $s01.find('.s01-derniere'),
    $s01Forte = $s01.find('.s01-forte'),
    $s01Sac = $s01.find('.s01-sac'),
    $s01All = [$s01Toque, $s01Meuf, $s01Echarpe, $s01Chauve, $s01Oeuf, $s01Detective, $s01Couteau, $s01Croise, $s01Dahmer, $s01Sandwich, $s01Ventre, $s01Cigarette, $s01Casquette, $s01Valise, $s01Derniere, $s01Forte, $s01Sac];

    if ($(window).width() < 750) {
        //MOBILE
        s01Top = "35%";
        s01Width = "110%";
    }
     else {
        //DESKTOP
        s01Top = "50%";
        s01Width = "50%";
    }

    setStage1();
    function setStage1(){
        var clearTl = new TimelineMax();
        clearTl
            .set($s01, { autoAlpha: 0, width: s01Width, left:"50%", top: s01Top,  scale: 1, xPercent: -50, yPercent: -50, transformOrigin: "center center" })
            //EUX SONT DECALES A GAUCHE
            .set($s01Toque, { autoAlpha: 0, xPercent: +5, transformOrigin: "center center" })
            .set($s01Forte, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s01Derniere, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s01Sac, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s01Oeuf, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s01Echarpe, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s01Couteau, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s01Croise, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s01Dahmer, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            //EUX SONT DECALES A DROITE
            .set($s01Meuf, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s01Valise, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Forte, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Casquette, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Chauve, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Detective, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Sandwich, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Ventre, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s01Cigarette, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" });
        return clearTl;
    }
    tlScene1
        .addLabel('start')
        .to($s01, 1, {autoAlpha: 1})
        .to($s01Toque, 1, {autoAlpha: 1})
        .addLabel('stop1')
        .to($s01Toque, 1, {xPercent: 0})
        .to($s01Meuf, 1, {autoAlpha: 1})
        .to($s01Forte, 1, {autoAlpha: 1, x: "+=20px"}, "-=0.8")
        .to($s01Ventre, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .addLabel('stop2')
        
        .to($s01Dahmer, 1, {autoAlpha: 1, x: "+=20px"})
        .to($s01Valise, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .to($s01Sac, 1, {autoAlpha: 1, x: "+=20px"}, "-=0.8")
        .to($s01Sandwich, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .to($s01Croise, 1, {autoAlpha: 1, x: "+=20px"}, "-=0.8")
        .to($s01Casquette, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .to($s01Echarpe, 1, {autoAlpha: 1, x: "+=20px"}, "-=0.8")
        .to($s01Chauve, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .to($s01Couteau, 1, {autoAlpha: 1, x: "+=20px"}, "-=0.8")
        .to($s01Cigarette, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .to($s01Oeuf, 1, {autoAlpha: 1, x: "+=20px"}, "-=0.8")
        .to($s01Detective, 1, {autoAlpha: 1, x: "-=20px"}, "-=0.8")
        .to($s01Derniere, 1, {autoAlpha: 1}, "-=0.8")
        .addLabel('end');

        
    //=====================================================================//
    // SCENE 2
    //=====================================================================//
    tlScene2 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $s02 = $('.s02'),
    $s021 = $s02.find('.s02-1'),
    $s022 = $s02.find('.s02-2'),
    $s023 = $s02.find('.s02-3'),
    $s024 = $s02.find('.s02-4'),
    $s025 = $s02.find('.s02-5'),
    $s026 = $s02.find('.s02-6'),
    $alls02 = [$s021, $s022, $s023, $s024, $s025, $s026];

    if ($(window).width() < 750) {
        //MOBILE
        s02Top = "35%";
    }
     else {
        //DESKTOP
        s02Top = "50%";
    }


    setStage2();
    function setStage2(){
        var clearTl = new TimelineMax();
        clearTl
            .set($s02, { autoAlpha: 1, width: "80%", left:"50%", top: s02Top,  scale: 1, xPercent: -50, yPercent: -50, transformOrigin: "center center" })
            .set($s021, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s022, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s023, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s024, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s025, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s026, { autoAlpha: 0, transformOrigin: "center center" });
          
        return clearTl;
        
    }
    tlScene2
        .addLabel('start')
        .to($s021, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .addLabel('closure')
        .to($s021, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .to($s022, 0, { autoAlpha: 1, ease: Power4.easeInOut })
       
        .to($s022, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .to($s023, 0, { autoAlpha: 1, ease: Power4.easeInOut })

        .to($s023, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .to($s024, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        
        .to($s024, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .to($s025, 0, { autoAlpha: 1, ease: Power4.easeInOut })

        .to($s026, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")

        .to($s026, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .to($s026, 0, { autoAlpha: 1, ease: Power4.easeInOut, onComplete: playBlinks02 }, "+=0.25")
        
        .add(s02BlinkTl, "+=2.25")
        .addLabel('end');
    
    var s02BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
        // BLINK MOTHER FUCKER
        .addLabel('startblink')
        .to($s026, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=5")
        
        .to($s026, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")

        .to($s026, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        
        .to($s026, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .addLabel('endblink');
        
        
    function playBlinks02(){
        s02BlinkTl.seek('startblink');
        s02BlinkTl.play();
        //alert('play');
    }
        
        
   

    //=====================================================================//
    // SCENE 3
    //=====================================================================//
    tlScene3 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s03 = $('.s03'),
    $s03e1 = $s03.find('.s03-1'),
    $s03e2 = $s03.find('.s03-2'),
    $s03p1 = $s03.find('.s03-3'),
    $s03p2 = $s03.find('.s03-4'),
    $s03p3 = $s03.find('.s03-5'),
    $s03p4 = $s03.find('.s03-6');
    
    if ($(window).width() < 750) {
        //MOBILE
        s03Top = "35%";
    }
     else {
        //DESKTOP
        s03Top = "50%";
    }
    
    setStage3();
    function setStage3(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s03, { autoAlpha: 1, width: "80%", left:"50%", top: s03Top,  scale: 1, xPercent: -50, yPercent: -50, transformOrigin: "center center" })
            .set($s03e1, { autoAlpha: 1, transformPerspective:800, rotationX:90, transformOrigin: "center 80%" })
            .set($s03e2, { autoAlpha: 1, transformPerspective:800, rotationX:90, transformOrigin: "center 50%" })
            .set($s03p1, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s03p2, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s03p3, { autoAlpha: 0, x: "-=20px", transformOrigin: "center center" })
            .set($s03p4, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" });
          
        return clearTl;
        
    }

    tlScene3
        .addLabel('start')
        .to($s03e1, 1, { autoAlpha: 1, rotationX:0, ease:"elastic.out(0.75)" }, "+=0.5")
        .to($s03e2, 1, { autoAlpha: 1, rotationX:0, ease:"elastic.out(0.75)" }, "-=0.7")

        .addLabel('stop1')
        .to($s03p1, 2, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut })
        .to($s03p2, 2, { autoAlpha: 1, x: "-=20px", ease: Power4.easeInOut }, "-=1.5")

        .addLabel('stop2')
        .to($s03p3, 2, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut }, "+=0.5")
        .to($s03p4, 2, { autoAlpha: 1, x: "-=20px", ease: Power4.easeInOut }, "-=1.5")
        .addLabel('end');

    
    //=====================================================================//
    // SCENE 4
    //=====================================================================//
    tlScene4 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s04 = $('.s04');
    $s04Table = $s04.find('.s04-table');
    $s04Homme1 = $s04.find('.s04-homme1');
    $s04Homme2 = $s04.find('.s04-homme2');
    $s04Homme1Mains = $s04.find('.s04-homme1-mains');
    $s04Femme1 = $s04.find('.s04-femme1');
    $s04Femme2 = $s04.find('.s04-femme2');
    $s04Femme3 = $s04.find('.s04-femme3');
    
    if ($(window).width() < 750) {
        //MOBILE
        s04Top = "35%";
        s04Width = "80%";
    }
     else {
        //DESKTOP
        s04Top = "50%";
        s04Width = "50%";
    }
    
    setStage4();
    function setStage4(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s04, { autoAlpha: 1, width: s04Width, left:"50%", top: s04Top,  scale: 1, xPercent: -50, yPercent: -60, transformOrigin: "center center" })
            .set($s04Table, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s04Homme1Mains, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s04Homme1, { autoAlpha: 0, yPercent: 25, transformOrigin: "center center" }) //50
            .set($s04Homme2, { autoAlpha: 0, yPercent: 30, transformOrigin: "center center" }) //95
            .set($s04Femme1, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s04Femme2, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" })
            .set($s04Femme3, { autoAlpha: 0, x: "+=20px", transformOrigin: "center center" });
           
          
        return clearTl;
        
    }

    tlScene4
        .addLabel('start')
        .to($s04Table, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
        .to($s04Homme1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s04Homme2, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s04Femme1, 0.5, { autoAlpha: 1, x: "-=20px", ease:"elastic.out(0.75)" }, "-=1")
        .to($s04Homme1Mains, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s04Homme1, 0.5, { yPercent: 5, ease:"elastic.out(0.5)" }, "-=0.5")
        .to($s04Homme2, 0.5, { yPercent: 12, ease:"elastic.out(0.5)" }, "-=0.65")
        .addLabel('stop1')
        .to($s04Femme1, 0.5, { autoAlpha: 0, x: "-=20px", ease: Power4.easeInOut })
        .to($s04Femme2, 0.5, { autoAlpha: 1, x: "-=20px", ease:"elastic.out(0.75)" }, "-=0.15")
        .to($s04Homme1, 1.5, { yPercent: 0, ease: Power4.easeInOut }, "-=0.25")
        .to($s04Homme2, 1.5, { yPercent: 0, ease: Power4.easeInOut }, "-=1")
        .addLabel('stop2')
        .to($s04Femme2, 0.5, { autoAlpha: 0, x: "-=20px", ease: Power4.easeInOut })
        .to($s04Femme3, 0.5, { autoAlpha: 1, x: "-=20px", ease:"elastic.out(0.75)" }, "-=0.15")
        .to($s04Homme1, 0.1, { y: "+=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "+=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "-=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "-=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "+=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "+=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "-=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "-=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "+=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "+=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "-=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "-=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "+=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "+=5px", ease: Power4.easeInOut }, "-=0.05")
        .to($s04Homme1, 0.1, { y: "-=5px", ease: Power4.easeInOut })
        .to($s04Homme2, 0.1, { y: "-=5px", ease: Power4.easeInOut }, "-=0.05")
        .addLabel('end');
        
    //=====================================================================//
    // SCENE 5-6
    //=====================================================================//
    tlScene56 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s0506 = $('.s0506');
    $s0506AmitElems = $s0506.find('.s0506-amit-elems');
    $s0506AmitCorps = $s0506.find('.s0506-amit-corps');
    $s0506AmitArrow = $s0506.find('.s0506-amit-arrow');
    $s0506AmitFond = $s0506.find('.s0506-amit-fond');
    //$s0506AmitYeux = $s0506.find('.s0506-amit-yeux');
    $s0506AmitPupilles = $s0506.find('.s0506-amit-pupilles');
    $s0506AmitYeuxOuverts = $s0506.find('.s0506-amit-yeux-ouverts');
    $s0506AmitYeuxOuvertsGrands = $s0506.find('.s0506-amit-yeux-ouverts-grands');
    $s0506AmitYeuxFermes = $s0506.find('.s0506-amit-yeux-fermes');
    $s0506SmilingvilainElems = $s0506.find('.s0506-smilingvilain-elems');
    $s0506Smilingvilain = $s0506.find('.s0506-smilingvilain');
    $s0506SmilingvilainGone = $s0506.find('.s0506-smilingvilain-gone');
    $s0506Explosion1 = $s0506SmilingvilainElems.find('.s0506-explosion1');
    $s0506Explosion2 = $s0506SmilingvilainElems.find('.s0506-explosion2');
    $s0506Explosion3 = $s0506SmilingvilainElems.find('.s0506-explosion3');
    $s0506Explosion4 = $s0506SmilingvilainElems.find('.s0506-explosion4');
    $s0506Explosion5 = $s0506SmilingvilainElems.find('.s0506-explosion5');
    $s0506Explosion6 = $s0506SmilingvilainElems.find('.s0506-explosion6');
    $s0506Explosion7 = $s0506SmilingvilainElems.find('.s0506-explosion7');
    $s0506Explosion8 = $s0506SmilingvilainElems.find('.s0506-explosion8');
    $s0506Explosion9 = $s0506SmilingvilainElems.find('.s0506-explosion9');
    $s0506Explosion10 = $s0506SmilingvilainElems.find('.s0506-explosion10');
    $s0506Explosion11 = $s0506SmilingvilainElems.find('.s0506-explosion11');
    $s0506Explosion12 = $s0506SmilingvilainElems.find('.s0506-explosion12');

    tlScene56
        .addLabel('start')
        .to($s0506AmitElems, 5, { autoAlpha: 1, scale: 1.65, yPercent: "-=10", ease: Power4.easeInOut })
        //WALK IN
        .to($s0506AmitElems, 0, { y: "+=10", ease: Power4.easeInOut }, "-=3.5")
        .to($s0506AmitElems, 0, { y: "-=10", ease: Power4.easeInOut }, "-=3")
        .to($s0506AmitElems, 0, { y: "+=10", ease: Power4.easeInOut }, "-=2.5")
        .to($s0506AmitElems, 0, { y: "-=10", ease: Power4.easeInOut }, "-=2")
        .to($s0506AmitElems, 0, { y: "+=10", ease: Power4.easeInOut }, "-=1.5")
        .to($s0506AmitElems, 0, { y: "-=10", ease: Power4.easeInOut }, "-=1")
        
        //EYES MOVEMENTS
        .to($s0506AmitArrow, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .to($s0506AmitArrow, 3, { autoAlpha: 0, ease: Power4.easeInOut })

        //EYES MOVES
        .to($s0506AmitPupilles, 0, { x: "-=5px", ease: Power4.easeInOut }, "-=2")
        .to($s0506AmitPupilles, 0, { x: "+=10px", ease: Power4.easeInOut }, "+=1")

        //EYES MOVES
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($s0506AmitPupilles, 0, { x: "-=5px", ease: Power4.easeInOut })

        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut, onComplete: playBlinks056 }, "+=0.5")
        // .add(s0506BlinkTl, "+=2.25")
        .addLabel('stop1')

        .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.1")

        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1.5")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut, onComplete: playBlinks056 }, "+=0.25")

        .addLabel('stop2')

        // RESET AMIT ELEMS
        .to($s0506AmitElems, 1, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($s0506AmitElems, 0, {  scale: 1, yPercent: "-=10", ease: Power4.easeInOut })
        .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($s0506AmitFond, 0, {  autoAlpha: 1, ease: Power4.easeInOut })

        .to($s0506Smilingvilain, 1, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s0506AmitElems, 0, { autoAlpha: 1, transformOrigin: "left top", ease: Power4.easeInOut })

        .addLabel('stop3')

        .to($s0506AmitElems, 0.5, { scale: 0.68, x: "-=30px", y: "-=30px", ease: Power4.easeInOut })
        .to($s0506SmilingvilainElems, 0.5, { scale: 0.68, x: "+=30px", y: "+=30px", ease: Power4.easeInOut, onComplete: playBlinks056 }, "-=0.5")

        .addLabel('stop4')

        .to($s0506Explosion1, 0.25, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s0506Explosion2, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion3, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion4, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion5, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion6, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion7, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion8, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion9, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion10, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion11, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion12, 0.25, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")

        .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($s0506Explosion1, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.75")
        .to($s0506Explosion2, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion3, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion4, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion5, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion6, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion7, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion8, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion9, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion10, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion11, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($s0506Explosion12, 0.25, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")

        .to($s0506Smilingvilain, 0.5, { autoAlpha: 0.25, ease: "none" }, "-=0.75")
        .to($s0506Smilingvilain, 0.5, { autoAlpha: 1, ease: "none" })
        .to($s0506Smilingvilain, 0.5, { autoAlpha: 0.25, ease: "none" })
        .to($s0506Smilingvilain, 0.5, { autoAlpha: 1, ease: "none" })
        .to($s0506Smilingvilain, 0.5, { autoAlpha: 0, ease: "none" })
        
        .to($s0506SmilingvilainGone, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "+=0.75")

        .to($s0506AmitYeuxOuvertsGrands, 0, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($s0506AmitYeuxOuverts, 0, { autoAlpha: 1, ease: Power4.easeInOut, onComplete: playBlinks056 })
              
       
        .addLabel('end');

    var s0506BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
        // BLINK MOTHER FUCKER
        .addLabel('startblink')
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=5.5")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
        .to($s0506AmitYeuxFermes, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .addLabel('endblink');
    
    function playBlinks056(){
        s0506BlinkTl.play();
    }

    if ($(window).width() < 750) {
        //MOBILE
        //s05Top = "35%";
        s05Width = "70%";
    }
     else {
        //DESKTOP
        //s05Top = "50%";
        s05Width = "50%";
    }
    
    setStage56();
    function setStage56(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s0506, { autoAlpha: 1, width: s05Width, left:"50%", top:"30%",  scale: 1, xPercent: -50, yPercent: -50, transformOrigin: "center center" })
            .set($s0506AmitElems, { autoAlpha: 0, scale: 1.5, yPercent: "+=20", transformOrigin: "center center" })
            .set($s0506AmitFond, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506AmitArrow, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506AmitYeuxOuvertsGrands, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506AmitYeuxFermes, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion7, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion8, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion9, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion10, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion11, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506Explosion12, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506SmilingvilainElems, { transformOrigin: "right bottom" })
            .set($s0506Smilingvilain, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s0506SmilingvilainGone, { autoAlpha: 0, transformOrigin: "center center" });
            
           
           
          
        return clearTl;
        
    }

    //=====================================================================//
    // SCENE 6
    //=====================================================================//
    tlScene6 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });


    

    if ($(window).width() < 750) {
        //MOBILE
        $s06AmitCorps = $('.s06-amit-medaillon');
        $s06SvCorps = $('.s06-smilingvilain-medaillon');
        $s06SvGone = $('.s06-smilingvilain-gone-medaillon');
    }
     else {
        //DESKTOP
        $s06AmitCorps = $('.s06-amit-corps');
        $s06SvCorps = $('.s06-smilingvilain');
        $s06SvGone = $('.s06-smilingvilain-gone');
    }


    $s06AmitCorpsMedaillon = $('.s06-amit-corps-medaillon');
    $s06AmitPupilles = $('.s06-amit-pupilles');
    $s06AmitYeuxOuvertsGrands = $('.s06-amit-yeux-ouverts-grands');
    $s06AmitYeuxOuverts = $('.s06-amit-yeux-ouverts');
    $s06AmitYeuxFermes = $('.s06-amit-yeux-fermes');
    
    
    
    if ($(window).width() < 750) {
        //MOBILE
        s06AmitXPercent = -80;
        s06AmitHeight = "45%";
        s06SvXPercent = -23;
        s06SvHeight = "45%";
    }
     else {
        //DESKTOP
        s06AmitXPercent = -50;
        s06AmitHeight = "100%";
        s06SvXPercent = -50;
        s06SvHeight = "100%";
    }

    setStage6();
    function setStage6(){
        var clearTl = new TimelineMax();
        clearTl
            .set($s06AmitCorps, { autoAlpha: 0, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitPupilles, { autoAlpha: 1, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitYeuxOuvertsGrands, { autoAlpha: 0, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitYeuxOuverts, { autoAlpha: 1, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            .set($s06AmitYeuxFermes, { autoAlpha: 0, height: s06AmitHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06AmitXPercent, transformOrigin: "center center" })
            
            .set($s06SvCorps, { autoAlpha: 1, height: s06SvHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06SvXPercent, transformOrigin: "center center" })
            .set($s06SvGone, { autoAlpha: 0, height: s06SvHeight, left:"50%", top:"10%",  scale: 1, xPercent: s06SvXPercent, transformOrigin: "center center" });
            
           
      
        return clearTl;
    }


   

    //=====================================================================//
    // SCENE 7
    //=====================================================================//
    tlScene7 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s07 = $('.s07');
    $s07Marche1 = $s07.find('.s07-marche1');
    $s07Marche2 = $s07.find('.s07-marche2');
    $s07Marche3 = $s07.find('.s07-marche3');
    $s07Marche4 = $s07.find('.s07-marche4');
    $s07Marche5 = $s07.find('.s07-marche5');
    $s07Marche6 = $s07.find('.s07-marche6');
    $s07Marche7 = $s07.find('.s07-marche7');
    $s07Marche7Yeux = $s07.find('.s07-marche7-yeux');
    $s07Marche7RireTop = $s07.find('.s07-marche7-rire-top');
    $s07Marche7RireBottom = $s07.find('.s07-marche7-rire-bottom');

    
    if ($(window).width() < 750) {
        //MOBILE
        s07Top = "30%";
        s07Width = "80%";
    }
     else {
        //DESKTOP
        s07Top = "50%";
        s07Width = "80%";
    }
    
    
    setStage7();
    function setStage7(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s07, { autoAlpha: 0, width: s07Width, left:"50%", top:s07Top,  scale: 1, xPercent: -50, yPercent: -50, x: "-=50px", transformOrigin: "center center" })
            .set($s07Marche1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche7Yeux, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche7RireTop, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s07Marche7RireBottom, { autoAlpha: 0, transformOrigin: "center center" });
            
           
          
        return clearTl;
        
    }

    tlScene7
        .addLabel('start')
        .to($s07, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")

        //SOURIT
        .to($s07Marche7RireTop, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($s07Marche7RireTop, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=1.5")
        
        //MOVE RIGHT
        .to($s07, 2, { x: "+=50", ease: "none" }, "+=1")

        .to($s07Marche1, 0, { autoAlpha: 1 }, "-=2")
        .to($s07Marche7, 0, { autoAlpha: 0 }, "-=1.9")
        .to($s07, 0, { y: "-=5px" }, "-=2")
        
        .to($s07Marche2, 0, { autoAlpha: 1 }, "-=1.7")
        .to($s07Marche1, 0, { autoAlpha: 0 }, "-=1.6")
        .to($s07, 0, { y: "+=5px" }, "-=1.7")
        
        .to($s07Marche3, 0, { autoAlpha: 1 }, "-=1.4")
        .to($s07Marche2, 0, { autoAlpha: 0 }, "-=1.3")
        .to($s07, 0, { y: "-=5px" }, "-=1.4")
        
        .to($s07Marche4, 0, { autoAlpha: 1 }, "-=1.1")
        .to($s07Marche3, 0, { autoAlpha: 0 }, "-=1.0")
        .to($s07, 0, { y: "+=5px" }, "-=1.1")
        
        .to($s07Marche5, 0, { autoAlpha: 1 }, "-=0.8")
        .to($s07Marche4, 0, { autoAlpha: 0 }, "-=0.7")
        .to($s07, 0, { y: "-=5px" }, "-=0.8")
        
        .to($s07Marche6, 0, { autoAlpha: 1 }, "-=0.5")
        .to($s07Marche5, 0, { autoAlpha: 0 }, "-=0.4")
        .to($s07, 0, { y: "+=5px" }, "-=0.5")
        
        .to($s07Marche7, 0, { autoAlpha: 1 }, "-=0.2")
        .to($s07Marche6, 0, { autoAlpha: 0 }, "-=0.1")
        .to($s07, 0, { y: "-=5px" }, "-=0.2")
        
        //BLINK
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=1")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")

        //MOVE RIGHT 2
        .to($s07, 2, { x: "+=50", ease: "none" }, "+=1")

        .to($s07Marche1, 0, { autoAlpha: 1 }, "-=2")
        .to($s07Marche7, 0, { autoAlpha: 0 }, "-=1.9")
        .to($s07, 0, { y: "+=5px" }, "-=2")
        
        .to($s07Marche2, 0, { autoAlpha: 1 }, "-=1.7")
        .to($s07Marche1, 0, { autoAlpha: 0 }, "-=1.6")
        .to($s07, 0, { y: "-=5px" }, "-=1.7")
        
        .to($s07Marche3, 0, { autoAlpha: 1 }, "-=1.4")
        .to($s07Marche2, 0, { autoAlpha: 0 }, "-=1.3")
        .to($s07, 0, { y: "+=5px" }, "-=1.4")
        
        .to($s07Marche4, 0, { autoAlpha: 1 }, "-=1.1")
        .to($s07Marche3, 0, { autoAlpha: 0 }, "-=1.0")
        .to($s07, 0, { y: "-=5px" }, "-=1.1")
        
        .to($s07Marche5, 0, { autoAlpha: 1 }, "-=0.8")
        .to($s07Marche4, 0, { autoAlpha: 0 }, "-=0.7")
        .to($s07, 0, { y: "+=5px" }, "-=0.8")
        
        .to($s07Marche6, 0, { autoAlpha: 1 }, "-=0.5")
        .to($s07Marche5, 0, { autoAlpha: 0 }, "-=0.4")
        .to($s07, 0, { y: "-=5px" }, "-=0.5")
        
        .to($s07Marche7, 0, { autoAlpha: 1 }, "-=0.2")
        .to($s07Marche6, 0, { autoAlpha: 0 }, "-=0.1")
        .to($s07, 0, { y: "+=5px" }, "-=0.2")

        //BLINK 2
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=1")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")

        .addLabel('stop1')
        
        //TURN
        .to($s07, 0.5, { rotationY: 180 }, "+=1")

        //MOVE LEFT
        .to($s07, 2, { x: "-=50", ease: "none" }, "+=1")

        .to($s07Marche1, 0, { autoAlpha: 1 }, "-=2")
        .to($s07Marche7, 0, { autoAlpha: 0 }, "-=1.9")
        .to($s07, 0, { y: "-=5px" }, "-=2")
        
        .to($s07Marche2, 0, { autoAlpha: 1 }, "-=1.7")
        .to($s07Marche1, 0, { autoAlpha: 0 }, "-=1.6")
        .to($s07, 0, { y: "+=5px" }, "-=1.7")
        
        .to($s07Marche3, 0, { autoAlpha: 1 }, "-=1.4")
        .to($s07Marche2, 0, { autoAlpha: 0 }, "-=1.3")
        .to($s07, 0, { y: "-=5px" }, "-=1.4")
        
        .to($s07Marche4, 0, { autoAlpha: 1 }, "-=1.1")
        .to($s07Marche3, 0, { autoAlpha: 0 }, "-=1.0")
        .to($s07, 0, { y: "+=5px" }, "-=1.1")
        
        .to($s07Marche5, 0, { autoAlpha: 1 }, "-=0.8")
        .to($s07Marche4, 0, { autoAlpha: 0 }, "-=0.7")
        .to($s07, 0, { y: "-=5px" }, "-=0.8")
        
        .to($s07Marche6, 0, { autoAlpha: 1 }, "-=0.5")
        .to($s07Marche5, 0, { autoAlpha: 0 }, "-=0.4")
        .to($s07, 0, { y: "+=5px" }, "-=0.5")
        
        .to($s07Marche7, 0, { autoAlpha: 1 }, "-=0.2")
        .to($s07Marche6, 0, { autoAlpha: 0 }, "-=0.1")
        .to($s07, 0, { y: "-=5px" }, "-=0.2")

        .addLabel('stop2')

        //TURN
        .to($s07, 0.5, { rotationY: 0 }, "+=1")

        //BLINK 3
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=1")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 1 }, "+=0.250")
        .to($s07Marche7Yeux, 0, { autoAlpha: 0 }, "+=0.250")

         //SOURIT
         .to($s07Marche7RireTop, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")

         .addLabel('end');

    //=====================================================================//
    // SCENE 8
    //=====================================================================//
    tlScene8 =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });
    $s08 = $('.s08');
    $s08Marche1 = $s08.find('.s08-marche1');
    $s08Marche2 = $s08.find('.s08-marche2');
    $s08Marche3 = $s08.find('.s08-marche3');
    $s08Marche4 = $s08.find('.s08-marche4');
    $s08Marche5 = $s08.find('.s08-marche5');
    $s08Marche6 = $s08.find('.s08-marche6');
    $s08Marche7 = $s08.find('.s08-marche7');
    $s08Marche7Yeux = $s08.find('.s08-marche7-yeux');
    $s08Marche7Moustache1 = $s08.find('.s08-marche7moustache1');
    $s08Marche7Moustache2 = $s08.find('.s08-marche7moustache2');
    $s08Marche7Moustache3 = $s08.find('.s08-marche7moustache3');
    $s08Marche7Moustache4 = $s08.find('.s08-marche7moustache4');
    $s08Marche7Moustache5 = $s08.find('.s08-marche7moustache5');

    if ($(window).width() < 750) {
        //MOBILE
        s08Top = "30%";
        s08Width = "90%";
    }
     else {
        //DESKTOP
        s08Top = "50%";
        s08Width = "60%";
    }
    
    setStage8();
    function setStage8(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($s08, { autoAlpha: 1, width: s08Width, left:"50%", top: s08Top,  scale: 0.25, xPercent: -50, yPercent: -60, transformOrigin: "center center" })
            .set($s08Marche2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Yeux, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($s08Marche7Moustache5, { autoAlpha: 0, transformOrigin: "center center" });
            
    }

    var duration = 2; // Calculate the duration
    //  "-=" + ((duration / 12)) * 11

    tlScene8
        .addLabel('start')
        .to($s08, duration, { scale: 0.35, ease: Power1.easeInOut })

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 12)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 12)
        
        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 11)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 11)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 10)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 10)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 9)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 9)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 8)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 8)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 7)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 7)
        
        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 6)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 6)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 5)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 5)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 4)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 4)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 3)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 3)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 2)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 2)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 12)) * 1)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 12)) * 1)
        .addLabel('test')
        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" })
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" })

        .addLabel('stop1')
        //.to($s08, 0.25, { scale: 0.35, ease: Power1.easeInOut })
        .to($s08, 2, { scale: 0.6, ease: Power1.easeInOut })

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 14)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 14)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 13)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 13)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 12)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 12)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 11)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 11)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 10)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 10)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 9)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 9)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 8)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 8)

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 7)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 7)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 6)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 6)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 5)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 5)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 4)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 4)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 3)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 3)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 2)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 2)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 1)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 1)
        
       
        .addLabel('stop2')

        .to($s08, duration, { scale: 1, ease: Power1.easeInOut })

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 14)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 14)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 13)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 13)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 12)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 12)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 11)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 11)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 10)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 10)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 9)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 9)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 8)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 8)

        .to($s08Marche1, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 7)
        .to($s08Marche7, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 7)

        .to($s08Marche2, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 6)
        .to($s08Marche1, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 6)

        .to($s08Marche3, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 5)
        .to($s08Marche2, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 5)

        .to($s08Marche4, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 4)
        .to($s08Marche3, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 4)

        .to($s08Marche5, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 3)
        .to($s08Marche4, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 3)

        .to($s08Marche6, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 2)
        .to($s08Marche5, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 2)

        .to($s08Marche7, 0, { autoAlpha: 1 , ease: "none" }, "-=" + ((duration / 14)) * 1)
        .to($s08Marche6, 0, { autoAlpha: 0 , ease: "none" }, "-=" + ((duration / 14)) * 1)

        .to($s08Marche7Moustache1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        .to($s08Marche7Moustache1, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.15")
        .to($s08Marche7Moustache2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s08Marche7Moustache2, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.15")

        .to($s08Marche7Moustache1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.15")
        .to($s08Marche7Moustache1, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.15")
        .to($s08Marche7Moustache2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($s08Marche7Moustache2, 0, { autoAlpha: 0, ease: Power4.easeInOut, onComplete: playBlinks08 }, "+=0.25")

        .addLabel('end');

    var s08BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
        // BLINK MOTHER FUCKER
        .addLabel('startblink')
        .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=2")
        .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
        .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        .addLabel('endblink')
        
        // .to($s08Marche7Moustache1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=1")
        // .to($s08Marche7Moustache1, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
        // .to($s08Marche7Moustache2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        // .to($s08Marche7Moustache2, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

        ;

    function playBlinks08(){
        s08BlinkTl.seek('startblink');
        s08BlinkTl.play();
    }

    //=====================================================================//
    // OUTRO
    //=====================================================================//
    tlSceneOutro =  new TimelineMax({ 
        paused: true, 
        //repeat: -1,									// repeat 3 times
        immediateRender: true
    });

    $outro = $('.outro');
    $outroTable1 = $outro.find('.outro-table1');
    $outroTable2 = $outro.find('.outro-table2');
    $outroTable3 = $outro.find('.outro-table3');
    $outroTable4 = $outro.find('.outro-table4');
    $outroTable5 = $outro.find('.outro-table5');
    $outroTable6 = $outro.find('.outro-table6');
    $outroTable7 = $outro.find('.outro-table7');
    $outroTable8 = $outro.find('.outro-table8');
    $outroFlare = $outro.find('.outro-flare');
    $outroSmoke = $outro.find('.outro-smoke');



   
    if ($(window).width() < 750) {
        //MOBILE
        // s08Top = "30%";
        // s08Width = "90%";
    }
     else {
        //DESKTOP
        // s08Top = "50%";
        // s08Width = "60%";
    }
    
    setStageOutro();
    function setStageOutro(){
        //alert('RESET');
        var clearTl = new TimelineMax();
        clearTl
            .set($outro, { autoAlpha: 1, width: "100%", yPercent: "-10", transformOrigin: "center center" })
            .set($outroTable2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroTable3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroTable4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroTable5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroTable6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroTable7, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroTable8, { autoAlpha: 0, transformOrigin: "center center" })
            .set($outroSmoke, { autoAlpha: 0, yPercent: "+1", transformOrigin: "center center" });
           
           
    }

    tlSceneOutro
        .addLabel('startburn')
        .to($outroTable2, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($outroTable1, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($outroTable3, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable2, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($outroTable4, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable3, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($outroTable1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable4, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable2, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable1, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable3, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable2, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable4, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable3, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable4, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable2, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable1, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable3, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable2, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable4, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable3, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        // .to($outroTable1, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        // .to($outroTable4, 0, { autoAlpha: 0, ease: Power4.easeInOut })


        .to($outroTable5, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable1, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($outroTable6, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable5, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($outroTable7, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable6, 0, { autoAlpha: 0, ease: Power4.easeInOut })

        .to($outroTable8, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.25")
        .to($outroTable7, 0, { autoAlpha: 0, ease: Power4.easeInOut })


        .to($outroFlare, 1, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.5")
        .to($outro, 1, { autoAlpha: 0.5, ease: Power4.easeInOut }, "-=1")

        .to($outroSmoke, 4, { autoAlpha: 1, yPercent: "-1", ease: "none" })

        .addLabel('endburn');




    // var s08BlinkTl = new TimelineMax({ paused: true, repeat: -1 })
    //     .addLabel('startblink')
    //     .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=2")
    //     .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")

    //     .to($s08Marche7Yeux, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5")
    //     .to($s08Marche7Yeux, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "+=0.25")
    //     .addLabel('endblink');

    // function playBlinks08(){
    //     s08BlinkTl.seek('startblink');
    //     s08BlinkTl.play();
    // }
        

    //=====================================================================//
    // NOTIF ANDREOLI 1 TIMELINE AND NOTIFICATION SETTINGS
    //=====================================================================//
    tlAndreoli1 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $msgAndreoli1 = $('.msg-andreoli1'),
    $msgAndreoli1Txt = $msgAndreoli1.find('.msg-txt'),
    $msgAndreoli1Portrait = $msgAndreoli1.find('.msg-portrait');
    $msgAndreoli1Close = $msgAndreoli1.find('.msg-close');
    
    setStageAndreoli1();
    function setStageAndreoli1(){
        var clearTl = new TimelineMax();
        clearTl
            .set($msgAndreoli1Portrait, { autoAlpha: 0, x: "-50", transformOrigin: "center center" })
            .set($msgAndreoli1Txt, { autoAlpha: 0, scale: 0.5, y: "+100", transformOrigin: "center center" });
        return clearTl;
    }

    tlAndreoli1
        .to($msgAndreoli1Portrait, 0.5, {autoAlpha: 1, x: "0"})
        .to($msgAndreoli1Txt, 0.3, {autoAlpha: 1, scale:1, y: "0", transformOrigin: "center center"});

    $('.notification-andreoli1').on('click', function(activeIndex) {
        $notification = $(this);
        $story.addClass('is-hidden');
        slideTrigger = $(this).attr('slide-trigger');

        setTimeout(function() { 
            $body.addClass('is-locked');
            $notification.removeClass('is-blinking');
            $notification.find('.notification-label').addClass('is-hidden');
            setTimeout(function() { 
                $notification.addClass('is-collapsed');
                setTimeout(function() { 
                    $notification.find('.notification-dot').addClass('is-hidden');
                }, 350);
            }, 350);
            swiper.slideTo(3);
            tlAndreoli1.restart();
        }, 350);

        $msgAndreoli1Close.on('click', function() {
            swiper.slideTo(2);
            $body.removeClass('is-locked');
            setTimeout(function() { 
                
                $story.removeClass('is-hidden');
            }, 350);
        });
    });

    //=====================================================================//
    // NOTIF PAREIN 1 TIMELINE AND NOTIFICATION SETTINGS
    //=====================================================================//
    tlParein1 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $msgParein1 = $('.msg-parein1'),
    $msgParein1Txt = $msgParein1.find('.msg-txt'),
    $msgParein1Portrait = $msgParein1.find('.msg-portrait');
    $msgParein1Close = $msgParein1.find('.msg-close');
    
    setStageParein1();
    function setStageParein1(){
        var clearTl = new TimelineMax();
        clearTl
            .set($msgParein1Portrait, { autoAlpha: 0, x: "-50", transformOrigin: "center center" })
            .set($msgParein1Txt, { autoAlpha: 0, scale: 0.5, y: "+100", transformOrigin: "center center" });
        return clearTl;
    }

    tlParein1
        .to($msgParein1Portrait, 0.5, {autoAlpha: 1, x: "0"})
        .to($msgParein1Txt, 0.3, {autoAlpha: 1, scale:1, y: "0", transformOrigin: "center center"});

    $('.notification-parein1').on('click', function(activeIndex) {
        $notification = $(this);
        $story.addClass('is-hidden');
        slideTrigger = $(this).attr('slide-trigger');

        setTimeout(function() { 
            $body.addClass('is-locked');
            $notification.removeClass('is-blinking');
            $notification.find('.notification-label').addClass('is-hidden');
            setTimeout(function() { 
                $notification.addClass('is-collapsed');
                setTimeout(function() { 
                    $notification.find('.notification-dot').addClass('is-hidden');
                }, 350);
            }, 350);
            swiper.slideTo(5);
            tlParein1.restart();
        }, 350);

        $msgParein1Close.on('click', function() {
            swiper.slideTo(4);
            $body.removeClass('is-locked');
            setTimeout(function() { 
                
                $story.removeClass('is-hidden');
            }, 350);
        });
    });

    //=====================================================================//
    // NOTIF ANDREOLI 2 TIMELINE AND NOTIFICATION SETTINGS
    //=====================================================================//
    tlAndreoli2 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $msgAndreoli2 = $('.msg-andreoli2'),
    $msgAndreoli2Txt = $msgAndreoli2.find('.msg-txt'),
    $msgAndreoli2Portrait = $msgAndreoli2.find('.msg-portrait');
    $msgAndreoli2Close = $msgAndreoli2.find('.msg-close');
    
    setStageAndreoli2();
    function setStageAndreoli2(){
        var clearTl = new TimelineMax();
        clearTl
            .set($msgAndreoli2Portrait, { autoAlpha: 0, x: "-50", transformOrigin: "center center" })
            .set($msgAndreoli2Txt, { autoAlpha: 0, scale: 0.5, y: "+100", transformOrigin: "center center" });
        return clearTl;
    }

    tlAndreoli2
        .to($msgAndreoli2Portrait, 0.5, {autoAlpha: 1, x: "0"})
        .to($msgAndreoli2Txt, 0.3, {autoAlpha: 1, scale:1, y: "0", transformOrigin: "center center"});

    $('.notification-andreoli2').on('click', function(activeIndex) {
        $notification = $(this);
        $story.addClass('is-hidden');
        slideTrigger = $(this).attr('slide-trigger');

        setTimeout(function() { 
            $body.addClass('is-locked');
            $notification.removeClass('is-blinking');
            $notification.find('.notification-label').addClass('is-hidden');
            setTimeout(function() { 
                $notification.addClass('is-collapsed');
                setTimeout(function() { 
                    $notification.find('.notification-dot').addClass('is-hidden');
                }, 350);
            }, 350);
            swiper.slideTo(8);
            tlAndreoli2.restart();
        }, 350);

        $msgAndreoli2Close.on('click', function() {
            swiper.slideTo(7);
            $body.removeClass('is-locked');
            setTimeout(function() { 
                
                $story.removeClass('is-hidden');
            }, 350);
        });
    });

    //=====================================================================//
    // NOTIF TATONE 1 TIMELINE AND NOTIFICATION SETTINGS
    //=====================================================================//
    tlTatone1 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $msgTatone1 = $('.msg-tatone1'),
    $msgTatone1Txt = $msgTatone1.find('.msg-txt'),
    $msgTatone1Portrait = $msgTatone1.find('.msg-portrait');
    $msgTatone1Close = $msgTatone1.find('.msg-close');
    
    setStageTatone1();
    function setStageTatone1(){
        var clearTl = new TimelineMax();
        clearTl
            .set($msgTatone1Portrait, { autoAlpha: 0, x: "-50", transformOrigin: "center center" })
            .set($msgTatone1Txt, { autoAlpha: 0, scale: 0.5, y: "+100", transformOrigin: "center center" });
        return clearTl;
    }

    tlTatone1
        .to($msgTatone1Portrait, 0.5, {autoAlpha: 1, x: "0"})
        .to($msgTatone1Txt, 0.3, {autoAlpha: 1, scale:1, y: "0", transformOrigin: "center center"});

    $('.notification-tatone1').on('click', function(activeIndex) {
        $notification = $(this);
        $story.addClass('is-hidden');
        slideTrigger = $(this).attr('slide-trigger');

        setTimeout(function() { 
            $body.addClass('is-locked');
            $notification.removeClass('is-blinking');
            $notification.find('.notification-label').addClass('is-hidden');
            setTimeout(function() { 
                $notification.addClass('is-collapsed');
                setTimeout(function() { 
                    $notification.find('.notification-dot').addClass('is-hidden');
                }, 350);
            }, 350);
            swiper.slideTo(9);
            tlTatone1.restart();
        }, 350);

        $msgTatone1Close.on('click', function() {
            swiper.slideTo(7);
            $body.removeClass('is-locked');
            setTimeout(function() { 
                
                $story.removeClass('is-hidden');
            }, 350);
        });
    });

    //=====================================================================//
    // NOTIF ANDREOLI 3 TIMELINE AND NOTIFICATION SETTINGS
    //=====================================================================//
    tlAndreoli3 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $msgAndreoli3 = $('.msg-andreoli3'),
    $msgAndreoli3Txt = $msgAndreoli3.find('.msg-txt'),
    $msgAndreoli3Portrait = $msgAndreoli3.find('.msg-portrait');
    $msgAndreoli3Close = $msgAndreoli3.find('.msg-close');
    
    setStageAndreoli3();
    function setStageAndreoli3(){
        var clearTl = new TimelineMax();
        clearTl
            .set($msgAndreoli3Portrait, { autoAlpha: 0, x: "-50", transformOrigin: "center center" })
            .set($msgAndreoli3Txt, { autoAlpha: 0, scale: 0.5, y: "+100", transformOrigin: "center center" });
        return clearTl;
    }

    tlAndreoli3
        .to($msgAndreoli3Portrait, 0.5, {autoAlpha: 1, x: "0"})
        .to($msgAndreoli3Txt, 0.3, {autoAlpha: 1, scale:1, y: "0", transformOrigin: "center center"});

    $('.notification-andreoli3').on('click', function(activeIndex) {
        $notification = $(this);
        $story.addClass('is-hidden');
        slideTrigger = $(this).attr('slide-trigger');

        setTimeout(function() { 
            $body.addClass('is-locked');
            $notification.removeClass('is-blinking');
            $notification.find('.notification-label').addClass('is-hidden');
            setTimeout(function() { 
                $notification.addClass('is-collapsed');
                setTimeout(function() { 
                    $notification.find('.notification-dot').addClass('is-hidden');
                }, 350);
            }, 350);
            swiper.slideTo(10);
            tlAndreoli3.restart();
        }, 350);

        $msgAndreoli3Close.on('click', function() {
            swiper.slideTo(7);
            $body.removeClass('is-locked');
            setTimeout(function() { 
                
                $story.removeClass('is-hidden');
            }, 350);
        });
    });

    //=====================================================================//
    // NOTIF TATONE 2 TIMELINE AND NOTIFICATION SETTINGS
    //=====================================================================//
    tlTatone2 =  new TimelineMax({ 
        paused: true, 
        immediateRender: true
    });
    $msgTatone2 = $('.msg-tatone2'),
    $msgTatone2Txt = $msgTatone2.find('.msg-txt'),
    $msgTatone2Portrait = $msgTatone2.find('.msg-portrait');
    $msgTatone2Close = $msgTatone2.find('.msg-close');
    
    setStageTatone2();
    function setStageTatone2(){
        var clearTl = new TimelineMax();
        clearTl
            .set($msgTatone2Portrait, { autoAlpha: 0, x: "-50", transformOrigin: "center center" })
            .set($msgTatone2Txt, { autoAlpha: 0, scale: 0.5, y: "+100", transformOrigin: "center center" });
        return clearTl;
    }

    tlTatone2
        .to($msgTatone2Portrait, 0.5, {autoAlpha: 1, x: "0"})
        .to($msgTatone2Txt, 0.3, {autoAlpha: 1, scale:1, y: "0", transformOrigin: "center center"});

    $('.notification-tatone2').on('click', function(activeIndex) {
        $notification = $(this);
        $story.addClass('is-hidden');
        slideTrigger = $(this).attr('slide-trigger');

        setTimeout(function() { 
            $body.addClass('is-locked');
            $notification.removeClass('is-blinking');
            $notification.find('.notification-label').addClass('is-hidden');
            setTimeout(function() { 
                $notification.addClass('is-collapsed');
                setTimeout(function() { 
                    $notification.find('.notification-dot').addClass('is-hidden');
                }, 350);
            }, 350);
            swiper.slideTo(13);
            tlTatone2.restart();
        }, 350);

        $msgTatone2Close.on('click', function() {
            swiper.slideTo(12);
            $body.removeClass('is-locked');
            setTimeout(function() { 
                
                $story.removeClass('is-hidden');
            }, 350);
        });
    });



    // NOTIFICATIONS - NO GSAP - NO SCROLLMAGIC
    function revealNotification(notif){
        //alert(notif);
        var $notification = notif;
        var $notificationDot = $notification.find('.notification-dot');
        var $notificationLabel = $notification.find('.notification-label');

        if($notification.hasClass('done'))
        {

        }
        else
        {
            $notification.removeClass('is-squizzed');
            setTimeout(function() { 
                $notification.removeClass('is-hidden');
                setTimeout(function() { 
                    $notification.removeClass('is-collapsed');
                    $notificationDot.removeClass('is-hidden');
                    setTimeout(function() { 
                        $notificationLabel.removeClass('is-hidden');
                        $notification.removeClass('is-highlighted');

                        setTimeout(function() { 
                            $notification.addClass('is-blinking');
                        }, 1500);
                        

                        // setTimeout(function() { 
                        //     $notification.removeClass('is-highlighted');
                        // }, 300);
                    }, 350);
                }, 350);
            }, 350);
            $notification.addClass('done');
        }
        

    }

    

    

    

   
    

})(jQuery);