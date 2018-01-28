/**
 * Created by paolamendiburualetti on 17/11/16.
 */
(function () {
  "use strict";
  var
    // function to scroll to navlinks
    myScroll = function () {

      $(".navbar__item a").on("click", function (evt) {
        //prevent default is to remove the default behaviour
        evt.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
          scrollTop: $(target).offset().top - 50
        },
          1000);
      });

    },//myScroll
    myActiveLink = function () {
      $('.navbar__item').click(function () {
        $('.navbar__item').removeClass("navbar__item--active");
        $(this).addClass("navbar__item--active");
      });
    },//myactive



    init = function () {
      myScroll();
      myActiveLink();

    }//init
    ;
  window.addEventListener("load", init);
})();








