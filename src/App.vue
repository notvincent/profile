<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
        <social></social>
    </div>
</template>

<script>
    import navbar from './components/navbar'
    import social from './components/SocialMedia'
    export default {
        name: "App",
        components: {navbar, social}
    }
</script>


<style lang="scss">
    @import './style.scss';
    #app {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: $default-font;
        color: $primary-accent-dark;
        margin-top: $navbar-height;
    }
    h1, h2, h3, h4, h5 {
        font-weight: 300
    }

    a {
        text-decoration: none;
    }

    html, body {
        margin: 0;
        width: 100%;
        background-color: $background;
    }
</style>
