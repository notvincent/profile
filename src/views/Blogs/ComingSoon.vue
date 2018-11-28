<template>
    <div class="cover center">
        <h1>Coming Soon</h1>
    </div>
</template>

<script>
    export default {
        name: "ComingSoon"
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
        justify-content: center;
        align-items: center;
    }
</style>