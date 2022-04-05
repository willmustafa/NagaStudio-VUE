<template>
    <div class="comment-section">
        <h3 class="heading">Comments</h3>
        <span class="divider-line mb-3"></span>
        <ul class="row">
            <CommentSingle />
            <CommentSingle />
        </ul>
        <div class="row">
            <CommentForm />
        </div>
    </div>
</template>

<script>
    import CommentSingle from './CommentSingle.vue'
    import CommentForm from './CommentForm.vue'

    export default {
        components: {
            CommentSingle,
            CommentForm
        }
    }
</script>

<style>
.comment-section{
    margin-top: 2em;
}
</style>