<template>
    <section class="bg-light">
        <div class="container">
            <div class="d-block">
                <div class="row">
                    <h1 class="display-2 mt-3 fw-bold">Blog</h1>
                    <span class="divider-line mt-4"></span>
                </div>
                <div class="row row-cols-1 row-cols-md-3 mt-4">
                    <div class="col" v-for="blog in blogs" :key="blog.id">
                        <blog-post :blogPost="blog"></blog-post>  
                    </div>              
                </div>
                <div class="row mt-5 text-center ">
                    <a href="">
                        <button class="btn btn-outline-primary">Load more</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BlogCardVue from '../parts/BlogCard.vue'

    export default {
        data () {
            return {
                blogs: [{
                    id: 1,
                    title: 'How to do a live',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...',
                    thumb: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                },
                {
                    id: 2,
                    title: 'Recording the silence',
                    description: 'Other lorem ipsum, aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudanti...',
                    thumb: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                },
                {
                    id: 3,
                    title: 'Microphones!',
                    description: 'Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...',
                    thumb: 'https://images.unsplash.com/photo-1581547848323-7d389b1d9325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                }]
            }
        },
        components: {
            'blog-post': BlogCardVue
        }

    }
</script>

<style>
.card-body {
  padding: 1rem 0 0 0;
}

.card a{
    color: black;
}

.card-title{
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
}
</style>