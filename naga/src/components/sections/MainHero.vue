<template>
    <section class="hero-banner bg-dark py-5 vh-100">
        <div class="overlay"></div>
        <div class="hero-background"
            style="background-image: url('https://media.gettyimages.com/photos/musician-hayley-williams-of-paramore-performs-onstage-at-kroq-weenie-picture-id686137630?s=2048x2048')">
        </div>
        <div class="container position-relative hero-wrapper">
            <div class="row row align-items-center align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-2 mt-3 fw-bold text-white">Recording Legends</h1>
                    <span class="divider-line mt-4"></span>
                    <h4 class="text-white my-4">Welcome to NagaStudios, home to exceptional recording and mixing
                        studios created by Thaila Naga, and to a community of world-class studio talent.</h4>
                    <a href="#" class="btn btn-outline-light btn-lg border">Learn More</a>
                </div>
            </div>
        </div>
        <single-player></single-player>
    </section>
</template>

<script>
import SinglePlayer from '../players/SinglePlayer.vue'
    export default {
  components: { 'single-player': SinglePlayer },}
</script>

<style>
    /* HERO */

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(to right, #000000cf, transparent);
        z-index: 2;
        top: 0;
    }

    .hero-banner {
        display: flex;
    }

    .hero-banner .btn {
        position: relative;
        overflow: hidden;
        z-index: 9;
    }

    .hero-banner .btn-primary {
        color: white;
        background-color: rgba(1, 164, 121, 0.1);
        border-color: #01a479;
    }

    .hero-banner .btn:before {
        content: "";
        background: #ed5561;
        width: 4px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        -webkit-transition: all 0.5s ease-in-out 0s;
        -moz-transition: all 0.5s ease-in-out 0s;
        -ms-transition: all 0.5s ease-in-out 0s;
        -o-transition: all 0.5s ease-in-out 0s;
        transition: all 0.5s ease-in-out 0s;
    }

    .hero-banner .btn:hover:before {
        width: 100%;
    }

    .hero-wrapper {
        z-index: 999;
        display: flex;
    }

    .hero-wrapper h4{
        font-weight: normal;
        letter-spacing: 1px;
    }

    .hero-background {
        background-color: rgba(0, 0, 0, 0);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        visibility: inherit;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .divider-line {
        width: 87px;
        height: 3px;
        display: inline-block;
        background-color: #00b9c6;
    }

    /* END HERO */
</style>