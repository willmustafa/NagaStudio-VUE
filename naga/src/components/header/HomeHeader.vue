<template>
  <header class="position-fixed sticky-top" :class="{nav_light: scrollPosition > 50}">
    <div class="container-fluid">
      <div class="d-flex align-middle flex-wrap">
        <div class="logo">
          <router-link to="/" class="white-logo"><img src="../../assets/logo-white.png" alt=""></router-link>
        </div>
        <!--logo end-->
        <nav class="ms-auto">
          <ul>
            <li class="active"> <router-link to="/">HOME</router-link> 
            </li>
            <li><a href="#" title="">ALBUMS</a>
              <ul>
                <li><a href="albums.html" title="">Discography</a></li>
                <li><a href="single-album.html" title="">Single album</a></li>
              </ul>
            </li>
            <li><router-link to="/blog">BLOG</router-link></li>
            <li><router-link to="/about">ABOUT</router-link></li>
            <li><router-link to="/contact">CONTACT</router-link></li>
          </ul>
        </nav>
        <!--navigation end-->
        <ul class="social-links hd-v">
          <li><a href="#" title=""><i class="fab fa-facebook-square"></i></a></li>
          <li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
          <li><a href="#" title=""><i class="fab fa-youtube"></i></a></li>
        </ul>
        <!--social-links end-->
        <div class="menu-btn">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </div>
      </div>
      <!--header-content end-->
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        scrollPosition: null
      }
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>

<style scoped>
  /* HEADER */
  .nav_light {
    background-color: white
  }

  .nav_light a {
  color: black !important;
}

  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    padding-top: 35px;
    transition: background-color 0.4s;
    z-index: 9999;
  }

  header .container-fluid {
    padding: 0 60px;
  }

  header nav>ul>li {
    display: inline-block;
    padding: 0 25px 20px;
    position: relative;
  }

  header nav ul li::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  header nav ul li.active::before {
    opacity: 1;
    visibility: visible;
  }

  header nav ul li a {
    display: inline-block;
    color: #ffffff;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    letter-spacing: 2.4px;
  }

  header nav ul ul {
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    background-color: #00b9c6;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    margin-top: 20px;
    padding: 0;
  }

  header nav ul ul li {
    display: block;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.30);
  }

  header nav ul li:hover>ul {
    opacity: 1;
    visibility: visible;
    margin-top: 0;
  }

  header nav ul ul li a:hover {
    color: #fff;
    background-color: #fcb62b;
  }

  header nav ul ul li a {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0;
    padding: 15px;
  }

  .social-links.hd-v {
    margin-left: 18px;
    padding-bottom: 20px;
  }

  .social-links.hd-v li {
    margin-right: 27px;
  }

  .social-links li {
    display: inline-block;
    margin-right: 30px;
  }

  .social-links.hd-v li a {
    color: #fff;
  }

  .social-links li a {
    display: inline-block;
    color: #000000;
    font-size: 16px;
  }

  .logo {
    padding-bottom: 20px;
  }

  .logo>a img {
    max-width: 161px;
  }

  /* END HEADER */
</style>