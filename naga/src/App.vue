<template>
  <main>
    <HomeHeader :classLight="classHeader" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <CopyFooter />
  </main>
</template>

<script>
  import HomeHeader from './components/header/HomeHeader.vue'
  import CopyFooter from './components/sections/CopyFooter.vue'

  export default {
    name: 'NagaStudio',
    components: {
      HomeHeader,
      CopyFooter
    },
    computed: {
      classHeader: false
    }
  }
</script>

<style>
  body {
    background: black;
  }

  a,
  h1,
  h2,
  h3,
  h4 {
    transition: all 0.4s ease-in-out;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  section{
    min-height: 100vh;
    display: flex;
  }

  section > *{
    align-items: center;
    display: flex;
  }

  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.25s ease-out;
  }
</style>