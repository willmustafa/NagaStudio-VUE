<template>
    <router-link :to="'/' + to" custom v-slot="{ route, navigate, isActive, isExactActive }">
        <li :class="[isActive && 'router-link-active', isExactActive && 'active']">
            <a :href="'/' + to" @click="navigate">{{ route.meta.title }}</a>
        </li>
    </router-link>
</template>

<script>
    export default {
        props: ['to']
    }
</script>

<style scoped>
    .nav_light a {
        color: black !important;
    }

    header nav>ul>li {
        display: inline-block;
        padding: 0 25px 20px;
        position: relative;
        transition: all 0.25s ease
    }

    header nav ul li a {
        display: inline-block;
        color: #ffffff;
        font-size: 16px;
        text-transform: uppercase;
        font-family: 'Barlow', sans-serif;
        font-weight: 500;
        letter-spacing: 2.4px;
    }

    header nav ul ul {
        position: absolute;
        top: 100%;
        left: 0;
        width: 200px;
        background-color: #00b9c6;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease-in-out;
        margin-top: 20px;
        padding: 0;
    }

    header nav ul ul li {
        display: block;
        padding: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.30);
    }

    header nav ul li:hover>ul {
        opacity: 1;
        visibility: visible;
        margin-top: 0;
    }

    header nav ul ul li a:hover {
        color: #fff;
        background-color: #fcb62b;
    }

    header nav ul ul li a {
        display: block;
        text-transform: uppercase;
        letter-spacing: 0;
        padding: 15px;
    }

    li.active a,
    li:hover a {
        font-weight: 700;
    }

    li:before {
        content: '';
        position: absolute;
        top: 55%;
        left: 0;
        width: 0;
        height: 2px;
        background: white;
        transition: all 0.25s ease-in;
        margin-left: 10%;
    }

    .nav_light li:before {
        background: black !important;
    }

    li.active:before,
    li:hover:before {
        width: 80%;
    }
</style>