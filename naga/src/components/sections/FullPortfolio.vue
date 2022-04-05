<template>
    <section>
        <div class="grid-layout">
            <div class="grid-item" v-for="portfolio in portfolios" :key="portfolio.id">
                <portfolio-grid :portfolio="portfolio"></portfolio-grid>
            </div>
        </div>
    </section>
</template>

<script>
import PortfolioGrid from '../parts/PortfolioGrid.vue'
    export default {
  components: { PortfolioGrid },
        data () {
            return {
                portfolios: [
                    {
                        id: 1,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/lianne-la-havas-performs-at-wiltons-music-hall-on-may-19-2015-in-picture-id474019576?s=2048x2048',
                        title: 'Lianne la Havas',
                        term: 'Studio'
                    },
                    {
                        id: 2,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/chris-martin-and-jonny-buckland-of-coldplay-perform-onstage-at-the-picture-id135855776?s=2048x2048',
                        title: 'Coldplay',
                        term: 'Live',
                        iframe: 'https://www.youtube.com/embed/p-OlqY-q8kA?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1'
                    },
                    {
                        id: 3,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/singer-selena-gomez-performs-at-staples-center-on-july-8-2016-in-los-picture-id545622598?s=2048x2048',
                        title: 'Selena Gomez',
                        term: 'Management'
                    },
                    {
                        id: 4,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/taylor-swift-brings-the-1989-world-tour-to-3arena-on-june-30-2015-in-picture-id479068658?s=2048x2048',
                        title: 'Taylor Swift',
                        term: 'Tour'
                    },
                    {
                        id: 5,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/hayley-williams-of-paramore-performs-on-stage-at-wembley-arena-on-18-picture-id94812209?s=2048x2048',
                        title: 'Paramore',
                        term: 'Studio'
                    },
                    {
                        id: 6,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/photo-of-queen-posed-group-portrait-roger-taylor-freddie-mercury-may-picture-id86102896?s=2048x2048',
                        title: 'Queen',
                        term: 'Studio'
                    },
                    {
                        id: 7,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/ed-sheeran-performs-on-day-2-of-latitude-festival-at-henham-park-on-picture-id481138860?s=2048x2048',
                        title: 'Ed Sheeran',
                        term: 'Studio'
                    },
                    {
                        id: 8,
                        href: '#',
                        thumb: 'https://media.gettyimages.com/photos/jimmy-kimmel-live-airs-every-weeknight-at-1135-pm-est-and-features-a-picture-id634420496?s=2048x2048',
                        title: 'Norah Jones',
                        term: 'Studio'
                    },
                ]

            }
        }

    }
</script>

<style>
    
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
        grid-gap: 0;
        grid-auto-rows: minmax(20vw, auto);
        grid-auto-flow: dense;
        width: 100%;
    }

    .grid-item {
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        height: 100%;
    }

    .grid-item a{
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        height: 100%;
        display: block;
    }

    .overlay-white {
        opacity: 0;
        background: white;
        z-index: 2;
        position: absolute;
        height: 100%;
        width: 100%;
        transition: opacity 0.4s;
    }

    .grid-item:hover .overlay-white {
        opacity: 0.8;
    }

    .grid-item:nth-child(odd) {
        background-color: #ccc;
    }

    .grid-item-2row {
        grid-column-end: span 1;
        grid-row-end: span 2;
    }

    .grid-item:nth-child(2),
    .grid-item:nth-child(4) {
        grid-column-end: span 2;
        grid-row-end: span 2;
    }

    .grid-item:nth-last-child(1) {
        grid-column-end: span 2;
        grid-row-end: span 1;
    }

    .grid-item iframe {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .entry-inner {
        padding: 50px;
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 999;
        opacity: 0;
        transition: opacity 0.4s;
    }

    .grid-item:hover .entry-inner {
        opacity: 1;
    }
</style>