<template>
    <div class="home">
        <img id="cover-img" src="../assets/cover.jpg"/>
        <div class="container">
            <div class="section">
                <div class="section-title">
                    <h1>Professional</h1>
                </div>
                <div class="section-content">
                    <div class="content-container">
                        <h2>Software Developer</h2>
                        <h3>Freshii</h3>
                        <h4>September 2018 - December 2018</h4>
                        <ul>
                            <li>Helped develop the Freshii 2.0 website, where I played a large role in implementing multi-lingual support, and user location settings</li>
                            <li>Lead the SEO effort for the newly released Freshii 2.0 web app</li>
                            <li>Created many unique and responsive content pages based on specifications provided by designers</li>
                            <li>Took part and occasionally lead the PO review process for Web, Android, and IOS application</li>
                        </ul>
                    </div>
                    <div class="content-container">
                        <h2>Catastrophe Modeling Application Developer</h2>
                        <h3>Validus Research</h3>
                        <h4>January 2018 - April 2018</h4>
                        <ul>
                            <li>Helped release the MVP of an in-house data analytics tool</li>
                            <li>Played a large role in the process of continuous bug fixes before and after release</li>
                            <li>Was in direct contact with end users, and ensured any features requested where implemented</li>
                        </ul>
                    </div>
                    <div class="content-container">
                        <h2>Data Analyst</h2>
                        <h3>CIBC Capital Markets</h3>
                        <h4>January 2017 - April 2017</h4>
                        <ul>
                            <li>Lead the creation of a new data pipeline process, which combed through millions of monthly trades and created reports for clients</li>
                            <li>Helped maintain software which was vital in keeping the trading floor running by fixing bugs</li>
                            <li>Preformed daily tasks to generate daily and monthly reports without error</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="section">
                <div class="section-title">
                    <h1>Projects</h1>
                </div>
                <div class="section-content">
                    <div class="content-container">
                        <a href="https://climb-to.herokuapp.com/#/">
                            <h2>ClimbTo</h2>
                        </a>
                        <p>ClimbTo is a webapp that aims to provide people with the most up to date information about their local climbing gyms. The crux of the problem is; climbing gyms redo all their routes each week, and ClimbTo aims to provide constantly updated information.</p>
                    </div>
                    <div class="content-container">
                        <h2>ESTUARY LIFE</h2>
                        <p>Estuary life is a medical marijuana retail site created on Squarespace. I was contracted to work with a professional designer on this project and implement the design that they had created.</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="section">
                <div class="section-title">
                    <h1>Technologies</h1>
                </div>
                <div class="section-content">
                    <div class="content-container">
                        <h2>Web</h2>
                        <p>Javascript, Html, CSS, SCSS, VueJs, Flask</p>
                    </div>
                    <div class="content-container">
                        <h2>Languages</h2>
                        <p>Python, C, C++, SQL, Javascript</p>
                    </div>
                    <div class="content-container">
                        <h2>Misc</h2>
                        <p>Git, Jetbrains Suite, Photoshop, Lightroom</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created: () => {
            document.head.querySelector('meta[name=description]').content = "Oliver Dowd is a web developer based in southern Ontario. He's also a passionate cyclist and climber and writes bi-weekly blogs on either subject."
            document.title = "Home - Oliver Dowd"
        }
    }
</script>

<style scoped lang="scss">
    @import "../style.scss";
    .home {
        width: 100%;
    }
    #cover-img {
        width: 100%;
        margin-top: $navbar-height-negative;
    }
    .section {
        display: flex;
        justify-content: center;
        flex-direction: row;
        @include respond-below(sm) {
            flex-direction: column;
        }
        .section-title {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%; @include respond-below(sm) {width: 100%}
            h1 {
                font-size: 2em;
                @include respond-below(md) {font-size: 1.5em}
                @include respond-below(sm) {font-size: 3em}
            }
        }
        .section-content {
            width: calc(60% - 3px); @include respond-below(sm) {width: calc(100% - 80px)}
            border-left: 3px solid $secondary-accent;
            padding: 0 40px;
        }
    }
    .content-container {
        padding: 20px 0px;
        h2, h3, h4 {
            margin: 2px;
        }
        h2 {
            color: $secondary-accent;
        }
        li {
            font-weight: 300;
        }
    }
</style>
