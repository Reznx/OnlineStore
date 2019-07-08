$(document).ready(function() {
  svg4everybody({});

  let mainSubnavHover = () => {
    $(".main-subnav__item").hover(
      function() {
        let parentList = $(this).closest(".main-subnav__list");
        if ($(this).children(".main-subnav__list").length) {
          let catNavHeight = $(this)
            .children(".main-subnav__list")
            .outerHeight();
          if (parentList.outerHeight() < catNavHeight) {
            parentList.css("height", catNavHeight);
          }
          parentList.css("width", "720");
        }
      },
      function() {
        let parentList = $(this).closest(".main-subnav__list");
        parentList.css("height", "auto");
        parentList.css("width", "auto");
      }
    );
  };
  let openSearchForm = () => {
    $(document).on("click", ".search__icon", function() {
      $(this)
        .parent()
        .addClass("search--open");
    });
  };
  let clearSearchForm = () => {
    $(document).on("click", ".search__clear", function() {
      $(".search__input").val("");
    });
  };
  let bannerSlider = () => {
    $(".js-banner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: ".banner__navigation--prev",
      nextArrow: ".banner__navigation--next",
      dots: true,
      customPaging: function(slider, i) {
        return '<div class="banner__dot"></div>';
      },
      appendDots: ".banner__dots"
    });
  };
  let tabs = () => {
    $(".tabs-navigation__item").click(function() {
      let tabName = $(this).attr("show-tab"),
        tabsBody = $(this)
          .closest(".tabs")
          .find(".tabs__body")[0],
        tab = $(tabsBody).find("." + tabName);
      $(this)
        .addClass("tabs-navigation__item--active")
        .siblings()
        .removeClass("tabs-navigation__item--active");
      $(tab)
        .addClass("tab--active")
        .siblings()
        .removeClass("tab--active");
      if ($(tabsBody).find(".js-products-line-slider").length) {
        $(".js-products-line-slider").each(() => {
          $(this).slick("refresh");
        });
        $(".js-product-prev-slider").each(() => {
          $(this).slick("refresh");
        });
      }
    });
  };
  let productPrevSlider = () => {
    $(".js-product-prev__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      appendDots: ".product-prev__colors",
      // customPaging: function(slider, i) {
      //   let color = $(slider.$slides[i]).data("color");
      //   return (
      //     '<div class="product-prev__color"></div>'
      //   );
      // }
    });
  };
  // let productPrevSlider = function () {
  //   $('.js-product-prev__slider').each(function (idx) {
  //     let carouselId = "carousel" + idx;
  //     this.closest('.product-prev').id = corouselId;
  //     $(this).slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: true,
  //       arrows: false,
  //       appendDots: '#' + carouselId + ' .product-prev__colors',
  //       customPaging: function (slider, i) {
  //         let color = $(slider.$slides[i]).data('color');
  //         return `<a class="product-prev__color" style="background-color: ${color}"></a>`
  //       }
  //     });
  //   });
  // }
  let productLineSlider = () => {
    $(".js-products-line-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1139,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            appendDots: '.products-line-slider__dots',
            prevArrow: 'products-line-slider__btn--prev',
            nextArrow: 'products-line-slider__btn--next',
            customPaging: function(slider, i) {
              return '<div class="products-line-slider__dot"></div>';
            },
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  };

  mainSubnavHover();
  openSearchForm();
  clearSearchForm();
  bannerSlider();
  tabs();
  productPrevSlider();
  productLineSlider();
});
$(window).on('load', function() {
  $(".loader").fadeOut();
  $(".preloader").delay(400).fadeOut("slow");
  $("body").removeClass("fixed");
});