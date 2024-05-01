$(document).on("click", ".button-nav, .navigation-backdrop, .button-close", function () {
    var $nav = $("#navigation-demo");
    var $hasClass = $nav.hasClass("open");

    if (!$hasClass) {
        $nav.addClass("open");
        $("body").append("<div class='navigation-backdrop'></div>");
    } else {
        $nav.removeClass("open");
        $(".navigation-backdrop").remove();
    }
});

