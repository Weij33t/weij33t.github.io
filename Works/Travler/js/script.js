$(".header-select__placeholder").on("click", function(e) { $(".header-select__placeholder").css("opacity", "0"), $(".header-select__ul").toggle() }), $(".header-select__link").on("click", function(e) {
        e.preventDefault();
        var t = $(this).parent().index();
        $(".header-select__placeholder").text($(this).text()).css("opacity", "1"), $(".header-select__ul").find("li").eq(t).prependTo(".header-select__ul"), $(".header-select__ul").toggle()
    }),
    $("select").on("change", function(e) { $(".header-select__placeholder").text(this.value), $(this).animate({ width: $(".header-select__placeholder").width() + "px" }) }), $(function() { $(".header-bottom__burger").on("click", function() { $(".header-nav").slideToggle(300, function() { "none" === $(this).css("display") && $(this).removeAttr("style") }) }) }), $("#owl-one").owlCarousel({ loop: !0, margin: 0, nav: true, items: 1 });






$('.owl-two').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 4,
    responsive: {
        1025: {
            items: 4
        },
        1024: {
            items: 2,
        },
        768: {
            items: 2,
        },
        0: {
            items: 1,
        }
    }
});