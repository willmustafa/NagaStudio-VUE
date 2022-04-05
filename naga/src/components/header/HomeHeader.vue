<template>
  <header class="position-fixed sticky-top" :class="{nav_light: scrollPosition > 50}">
    <div class="container-fluid">
      <div class="d-flex align-middle flex-wrap">
        <div class="logo">
          <router-link to="/" class="white-logo"><img src="../../assets/logo-white.png" alt=""></router-link>
          <router-link to="/" class="black-logo"><img src="../../assets/logo-dark.png" alt=""></router-link>
        </div>
        <!--logo end-->
        <nav class="ms-auto">
          <ul>
            <NavLink v-for="(menu, i) in menus" :key="i" :to="menu" />
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
  import NavLink from './NavLink.vue'

  export default {
    components: {
      NavLink
    },
    data() {
      return {
        scrollPosition: null,
        menus: ['', 'albums', 'blog', 'about', 'contact']
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
  .nav_light a {
    color: black !important;
  }

  .black-logo {
    display: none;
  }

  .nav_light .white-logo {
    display: none;
  }

  .nav_light .black-logo {
    display: block;
  }

  .nav_light {
    background-color: white
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

  .social-links li:before {
    display: none !important;
  }
</style>