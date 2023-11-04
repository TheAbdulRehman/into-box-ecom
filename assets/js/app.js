// adding background to navigation
// $(window).on("scroll", function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 200) {
//     $(".navbar").addClass("nav-fixed");
//   } else {
//     $(".navbar").removeClass("nav-fixed");
//   }
// });
// navbar
$(document).ready(function () {
  $("#navbarIcon").click(function () {
    $("#navItems").toggleClass("show-nav");
    $("#closeNav").toggleClass("show-nav");
    $(".mobile-menu").toggleClass("open");
  });
  $("#closeNav").click(function () {
    $("#navItems").toggleClass("show-nav");
  });
  $("#closeMobileNav").click(function () {
    $(".mobile-menu").toggleClass("open");
  });
  $(".cs-nav-link").click(function () {
    $("#navItems").toggleClass("show-nav");
  });
});

$(".has-children").click(function () {
  $(".has-children").removeClass("expanded active");
  $(this).addClass("expanded active");
});
$("#showMobSearch").click(function () {
  $(".mob-search").addClass("show-mob-search");
});
$("#hideMobSearch").click(function () {
  $(".mob-search").removeClass("show-mob-search");
});

// active nav tab logic
$(document).ready(function () {
  $(".nav-tab-btn").click(function () {
    $(".nav-tab-btn").removeClass("nav-btn-active");
    $(this).addClass("nav-btn-active");
  });
});

// scroll to top

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll > 40) {
    $(".scrollToTopBtn").addClass("showBtn");
  } else {
    $(".scrollToTopBtn").removeClass("showBtn");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
$(".scrollToTopBtn").on("click", scrollToTop);

// faq js
$(document).ready(function () {
  var accordionParentClass = ".eachFaq";
  var accordionQuestionClass = ".eachFaq .title";
  var accordionContentClass = ".accordion-content";

  $(accordionParentClass).each(function () {
    $(this).addClass("close");
    $(this).find(accordionContentClass).hide();
  });

  $(accordionQuestionClass).click(function () {
    var faqClass = $(this).closest(accordionParentClass).attr("class");
    console.log(faqClass);

    if (faqClass.indexOf("close") != -1) {
      //WHEN CLOSED
      $(accordionParentClass).find(accordionContentClass).slideUp("slow"); //CLOSE ALL
      $(accordionParentClass).addClass("close").removeClass("open"); //set all faq as closed

      $(this).closest(accordionParentClass).removeClass("close");
      $(this).closest(accordionParentClass).addClass("open");
      $(this)
        .closest(accordionParentClass)
        .find(accordionContentClass)
        .slideDown("slow");
    } else {
      $(this).closest(accordionParentClass).addClass("close");
      $(this).closest(accordionParentClass).removeClass("open");
      $(this)
        .closest(accordionParentClass)
        .find(accordionContentClass)
        .slideUp("slow");
    }
  });
});

// progress bar

$(".container-progress > div").each(function () {
  var width = $(this).data("width");
  $(this).animate({ width: width }, 2500);
  $(this).after('<span class="perc">' + width + "</span>");
  $(".perc").delay(3000).fadeIn(1000);
});

// toggle menu
$(".menu-open").click(function () {
  $(".menu-close").addClass("show-close-icon");
  $(".custom-menu").addClass("show-menu");
});
$(".menu-close").click(function () {
  $(".menu-close").removeClass("show-close-icon");
  $(".custom-menu").removeClass("show-menu");
});

// toggling line in menu
$(".custom-menu-item").click(function (event) {
  //remove all pre-existing active classes
  $(".custom-menu-item").removeClass("active-item");
  $(".custom-menu").removeClass("show-menu");
  $(".menu-close").removeClass("show-close-icon");

  //add the active class to the link we clicked
  $(this).addClass("active-item");

  //Load the content
  //e.g.
  //load the page that the link was pointing to
  $("custom-menu-item").load($(this).find(a).attr("href"));

  event.preventDefault();
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// omin js
