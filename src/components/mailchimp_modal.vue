<template>
    <div class="modal" @click.self="show = false" v-if="show">
        <div class="mailchimp-container">
            <mailchimp/>
        </div>
    </div>
</template>

<script>
    import mailchimp from './mailchimp'
    export default {
        name: "mailchimp_modal",
        components: {mailchimp},
        data: () => {
            return {
                show: false
            }
        },
        created: function () {
            setTimeout(() => {this.show = true}, 20000)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style.scss";
    @import "../media_querries.scss";
    .modal {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.9);
    }
    .mailchimp-container {
        padding: 20px;
        @include respond-above(sm) {
            border: $secondary-accent 2px solid;
        }
    }
</style>