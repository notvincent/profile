<template>
    <div class="container">
        <div class="zp-article">
            <h1>Zwift Power Riders Analysis</h1>
            <p>December 7th, 2018</p>
            <p><a href="https://www.zwiftpower.com/events.php" target="_blank">Zwift Power</a> has become the goto site
                for anything Zwift racing related. From viewing events, to racing leaderboards they have it all. In
                addition to all this they also have data on around 32,000 riders publicly available (only riders who
                opt in) so I took the liberty of looking into what kind of people are riding on Zwift</p>
            <p>*data only includes riders on the Zwift Power racing board</p>
            <h2>Basic Demographics</h2>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/age_distribution.png">
                    </figure>
                    <figcaption>
                        Zwift Age Distribution
                    </figcaption>
                </div>
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/gender_distribution.png">
                    </figure>
                    <figcaption>
                        Zwift Gender Distribution
                    </figcaption>
                </div>
                <div class="content-container">
                    <p>The Zwift community is mainly middle aged males, which doesn't surprise me based on my in-game
                        experience. While in game I rarely see female avatars, and based on the data on Zwift Power, the
                        number of females is almost negligable. This is a huge market opportunity for Zwift to grow
                        their user base, since female cycling has evolved and grown a lot in the past couple years. The
                        age range also comes as no surprise based on the topics being discussed on the in game chat.</p>
                </div>
            </div>
            <h2>Country Statistics</h2>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/country_distribution.png">
                    </figure>
                    <figcaption>
                        Zwift Country Distribution
                    </figcaption>
                </div>
                <div class="content-container">
                    <p>No surprise here that GB and US are at the top of the leaderboard for most Zwifters. What is
                        surprising, is the widespread adoption of Zwift by Canadians. This can probably be attributed to
                        the fact that majority of Canadians can only ride outdoors 8-9 months (but 12 months if you're
                        hardcore). Another surprise is how slow adoption is among countries with strong cycling heritage
                        such as France, and Italy, although compared to other nations listed, they have relatively tame
                        winters.</p>
                </div>
            </div>
            <h2>Fitness indicators</h2>
            <div class="analysis-group">
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/weight_ftp_distribution.png">
                    </figure>
                    <figcaption>
                        Zwift Weight vs FTP
                    </figcaption>
                </div>
                <div class="img-container">
                    <figure>
                        <img src="../../assets/blogs/zwift_power/age_wkg_distribution.png">
                    </figure>
                    <figcaption>
                        Zwift Age vs FTP in w/kg
                    </figcaption>
                </div>
                <div class="content-container">
                    <p>It appears that the Zwift population is a relatively fit bunch with an average FTP of 268 watts,
                        while weighing on average 76kgs. FTP is not nearly as correlated with weight as I would have
                        anticipated. In addition to this, it appears that many people are lying about their weight,
                        particularly those at 70kgs, as you can see by the large spike on the top bar plot of the Weight
                        vs FTP chart.</p>
                    <p>When you dive deeper into FTP in w/kg and compare it too age you will notice two things
                        immediately from the bar charts on axis of the second figure. Firstly there is probably
                        something wrong with the age data gathered because it appears to spike and dip with every age
                        category. Secondly the distribution of riders with an FTP of 3-4.1 w/kg is surprisingly uniform.
                        There seems to be a slight negative correlation between age and FTP in w/kg which is no surprise
                        since younger riders tend to be in better physical shape.</p>
                </div>
            </div>
        </div>
        <mailchimp></mailchimp>
        <mailchimp-modal/>
    </div>
</template>

<script>
    import mailchimp from '../../components/mailchimp'
    import mailchimpModal from '../../components/mailchimp_modal'

    export default {
        name: "ZpAnalysis",
        components: {mailchimp, mailchimpModal},
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