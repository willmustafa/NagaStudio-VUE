<template>
    <div>
        <PostHeader />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ArticlePost />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostHeader from '../components/parts/single-post/PostHeader.vue'
import ArticlePost from '../components/parts/single-post/ArticlePost.vue'

    export default {
        components: {
            PostHeader,
            ArticlePost
        }
    }
</script>

<style>
body{
    background: white
}
</style>