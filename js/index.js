$(window).on("resize", function () {

    var b = $(".bg-offerGray").outerHeight(true);
    var c = $(".bg-offRed").outerHeight(true);

    $("#advertising").css("height", b + c -25);
}).trigger("resize");