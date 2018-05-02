! function (e) {
    "use strict";
    jQuery(window).load(function () {
        e("#zoom-01").elevateZoom({
            gallery: "gallery-01",
            zoomType: "lens",
            lensShape: "round",
            lensSize: 200,
            galleryActiveClass: "active",
            imageCrossfade: !0
        }),
            e("#zoom-01").on("click", function (a) {
                var t = e("#zoom-01").data("elevateZoom");
                return e.fancybox(t.getGalleryList()), !1
            })
    }),
        e("#home-slider").owlCarousel({
            rtl: true,
            loop: !0,
            items: 1,
            dots: !1,
            nav: !0,
            autoHeight: !1,
            touchDrag: !0,
            mouseDrag: !0,
            margin: 0,
            autoplay: !0,
            slideSpeed: 300,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                600: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                768: {
                    items: 1,
                    nav: !0
                },
                1100: {
                    items: 1,
                    nav: !0
                }
            }
        }), e("#testimonial-slider").owlCarousel({
        rtl: true,
            loop: !0,
            items: 1,
            dots: !1,
            nav: !0,
            autoHeight: !1,
            touchDrag: !0,
            mouseDrag: !0,
            margin: 0,
            autoplay: !0,
            slideSpeed: 300,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                600: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                768: {
                    items: 1,
                    nav: !1
                },
                1100: {
                    items: 1,
                    nav: !0
                }
            }
        }), e("#clients-slider").owlCarousel({
            rtl: true,
            loop: !0,
            items: 6,
            dots: !1,
            nav: !1,
            autoHeight: !1,
            touchDrag: !0,
            mouseDrag: !0,
            margin: 30,
            autoplay: !1,
            slideSpeed: 300,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                600: {
                    items: 3,
                    nav: !1,
                    dots: !1
                },
                768: {
                    items: 4,
                    nav: !1
                },
                1100: {
                    items: 6,
                    nav: !1
                }
            }
        }), e("#about-slider").owlCarousel({
            loop: !0,
            items: 1,
            nav: !1,
            dots: !0,
            autoHeight: !1,
            touchDrag: !0,
            mouseDrag: !0,
            margin: 0,
            autoplay: !0,
            slideSpeed: 300,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                600: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                768: {
                    items: 1,
                    nav: !1,
                    dots: !0
                },
                1100: {
                    items: 1,
                    nav: !1
                }
            }
        }), e("#say-slider").owlCarousel({
            loop: !0,
            items: 1,
            dots: !0,
            nav: !1,
            autoHeight: !1,
            touchDrag: !0,
            mouseDrag: !1,
            margin: 0,
            autoplay: !0,
            slideSpeed: 100,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                600: {
                    items: 1,
                    nav: !1,
                    dots: !1
                },
                768: {
                    items: 1,
                    nav: !1
                },
                1100: {
                    items: 1,
                    nav: !1
                }
            }
        }), e(".counter").length && e(".counter").counterUp({
            delay: 20,
            time: 2e3
        }), e(window).scroll(function () {
            e(".navbar").offset().top > 250 ? e(".navbar-fixed-top").addClass("top-nav-collapse") : e(".navbar-fixed-top").removeClass("top-nav-collapse")
        }), e(function () {
            function a() {
                var a = e(window).width();
                if (a > 767) {
                    var t;
                    e(".dropdown").hover(function () {
                        clearTimeout(t), e(this).addClass("open")
                    }, function () {
                        var a = e(this);
                        t = setTimeout(function () {
                            a.removeClass("open")
                        }, 50)
                    })
                }
            }
            a(), e(window).resize(a)
        }), e(".btn-video-play").on("click", function () {
            e(".video-item .video-preview").append(video_url), e(this).hide()
        }), e(function () {
            e(".filter-design").on("click", function () {
                e(".branding, .creative").fadeOut(400), e(".design").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-design").addClass("active")
            }), e(".filter-branding").on("click", function () {
                e(".design, .creative").fadeOut(400), e(".branding").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-branding").addClass("active")
            }), e(".filter-creative").on("click", function () {
                e(".design, .branding").fadeOut(400), e(".creative").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-creative").addClass("active")
            }), e(".filter-all").on("click", function () {
                e(".design, .branding, .creative").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-all").addClass("active")
            })
        }), e(function () {
            e(".filter-new").on("click", function () {
                e(".poster, .banner, .calander, .bc").fadeOut(400), e(".new").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-new").addClass("active")
            }), e(".filter-poster").on("click", function () {
                e(".new, .banner, .calander, .bc").fadeOut(400), e(".poster").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-poster").addClass("active")
            }), e(".filter-banner").on("click", function () {
                e(".new, .poster, .calander, .bc").fadeOut(400), e(".banner").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-banner").addClass("active")
            }), e(".filter-calander").on("click", function () {
                e(".new, .poster, .banner, .bc").fadeOut(400), e(".calander").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-calander").addClass("active")
            }), e(".filter-bc").on("click", function () {
                e(".new, .poster, .banner, .calander").fadeOut(400), e(".bc").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-bc").addClass("active")
            }), e(".filter-all-products").on("click", function () {
                e(".new, .poster, .banner, .calander, .bc").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-all-products").addClass("active")
            })
        }), e(".rating input").change(function () {
            var a = e(this);
            e(".rating .selected").removeClass("selected"), a.closest("label").addClass("selected")
        }), e(window).load(function () {
            e(".status").fadeOut(), e(".preloader").delay(350).fadeOut("slow")
        })
}(jQuery);