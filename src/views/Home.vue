<template>
    <div id="home">
        <router-link
            v-for="(day, i) in days"
            :key="i"
            :to="{ path: `/day-${i + 1}` }"
            class="day-link"
        >
            Day {{ i + 1}}
        </router-link>
    </div>
</template>

<script>
    import Days from '../days';

    export default {
        data: () => ({
            days: Object.keys(Days)
        }),
        metaInfo: {
            title: 'Home',
        }
    };
</script>

<style lang="scss" scoped>
    #home {
        padding-top: 2rem;
    }

    .day-link {
        color: #333;
        text-decoration: none;
        transition: all 250ms ease-in-out;
        padding: 1.5rem 1rem;
        font-family: Arial, sans-serif;

        &:hover,
        &:focus {
            text-decoration: underline;
            color: #2980b9;
            outline: none;
        }
    }
</style>
