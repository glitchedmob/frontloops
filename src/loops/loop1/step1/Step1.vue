<template>
    <div id="loop1-step1">
        <design-video-links
            design="/loop1/step1/Loop 1 - Step 1.png"
            video="/loop1/step1/Loop 1 - Step 1.mp4"
        />
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
                        <sup class="dollar">$</sup>
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
                        <sup class="dollar">$</sup>
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
                        <sup class="dollar">$</sup>
                        20
                    </p>
                    <p class="period">/ month</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DesignVideoLinks from '../../../components/DesignVideoLinks';

    export default {
        metaInfo: {
            title: 'Loop 1 Step 1',
        },
        components: {
            DesignVideoLinks,
        }
    }
</script>

<style lang="scss" scoped>
    $background: #8ba5d0;
    $dark-text: #5b73cf;
    $light-text: #b2aaa7;

    #loop1-step1 {
        padding-top: 4rem;
        width: 100%;
        height: 100%;
        background-color: #8ba5d0;
        font-family: Arial, sans-serif;
    }

    .card-wrapper {
        background-color: white;
        width: 100%;
        max-width: 900px;
        margin: 5rem auto 0;
        padding: 2rem;
        display: flex;
        box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);

        @media(max-width: 1000px) {
            flex-wrap: wrap;
            max-width: 380px;
        }
    }

    .card {
        width: percentage(1/3);
        padding: 2rem 4rem;
        text-align: center;
        transition: background-color 250ms ease-in-out;

        @media(max-width: 1000px) {
            width: 100%;
        }

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

    .price, .period {
        display: inline-block;
        margin: 0;
    }

    .price {
        font-size: 3rem;
        margin: 1rem .5rem 0 0;
        font-weight: bold;

        .dollar {
            font-size: 1.5rem;
            left: .8rem;
            top: -1rem;
        }
    }
</style>
