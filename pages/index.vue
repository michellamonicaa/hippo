<template>
  <div>
    <div class="site-wrap">
      <div class="site-mobile-menu">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <header class="site-navbar py-1" role="banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-xl-2">
              <h1 class="mb-0">
                <a href="index.html" class="text-black h2 mb-0">Travelers</a>
              </h1>
            </div>
            <div class="col-10 col-md-8 d-none d-xl-block">
              <nav
                class="site-navigation position-relative text-right text-lg-center"
                role="navigation"
              >
                <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li class="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="has-children">
                    <a href="destination.html">Destinations</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Japan</a>
                      </li>
                      <li>
                        <a href="#">Europe</a>
                      </li>
                      <li>
                        <a href="#">China</a>
                      </li>
                      <li>
                        <a href="#">France</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="discount.html">Discount</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>

                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <!-- <li><a href="booking.html">Book Online</a></li> -->
                </ul>
              </nav>
            </div>

            <div class="col-6 col-xl-2 text-right">
              <div class="d-none d-xl-inline-block">
                <ul
                  class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
                  data-class="social"
                >
                  <li>
                    <a href="#" class="pl-0 pr-3 text-black">
                      <span class="icon-tripadvisor"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="pl-3 pr-3 text-black">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="pl-3 pr-3 text-black">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="pl-3 pr-3 text-black">
                      <span class="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style="position: relative; top: 3px;"
              >
                <a href="#" class="site-menu-toggle js-menu-toggle text-black">
                  <span class="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <client-only>
        <div class="slide-one-item home-slider owl-carousel">
          <div
            class="site-blocks-cover overlay"
            style="background-image: url(images/hero_bg_1.jpg);"
          >
            <div class="container">
              <div
                class="row align-items-center justify-content-center text-center"
              >
                <div class="col-md-8">
                  <h1 class="text-white font-weight-light">
                    Never Stop Exploring
                  </h1>
                  <p class="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga est inventore ducimus repudiandae.
                  </p>
                  <p>
                    <a href="#" class="btn btn-primary py-3 px-5 text-white"
                      >Book Now!</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="site-blocks-cover overlay"
            style="background-image: url(images/hero_bg_2.jpg);"
          >
            <div class="container">
              <div
                class="row align-items-center justify-content-center text-center"
              >
                <div class="col-md-8">
                  <h1 class="text-white font-weight-light">Love The Places</h1>
                  <p class="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga est inventore ducimus repudiandae.
                  </p>
                  <p>
                    <a href="#" class="btn btn-primary py-3 px-5 text-white"
                      >Book Now!</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {}
</script>
