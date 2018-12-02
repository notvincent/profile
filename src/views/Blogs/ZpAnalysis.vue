<template>
    <div class="container">
        <div class="zp-article">
            <h1>Zwift Power Riders Analysis</h1>
            <p>December 7th, 2018</p>
            <p><a href="https://www.zwiftpower.com/events.php" target="_blank">Zwift Power</a> has become the goto site
                for
                anything Zwift racing related. From viewing events, to racing leaderboards they have it all. In addition
                to
                all this they also have a data on around 32,000 riders publicly available (only riders who opt in) so I
                took the
                liberty of looking into what kind of people are riding on Zwift</p>
            <p>* The data in this article only includes riders who have inputed an FTP, and are on the racing
                leaderboard</p>
            <h2>Basic Demographics</h2>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/age_distribution_all.png">
                    </figure>
                </div>
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/gender_distribution.png">
                    </figure>
                </div>
                <div class="content-container">
                    <p>The Zwift community is mainly middle aged males, which doesn't surprise me based on my in-game
                        experience. While in game I rarely see female avatars, and based on the data on Zwift Power, the
                        number of females is almost negligable. This is a huge market opportunity for Zwift to grow
                        their user base, since female cycling has evolved and grown a lot in the past couple years. The
                        age range also comes as no surprise based on the topics being discussed on the in game chat.</p>
                </div>
            </div>
            <h2>Rider Fitness</h2>
            <p>The rider fitness of my sample population is most likely skewed since I was only including riders on the
                Zwift Power racing board, and these riders are more likely to have a higher level of fitness. In
                addition FTP and weight is purely based on users inputing these metrics themselves, and I'm sure some
                people skew their numbers.</p>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/ftp_vs_weight.jpg">
                    </figure>
                </div>
                <div class="content-container">
                    <p>The racing community on Zwift is a relatively fit group, with the average weight around 74kg and
                        the average FTP around 280 watts. There's a large group of people in the centroid but as you
                        venture further in any direction the frequency of people quickly drops. Generally speaking, the
                        closer to the bottom left corner you are the better, unless the course is flat in which case
                        being towards the bottom of the heatmap is all that matters.</p>
                </div>
            </div>
            <h2>What it takes to rise the ranks</h2>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/rank_vs_wkg.png">
                    </figure>
                </div>
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/rank_vs_ftp_a.png">
                    </figure>
                </div>
                <div class="content-container">
                    <p>So what does it take to rise up through the ranks and be the Zwift king/queen. Well quite simply
                        you need fitness. For riders to lower their ranking score (remember on Zwift Power a lower score
                        is better), the best thing they can do is work on their fitness and try to move up into the A
                        category. However once in the A category, the answer isn't as simple. The second chart shows
                        that the correlation between fitness and rank isn't quite as present as in other categories.
                        This is likely because being fit in A group doesn't gaurantee a win since it's unlikely you'll
                        be able to simply ride away from the rest of the group. Instead tactics and Zwift in game meta
                        plays a more important role, such as riding at the minimum power in order to stay in the group
                        draft and conserving all the energy you can for critical moments.</p>
                </div>
            </div>
        </div>
        <mailchimp></mailchimp>
    </div>
</template>

<script>
    import mailchimp from '../../components/mailchimp'

    export default {
        name: "ZpAnalysis",
        components: {mailchimp},
        created: () => {
            document.head.querySelector('meta[name=description]').content = "An analysis on the rider population on zwift power, and what it takes to be a top level racer"
            document.title = "Zwift Power Analysis - Oliver Dowd"
        }
    }
</script>

<style scoped lang="scss">
    @import "blog.scss";

    .container {
        text-align: center;
    }

    .zp-article {
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
                @include respond-below(lg) {
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