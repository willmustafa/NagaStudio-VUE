<template>
    <li class="row mb-4 mt-4">
        <div class="col-1">
            <img class="rounded-circle img-fluid" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
        </div>
        <div class="col-11">
            <h3>{{ comment.name }}</h3>
            <div class="text-muted mb-2">{{ comment.email }}</div>
            <p>{{ comment.message }}</p>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['comment']
    }
</script>

<style>

</style>