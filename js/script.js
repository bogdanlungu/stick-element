var origin = {};
$(function(){
    origin = $('.important').offset();
    $(window).scroll(function(){
        stickElement();
    });
});
function stickElement() {
    var theElement = $('.important');
    var scrollPosition = $("body").scrollTop();

    /* Make it work with IE and Mozilla */
    if(!scrollPosition){
      var scrollPosition = $("html").scrollTop();
    }

    if (origin.top < scrollPosition) {
        theElement.addClass("stick");
    } else {
        theElement.removeClass("stick");
    }
}
