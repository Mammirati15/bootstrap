var carouselChildren= $("#carouselButton").children("i")

$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if (carouselChildren.hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            carouselChildren.removeClass("fa-pause");
            carouselChildren.addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            carouselChildren.removeClass("fa-play");
            carouselChildren.addClass("fa-pause"); 
        }
    });
});

$(function() {
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show")
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal("show")
    });
});

