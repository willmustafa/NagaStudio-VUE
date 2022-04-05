<template>
    <div class="bio text-center">
        <div class="img-author">
            <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
                alt="person">
        </div>
        <div class="body">
            <h2>Thaila Naga</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus
                excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .img-author {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        margin: auto;
        margin-bottom: 2em;
    }

    .img-author>img {
        width: 150px;
        top: -25%;
        position: relative;
    }
</style>