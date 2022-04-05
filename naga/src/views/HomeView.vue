<template>
  <div>
    <MainHero />
    <AboutVue />
    <FullPortfolioVue />
    <FullBlogVue title="Blog" />
    <FullContactVue />
  </div>
</template>

<script>
  import FullBlogVue from '../components/sections/FullBlog.vue'
  import FullContactVue from '../components/sections/FullContact.vue'
  import FullPortfolioVue from '../components/sections/FullPortfolio.vue'
  import AboutVue from '../components/sections/HomeAbout.vue'
  import MainHero from '../components/sections/MainHero.vue'

  export default {
    components: {
      MainHero,
      AboutVue,
      FullPortfolioVue,
      FullBlogVue,
      FullContactVue
    }
  }
</script>