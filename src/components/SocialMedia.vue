<template>
    <div id="media-container">
        <a target="_blank" href="https://www.linkedin.com/in/oliver-dowd-6a6791108/">
            <img src="../assets/linkedin.png">
        </a>
        <a target="_blank" href="https://www.instagram.com/oliver.dowd/">
            <img src="../assets/instagram.png">
        </a>
        <a target="_blank" href="https://www.strava.com/athletes/5114942">
            <img src="../assets/strava.png">
        </a>
        <a target="_blank" href="https://github.com/notvincent">
            <img src="../assets/github.svg">
        </a>
    </div>
</template>

<script>
    export default {
        name: "SocialMedia",
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
                    document.getElementById("media-container").style.bottom = "0";
                } else {
                    document.getElementById("media-container").style.bottom = "-80px";
                }
                this.scrollPos = currentScrollPos;
            }
        }
    }
</script>

<style scoped lang="scss">
    #media-container {
        position: fixed;
        right: 0;
        bottom: 0;
        transition: bottom 0.3s;
        img {
            cursor: pointer;
            width: 30px;
            height: 30px;
            padding: 10px;
            filter: grayscale(100%);
            opacity: 0.6;
        }
        img:hover {
            filter: grayscale(0%);
            opacity: 1;
        }
    }
</style>