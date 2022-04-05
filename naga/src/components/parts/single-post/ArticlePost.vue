<template>
    <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi
            eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt
            eveniet rerum repellendus porro.</p>
        <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo.
            Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab
            similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
        <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut,
            ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam
            tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
        <img class="img-fluid"
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi
            eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt
            eveniet rerum repellendus porro.</p>
        <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo.
            Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab
            similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
        <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut,
            ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam
            tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/aC-LKEpaR1s" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo.
            Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab
            similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
        <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut,
            ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam
            tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>

        <CommentSection />
    </article>
</template>

<script>
import CommentSection from './CommentSection.vue'

    export default {
        components: {
            CommentSection
        }
    }
</script>

<style>
    article {
        margin-bottom: 4em;
    }

    article img {
        margin-bottom: 1em;
    }
</style>