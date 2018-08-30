<template>
    <div id="day-01">
        <div class="card-wrapper">
            <div class="card">
                <div class="icon">
                    <img src="./device.svg" alt="">
                </div>
                <h3 class="card-title">Mobile</h3>
                <p class="card-description">
                    Get notifications about new releases in our mobile app.
                </p>
                <div class="card-callout">
                    <p class="price">
                        <span class="dollar">$</span>
                        10
                    </p>
                    <p class="period">/ month</p>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="./laptop.svg" alt="">
                </div>
                <h3 class="card-title">Desktop</h3>
                <p class="card-description">
                    Enjoy new episodes on your laptop in browser with our web service,
                    which supports all the platforms.
                </p>
                <div class="card-callout">
                    <p class="price">
                        <span class="dollar">$</span>
                        15
                    </p>
                    <p class="period">/ month</p>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="./monitor.svg" alt="">
                </div>
                <h3 class="card-title">TV</h3>
                <p class="card-description">
                    Watch your favorite series at home on large screen with our TV application.
                </p>
                <div class="card-callout">
                    <p class="price">
                        <span class="dollar">$</span>
                        20
                    </p>
                    <p class="period">/ month</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'Loop 1 Step 1'
    }
}
</script>

<style lang="scss" scoped>
    $background: #8ba5d0;
    $dark-text: #5b73cf;
    $light-text: #b2aaa7;

    #day-01 {
        padding-top: 4rem;
        width: 100%;
        height: 100%;
        background-color: #8ba5d0;
        font-family: Arial, sans-serif;
    }

    .card-wrapper {
        background-color: white;
        width: 80%;
        margin: 5rem auto 0;
        padding: 2rem;
        display: flex;
    }

    .card {
        width: percentage(1/3);
        padding: 0 3rem;
        text-align: center;

        &:hover,
        &:focus {
            cursor: pointer;
            background-color: darken(white, 5%);
        }
    }

    .icon {
        img {
            height: 7rem;
        }
    }

    .card-title {
        text-transform: uppercase;
        color: $dark-text;
        letter-spacing: .6rem;
    }

    .card-description {
        color: $light-text;
        font-size: 1.3rem;
        line-height: 1.8rem;
    }

    .card-callout {
        color: $dark-text;
    }
</style>
