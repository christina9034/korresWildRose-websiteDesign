let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement: '.ingredients_info',
    triggerHook: 0.8,
    offset: 50,
}).setClassToggle('.ingredients_info', 'ingredients_info--reveal');

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -240,
}).setTween(TweenMax.to('.petal-4', 0.5, { top: '16%', rotation: 25 }));

let scene3 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -250,
}).setTween(TweenMax.to('.petal-18', 0.5, { top: '19%', left: '73%', rotation: 15 }));

let scene4 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -270,
}).setTween(TweenMax.to('.petal-1', 0.5, { top: "12%", rotation: 5 }));
 
let scene5 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -265,
}).setTween(TweenMax.to('.petal-20', 0.5, { top: "20%", left: '74%', rotation: 10, scale: 1.2 }));

let scene6 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -275,
}).setTween(TweenMax.to('.petal-2', 0.4, { top: "15%", left: "27%", rotation: 25, scale: 1.1 }));

let scene7 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -240,
}).setTween(TweenMax.to('.petal-6', 0.5, { top: "18%", rotation: 15 }));

let scene8 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -250,
}).setTween(TweenMax.to('.petal-8', 0.5, { top: "19%", rotation: 10, scale: 1.2 }));

let scene9 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -255
}).setTween(TweenMax.to('.petal-11', 0.5, { top: "15%", rotation: 10, scale: 1.2 }));

let scene10 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -250
}).setTween(TweenMax.to('.petal-15', 0.5, { top: "19%", rotation: 15 }));

let scene11 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -245
}).setTween(TweenMax.to('.petal-5', 0.4, { top: "17%", left: "34%", rotation: 15 }));

let scene12 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -240,
}).setTween(TweenMax.to('.petal-14', 0.5, { left: "57%" }));

let scene13 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -240,
}).setTween(TweenMax.to('.petal-13', 0.5, { top: "20%", rotation: 12 }));

let scene14 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -240,
}).setTween(TweenMax.to('.petal-10', 0.5, { top: "20.5%", rotation: 8 }));

let scene15 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -245
}).setTween(TweenMax.to('.petal-12', 0.5, { top: "19%", rotation: 16, scale:1.2 }));

let scene16 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -240
}).setTween(TweenMax.to('.main_product', 0.5, { top: "-15%" }));

let scene17 = new ScrollMagic.Scene({
    triggerElement: '.ingredients',
    offset: -230
}).setTween(TweenMax.to('.petal-24', 0.4, { top: "24%", left: "15%", rotation: 15 }));

controller.addScene([
    scene, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11,
    scene12, scene13, scene14, scene15, scene16, scene17
]);
