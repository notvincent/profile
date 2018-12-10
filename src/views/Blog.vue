<template>
    <div class="container">
        <router-link :to="{name: 'everesting'}">
            <div class="blog-card">
                <div class="image-container">
                    <img src="../assets/blogs/everesting/cover.jpg">
                </div>
                <div class="content-container">
                    <h2>Everesting on Zwift Innsbruck</h2>
                    <p>Riding up hill for 12 hours! Sounds like my kind of challenge! Here's the story of how I became the first person to Everest Innsbruck.</p>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'everesting_by_the_numbers'}">
            <div class="blog-card">
                <div class="image-container">
                    <img style="max-height: 300px;" src="../assets/blogs/everesting/svg/001-mountains.svg">
                </div>
                <div class="content-container">
                    <h2>Everesting: by the numbers</h2>
                    <p>Everesting was no small feet, (it was actually 29029 ft.). Here are some stats behind the epic ride.</p>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'ftp_booster'}">
            <div class="blog-card">
                <div class="image-container">
                    <img src="../assets/blogs/ftp_booster.png">
                </div>
                <div class="content-container">
                    <h2>Zwift 4 Week FTP Booster Review</h2>
                    <p>Over the month of January I boosted my FTP by 40 watts in one month following a Zwift training plan. Here's my thoughts on what it's like to follow a training plan religiously.</p>
                </div>
            </div>
        </router-link>
        <router-link :to="{name: 'zp_analysis'}">
            <div class="blog-card">
                <div class="image-container">
                    <img src="../assets/blogs/zwift_power/cover.png">
                </div>
                <div class="content-container">
                    <h2>Zwiftpower Rankings Analysis</h2>
                    <p>A report on the current Zwift Power ranking system</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        created: () => {
            document.head.querySelector('meta[name=description]').content = "Blogs written by Oliver Dowd mainly focused on his lifestyle of climbing and cycling"
            document.title = "Blog - Oliver Dowd"
        }
    }
</script>

<style scoped lang="scss">
    @import "../style.scss";
    @import "../media_querries.scss";
    .blog-card {
        display: flex;
        padding-bottom: 40px;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        @include respond-below(sm) {
            flex-direction: column;
        }
        .image-container {
            flex-basis: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img {
            width: 100%;
            max-width: 500px;
            filter: grayscale(100%);
        }
        h2 {
            color: $secondary-accent;
        }
        .content-container {
            flex-basis: 50%;
            border-left: 3px solid $secondary-accent;
            margin-left: 40px;
            padding: 10px 40px;
            @include respond-below(sm) {
                padding: 10px 10px 10px 30px;
                margin: 5px 0 0 5px;
            }
        }
    }
</style>