<template>
    <a :href="portfolio.href"
        :style="background">
        <div class="overlay-white"></div>
        <iframe v-if="portfolio.iframe" width="100%" height="100%" :src="portfolio.iframe" title="YouTube video player" frameborder="0" allow="autoplay;" allowfullscreen>
        </iframe>
        <div class="entry-inner">
            <div class="w-100 d-flex align-items-center justify-content-center">
                <div style="color:#000000;" class="text-center">
                    <h5 class="entry-taxonomy">
                        {{ portfolio.term }}
                    </h5>
                    <h3 class="entry-title">{{ portfolio.title }}</h3>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['portfolio'],
        data () {
            return {
                background: {'background-image': 'url('+ this.portfolio.thumb +')'}
            }
        }
    }
</script>

<style>

</style>