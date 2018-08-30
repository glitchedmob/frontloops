<template>
    <div id="day-01">
        <div class="card-wrapper">
            <div class="card">
                <div class="icon">
                    <img src="./device.svg" alt="">
                </div>
                <h3 class="card-title"></h3>
                <p class="card-description"></p>
                <div class="card-callout">
                    <p class="price"></p>
                    <p class="period"></p>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="./laptop.svg" alt="">
                </div>
                <h3 class="card-title"></h3>
                <p class="card-description"></p>
                <div class="card-callout">
                    <p class="price"></p>
                    <p class="period"></p>
                </div>
            </div>
            <div class="card">
                <div class="icon">
                    <img src="./monitor.svg" alt="">
                </div>
                <h3 class="card-title"></h3>
                <p class="card-description"></p>
                <div class="card-callout">
                    <p class="price"></p>
                    <p class="period"></p>
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
    #day-01 {
        width: 100%;
        height: 100%;
        background-color: #8ba5d0;
    }
</style>
