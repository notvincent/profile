<template>
    <div class="container">
        <h1>What it takes everest on a bike</h1>
        <div class="grid">
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
                <h1>216 bpm</h1>
                <p>Average heart rate up the climb</p>
            </div>
            <div class="cell">
                <div class="svg-wrapper">
                    <img src="../../assets/blogs/everesting/svg/006-flash.svg">
                </div>
                <h1>216 W</h1>
                <p>Average power up the climb</p>
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
                <h1>16 Pouches</h1>
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
        <br/>
        <div class="btn-article">
            <h2>Digging into the numbers</h2>
            <p>A happy byproduct of doing 22 reps up one hill in one day is the amount of data it gives you to analyze,
                and even more data when you're doing it with another person. Here's a couple interesting takeaways from
                the data we collected of the course of the day.</p>
            <h3>Heart rate and power data over the day</h3>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/everesting/b_t_n/hr_vs_rep.png">
                        <figcaption>Average heart rate from each ascent of the climb</figcaption>
                    </figure>
                </div>
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/everesting/b_t_n/pwr_vs_rep.png">
                        <figcaption>Average power from each ascent of the climb</figcaption>
                    </figure>
                </div>
                <div class="content-container">
                    <p>Heart rate and power data was pulled from Strava based off the reverse KOM segment. As expected
                        our power slowly trended downwards, although the downward trend wasn't as steep as we
                        anticipated. Evan is doing around 6 watts more than me consistently due to the fact that he's
                        around 2kg heavier.</p>
                    <p>The heart rate data was a bit more interesting than the power data. We had anticipated that as we
                        got further into the ride our heart rates would steadily increase. Evan's heart rate data
                        matches our prediction however my heart rate surprisingly trended downwards, which i'll
                        attribute to my power numbers decreasing throughout the day.</p>
                </div>
            </div>
            <h3>How power effects heart rate and climb time</h3>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/everesting/b_t_n/time_vs_pwr.png">
                        <figcaption>Ascent time decreases roughly linearly as power increases</figcaption>
                    </figure>
                </div>
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/everesting/b_t_n/pwr_vs_hr.png">
                        <figcaption>Heart rate changes based on power following an order 2 polynomial</figcaption>
                    </figure>
                </div>
                <div class="content-container">
                    <p>Based on the range of data we collected, the ascent time roughly decreased linearly with respect
                        to the amount of w/kg. Confirming what we already know: w/kg is everything up a mountain.</p>
                    <p>As expected my heart rate increased with power, roughly following an order 2 polynomial.
                        Interestingly, Evan's curve has a local minimum suggesting that he has an optimal power level
                        where his heart rate decreases. This observation may not be accurate since as noted earlier
                        Evan's heart rate steadily increased throughout the day as his power decreased, more research
                        must be done to come up with a solid conclusion.</p>
                </div>
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
            width: calc(33% - 6px);
            @include respond-below(sm) {
                width: 100%;
            }
            height: 300px;
            border: 1px solid $secondary-accent;
        }
    }

    .btn-article {
        img {
            width: 100%;
        }
        .analysis-group {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            @include respond-below(md) {
                flex-direction: column;
            }
            .img-container {
                width: 50%;
                @include respond-below(md) {
                    width: 100%;
                }
            }
            .content-container {
                text-align: left;
                width: 100%;
            }
        }
    }
</style>