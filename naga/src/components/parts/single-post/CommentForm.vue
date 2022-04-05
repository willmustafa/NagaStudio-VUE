<template>
    <div>
        <h3 class="heading">Leave a Comment</h3>
        <span class="divider-line mb-3"></span>
        <form @submit.prevent="sendComment" class="p-5 bg-light mt-4">
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" class="form-control" id="name" v-model="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" cols="30" rows="10" class="form-control" v-model="message" required></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Send" class="btn btn-primary">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        emits: ['onSaveComment'],
        methods: {
            sendComment () {
                this.$emit('onSaveComment',{
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                this.name.value = ''
                this.email.value = ''
                this.message.value = ''
            }
        }

    }
</script>

<style>
    .form-group{
        margin-bottom: 1em;
    }
</style>