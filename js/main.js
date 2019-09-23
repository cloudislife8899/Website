$(function(){
    var effects = "animated pulse";
    var effectsEnd = "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

    $("header .nav-item").hover(function(){
        $(this).addClass(effects).one(effectsEnd, function(){
            $(this).removeClass(effects);
        });
    });
});