<template>
    <div class="cover center">
        <div class="container center">
            <h1>Coming Soon</h1>
            <mailchimp></mailchimp>
        </div>
    </div>
</template>

<script>
    import mailchimp from '../../components/mailchimp'
    export default {
        name: "ComingSoon",
        components: {mailchimp}
    }
</script>

<style scoped lang="scss">
    @import "blog.scss";
    @import '../../style.scss';
    .cover {
        width: 100vw;
        height: 100vh;
        margin-top: $navbar-height-negative;
    }
    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>