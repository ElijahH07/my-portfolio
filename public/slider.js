// Set this to 0 for slides to directly overlap
let sliderOffset = 20;
// Tablet and Mobile Only
if (window.innerWidth < 992) {
    sliderOffset = 0;
}
// On page load
$(".slide_contain").each(function (index) {
$(this).find(".slide_item").first().addClass("is--current");
});
// On arrow click
$(".slide_arrow").on("click", function () {
// Set variables
let slideWidth = $(".slide_item").eq(0).outerWidth() - sliderOffset;
let slideParent = $(this).closest(".slide_contain");
let currentSlide = slideParent.find(".slide_item.is--current");
// Update current slide
slideParent.find(".is--current").removeClass("is--current");
if ($(this).hasClass("is--right")) {
    // Update current slide if right
    if (currentSlide.next().length) {
    currentSlide.next().addClass("is--current");
    } else {
    slideParent.find(".slide_item").eq(0).addClass("is--current");
    slideParent.find(".slide_arrow.is--right").addClass("is--disabled-arrow");
    }
} else {
    // Update current slide if left
    if (currentSlide.prev().length) {
    currentSlide.prev().addClass("is--current");
    } else {
    slideParent.find(".slide_item").eq(0).addClass("is--current");
    slideParent.find(".slide_arrow.is--left").addClass("is--disabled-arrow");
    }
}
// Update arrows
slideParent.find(".slide_arrow").removeClass("is--disabled-arrow");
if (
    slideParent.find(".slide_item.is--current").index() ==
    slideParent.find(".slide_item").first().index()
) {
    slideParent.find(".slide_arrow.is--left").addClass("is--disabled-arrow");
}
if (
    slideParent.find(".slide_item.is--current").index() ==
    slideParent.find(".slide_item").last().index()
) {
    slideParent.find(".slide_arrow.is--right").addClass("is--disabled-arrow");
}
// Figure out move distance
let currentNumber = slideParent.find(".slide_item.is--current").index();
let slideMove = slideWidth * currentNumber;
slideParent.find(".slide_item.is--current").addClass("is--animating");
$(".slide_item.is--animating ~ .slide_item, .slide_item.is--animating").css(
    "transform",
    `translateX(-${slideMove}px)`
);
slideParent.find(".slide_item.is--current").removeClass("is--animating");
});
// On window resize
$(window).resize(function () {
if (window.innerWidth > 767) {
    $(".slide_arrow.is--right").removeClass("is--disabled-arrow");
    $(".slide_arrow.is--left").addClass("is--disabled-arrow");
    $(".slide_item.is--current").removeClass("is--current");
    $(".slide_contain").find(".slide_item").first().addClass("is--current");
    $(".slide_item").css("transform", `translateX(0px)`);
}
});