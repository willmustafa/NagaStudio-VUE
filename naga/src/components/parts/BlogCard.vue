<template>
    <div class="card">
        <router-link to="/single">
            <img class="card-img-top"
                :src="blogPost.thumb"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ blogPost.title }}</h5>
                <p class="card-text"><small class="text-muted"><i class="far fa-user"></i>admin<i
                            class="fas fa-calendar-alt"></i>Jan
                        20, 2018</small></p>
                <p class="card-text">{{ blogPost.description }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['blogPost']

    }
</script>

<style scoped>
.card {
  background-color: transparent !important;
  border: none !important;
}

.card-text i:first-child{
    padding-right: 5px;
}

.card-text i:last-child{
    padding-right: 5px;
    padding-left: 10px;
}
</style>