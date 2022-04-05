<template>
    <div class="post-header" :style="featuredImg">
        <div class="overlay-full"></div>
        <div class="container position-relative hero-wrapper">
            <div class="row align-items-center align-items-center w-100">
                <div class="col-lg-12 text-center">
                    <span class="rounded-pill bg-primary p-1">Technique</span>
                    <h1 class="display-2 mt-3 fw-bold text-white">Recording the silence</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                featuredImg: {
                    backgroundImage: `url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`
                }
            }
        }

    }
</script>

<style scoped>
    .post-header {
        display: block;
        height: 50vh;
        background: black;
        margin-bottom: 4em;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    .post-header>* {
        height: 100%;
    }

    .overlay-full {
        width: 100%;
        height: 100%;
        position: absolute;
        background: black;
        z-index: 2;
        top: 0;
        opacity: 0.5;
    }
</style>