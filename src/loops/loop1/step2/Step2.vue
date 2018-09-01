<template>
    <div id="loop1-step2">
        <design-video-links
            design="/loop1/step2/Loop 1 - Step 2.png"
            video="/loop1/step2/Loop 1 - Step 2.mp4"
        />

        <div class="card-wrapper">
            <div class="card">
                <div class="step-indicators">
                    <div class="indicator"></div>
                    <div class="indicator"></div>
                    <div class="indicator"></div>
                </div>

                <h2 class="card-title">Payment Method</h2>

                <div class="payment-method" @click="activePayment = 1" :class="{ 'active': activePayment === 1 }">
                    <div class="info">
                        <img src="./visa.svg" alt="">
                        <p>Visa</p>
                    </div>
                    <img class="check" src="./check.svg" alt="">
                </div>
                <div class="payment-method" @click="activePayment = 2" :class="{ 'active': activePayment === 2 }">
                    <div class="info">
                        <img src="./mastercard.svg" alt="">
                        <p>Mastercard</p>
                    </div>
                    <img class="check" src="./check.svg" alt="">
                </div>
                <div class="payment-method" @click="activePayment = 3" :class="{ 'active': activePayment === 3 }">
                    <div class="info">
                        <img src="./maestro.svg" alt="">
                        <p>Maestro</p>
                    </div>
                    <img class="check" src="./check.svg" alt="">
                </div>
                
                <a
                    class="card-button"
                    @mousedown="nextAcitve = true"
                    @mouseup="nextAcitve = false"
                    :class="{ 'active' : nextAcitve}"
                >
                    <p>Next Step</p>
                    <img src="./arrow.svg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import DesignVideoLinks from '../../../components/DesignVideoLinks';

    export default {
        metaInfo: {
            title: 'Loop 1 Step 2',
        },
        components: {
            DesignVideoLinks,
        },
        data: () => ({
            activePayment: 0,
            nextAcitve: false,
        })
    }
</script>

<style lang="scss" scoped>
    $button-color: #648bd7;
    $light-grey: #dedede;
    $dark-grey: #aaa;
    $dark-text: #333;

    #loop1-step2 {
        padding-top: 4rem;
        width: 100%;
        height: 100%;
        font-family: Arial, sans-serif;
        background: url('./background.jpg') no-repeat center;
        background-size: cover;
    }

    .card-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .card {
        background-color: #FFF;
        box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
        width: 400px;
        border-radius: 5px;
        overflow: hidden;
    }

    .card-title {
        text-align: center;
        text-transform: uppercase;
        color: $dark-text;
        font-size: 2rem;
        font-weight: 400;
    }

    .payment-method {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 1rem 2rem 2rem;
        border-top: 1px solid $light-grey;
        transition: all 250ms ease-in-out;

        &:hover,
        &:focus {
            background-color: $light-grey;
            cursor: pointer;
        }

        .info {
            display: flex;
            align-items: center;

            p {
                margin: 0 0 0 2rem;
                text-transform: uppercase;
                font-weight: 600;
                font-size: 1.4rem;
                color: $dark-grey;
                transition: all 250ms ease-in-out;
            }

            img {
                width: auto;
                height: 25px;
            }
        }

        .check {
            transition: all 250ms ease-in-out;
            opacity: 0;
        }

        &.active {
            .info {
                p {
                    color: #333;
                }
            }

            .check {
                opacity: 1;
            }
        }
    }

    .card-button {
        display: flex;
        background-color: $button-color;
        justify-content: center;
        color: #FFF;
        padding: 2rem 0;
        align-items: center;
        transition: background-color 250ms ease-in-out, transform 100ms ease-in-out;

        &:hover,
        &:focus {
            background-color: lighten($button-color, 1%);
            cursor: pointer;
        }

        &.active {
            transform: translateY(3px);
        }

        p {
            text-transform: uppercase;
            font-size: 1.2rem;
            margin: 0;
            letter-spacing: .15rem;
            font-weight: 100;
        }

        img {
            height: 15px;
        }
    }
</style>
