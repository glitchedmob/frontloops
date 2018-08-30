<template>
    <portal to="nav">
        <a :href="design" class="app-nav-item" target="_blank">Design</a>
        <a :href="video" class="app-nav-item" target="_blank">Video</a>
    </portal>
</template>

<script>
    export default {
        props: {
            design: String,
            video: String,
        }
    }
</script>
