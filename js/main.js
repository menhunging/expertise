let observer = () => {
  // функция для работы destroy Swiper
};

$(document).ready(function () {
  if ($(".burger").length > 0) {
    $(".burger").on("click", function () {
      $(this).toggleClass("opened");
    });
  }

  if ($(".menu-link").length > 0) {
    $(".menu-link").map(function () {
      !$(this).next(".menu-sub").length > 0 && $(this).addClass("not-arrow");
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  // if ($(".text-section__slider").length > 0) {
  //   const sliders = document.querySelectorAll(".text-section__slider");

  //   let mySwipers = [];

  //   function sliderinit() {
  //     sliders.forEach((slider, index) => {
  //       if (!slider.swiper) {
  //         mySwipers[index] = new Swiper(slider, {
  //           slidesPerView: 1,
  //           navigation: {
  //             nextEl: ".swiper-button-next",
  //             prevEl: ".swiper-button-prev",
  //           },
  //           pagination: {
  //             el: ".swiper-pagination",
  //             clickable: true,
  //           },
  //           on: {
  //             init: function (swiper) {},
  //           },
  //         });
  //       } else {
  //         return;
  //       }
  //     });
  //   }

  //   sliders.length && sliderinit();
  // }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        setTimeout(() => {
          $("body").removeClass("modal-open");
        }, 300);
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".copy-right").length > 0) {
    moveBlockFooter();
  }

  if ($(".slider-service").length > 0) {
    const swiper = new Swiper(".slider-service", {
      slidesPerView: 3,
      spaceBetween: 30,
      watchSlidesProgress: true,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 19,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1620: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      },
    });
  }

  if ($(".slider-objects").length > 0) {
    const sliders = document.querySelectorAll(".slider-objects");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 19,
            watchSlidesProgress: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            on: {
              init: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 19,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".slider-docs").length > 0) {
    const swiper = new Swiper(".slider-docs", {
      slidesPerView: 4,
      spaceBetween: 19,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 19,
        },
      },
    });
  }

  if ($(".slider-reviews").length > 0) {
    const swiper = new Swiper(".slider-reviews", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".slider-partners").length > 0) {
    const swiper = new Swiper(".slider-partners", {
      slidesPerView: 7,
      slidesPerGroup: 7,
      // spaceBetween: 20,
      autoHeight: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        1200: {
          slidesPerView: 7,
          slidesPerGroup: 7,
        },
      },
    });
  }
});

$(window).on("resize", function () {
  if ($(".copy-right").length > 0) {
    moveBlockFooter();
  }
});

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
  }, 300);
}

function moveBlockFooter() {
  if ($(window).width() < 1023) {
    $(".footer__row").append($(".copy-right"));
  } else {
    $(".footer__left").append($(".copy-right"));
  }
}
