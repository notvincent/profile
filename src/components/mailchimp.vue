<template>
    <div class="mc-form">
        <form action="https://herokuapp.us19.list-manage.com/subscribe/post?u=66245210e88ecaa49c52388c4&amp;id=69ade25ce2"
              method="post">
            <div>
                <h2>Want to know when I write a new blog?</h2>
                <div class="input-group">
                    <label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                </div>
                <div class="input-group">
                    <label for="mce-FNAME">First Name </label>
                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                </div>
                <div class="input-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
                </div>
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_66245210e88ecaa49c52388c4_69ade25ce2" tabindex="-1" value="">
                </div>
                <div class="input-group">
                    <input type="submit" value="Subscribe" name="subscribe" class="button">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "mailchimp"
    }
</script>

<style scoped lang="scss">
    @import "../style";
    .mc-form {
        display: flex;
        justify-content: center;
        h2 {
            color: $secondary-accent;
        }
    }
    .input-group {
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
        label {
            width: 150px;
            padding-right: 10px;
        }
        input[type=text], input[type=email] {
            color: $primary-accent-dark;
            background-color: inherit;
            border: none;
            border-bottom: $secondary-accent 1px solid;
        }
        input[type=text]:focus, input[type=email]:focus {
            background-color: inherit;
            border: none;
            border-bottom: $secondary-accent 2px solid;
        }
        input.button {
            margin: 10px;
            padding: 10px 20px;
            border: $secondary-accent 2px solid;
            border-radius: 5px;
            background-color: inherit;
            color: $secondary-accent;
            font-family: 'Poppins';
        }
    }
</style>