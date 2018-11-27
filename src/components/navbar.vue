<template>
    <div id="navbar" class="navbar">
        <router-link :to="{name: 'home'}" class="logo-container">
            <h1>OLIVER DOWD</h1>
        </router-link>
        <router-link :to="{name: 'blog'}" class="blog-container">
            <h2>Blog</h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        created () {
            window.addEventListener('scroll', this.handleScroll)
        },
        data () {
            return {
                scrollPos: window.pageYOffset
            }
        },
        destroyed () {
            window.removeEventListener('scroll')
        },
        methods: {
            handleScroll () {
                var currentScrollPos = window.pageYOffset;
                if (this.scrollPos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-80px";
                }
                this.scrollPos = currentScrollPos;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../style.scss";
    .navbar {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        height: $navbar-height;
        padding: 0px 20px;
        color: $primary-accent-dark;
        display: flex;
        align-items: center;
        transition: top 0.3s;
        width: 100%;
    }
    a {
        text-decoration: none !important;
        color: $primary-accent-dark;
    }
    .blog-container {
        margin-left: auto;
        margin-right: 40px;
    }
    .navbar h1 {
        font-size: 2em;
    }
</style>