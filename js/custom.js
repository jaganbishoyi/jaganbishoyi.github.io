
            var tl = new TimelineMax();

            tl.from('#bowl', 1, {y:'-80', opacity: 0, ease: Power1.easeOut});
            
            tl.from('#sushi_1', 1, {y: '-200', rotation: 20, transformOrigin:"50% 50%", opacity: 0, ease: Bounce.easeOut}, '-=.4');
            tl.from('#sushi_2', 1, {y: '-200', rotation: -70, transformOrigin:"50% 50%", opacity: 0, ease: Bounce.easeOut}, '-=.7');
            tl.from('#chopstick_1', .4, {y: '-500%', rotation: 20, transformOrigin:"50% 50%", opacity: 0, ease: Power1.easeOut}, '-=.7');
            tl.from('#chopstick_2', .4, {y: '-400%', rotation: -60, transformOrigin:"50% 50%", opacity: 0, ease: Power1.easeOut}, '-=.6');
            tl.from('#bg1', 1, {Y: 500, opacity: 0, ease: Power1.easeOut}, '-=.7');
            tl.from('#bg2', 1, {x: 450, opacity: 0, ease: Power1.easeOut}, '-=.7');
            tl.from('.evbtn', 1, {y: -40, opacity: 0, ease: Power1.easeOut}, '-=.7');

            tl.from('#lbImg', 1.5, {y: 150, opacity: 0, ease: Power4.easeOut}, '-=1');
          //   tl.from('.btn-2', 1, {y: 50, opacity: 0, ease: Power4.easeOut}, '-=1');
          // tl.from('.evbtn', 0.2, {y:'10', opacity: 0, ease: Power1.easeOut});
          // tl.from('#btn2', 1.5, {y:'80', opacity: 0, ease: Power1.easeOut});
            tl.from('#rtImg', 1.5, {y: -150, opacity: 0, ease: Power4.easeOut}, '-=1');