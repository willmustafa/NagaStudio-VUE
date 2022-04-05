<template>
    <div class="comment-section">
        <h3 class="heading">Comments</h3>
        <span class="divider-line mb-3"></span>
        <ul class="row">
            <CommentSingle v-for="(comment, i) in comments" :key="i" :comment="comment"/>
        </ul>
        <div class="row">
            <CommentForm @onSaveComment="saveComment" />
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
        },
        data () {
            return {
                comments: [
                    {
                        name: 'Guilherme Magnus',
                        email: 'gui@magnus.com',
                        message: 'Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.'
                    },
                    {
                        name: 'Haron Maria',
                        email: 'haron@maria.com',
                        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.'
                    }
                ]
            }
        },
        methods: {
            saveComment (comment){
                this.comments.push(comment)
            }
        }
    }
</script>

<style>
.comment-section{
    margin-top: 2em;
}
</style>