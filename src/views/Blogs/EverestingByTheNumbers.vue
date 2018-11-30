<template>
    <div class="container">
        <h1>What it took to climb the 8848m</h1>
        <div class="grid">
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/001-mountains.svg">
                </div>
                <h1>8848m</h1>
                <p>Of evlevation gain</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/002-distance.svg">
                </div>
                <h1>260km</h1>
                <p>Total distance covered</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/003-fire.svg">
                </div>
                <h1>7250 Calories</h1>
                <p>Burned over the ride</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/004-time.svg">
                </div>
                <h1>12 hours</h1>
                <p>Total riding time</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/005-like.svg">
                </div>
                <h1>133 bpm</h1>
                <p>Average heart rate</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/006-flash.svg">
                </div>
                <h1>176 W</h1>
                <p>Average power</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/007-bottle.svg">
                </div>
                <h1>10 Bottles</h1>
                <p>Of Gatorade drank</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/008-candy.svg">
                </div>
                <h1>21 Pouches</h1>
                <p>Of Welches consumed</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/009-pedal.svg">
                </div>
                <h1>55238</h1>
                <p>Pedal revolutions</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/004-time.svg">
                </div>
                <h1>11.4 hours</h1>
                <p>Of Lord of the Rings Watched</p>
            </div>
        </div>
        <mailchimp></mailchimp>
    </div>
</template>

<script>
    import mailchimp from '../../components/mailchimp'
    export default {
        name: "EverestingByTheNumbers",
        components: {mailchimp}
    }
</script>

<style scoped lang="scss">
    @import "blog.scss";
    .container {
        text-align: center;
    }
    .grid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        @include respond-below(sm) {
            flex-direction: column;
        }
        .svg-wrapper {
            height: 75px;
            width: 75px;
            img {
                width: 100%;
            }
        }
        .cell {
            h1, p {
                margin: 5px 0;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-basis: 49%;
            height: 300px;
            border: 1px solid $secondary-accent;
        }
    }
</style>