$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
