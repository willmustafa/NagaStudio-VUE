<template>
    <div>
        <PostHeader />
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-12">
                    <ArticlePost />
                </div>
                <div class="col-md-4 col-12">
                    <SideBar />
                </div>
            </div>
        </div>
        <RelatedPosts title="Related Posts" />
    </div>
</template>

<script>
import SideBar from '../components/parts/SideBar.vue'
import PostHeader from '../components/parts/single-post/PostHeader.vue'
import ArticlePost from '../components/parts/single-post/ArticlePost.vue'
import RelatedPosts from '../components/sections/FullBlog.vue'

    export default {
        components: {
            SideBar,
            PostHeader,
            ArticlePost,
            RelatedPosts
        }
    }
</script>

<style>
body{
    background: white
}
</style>