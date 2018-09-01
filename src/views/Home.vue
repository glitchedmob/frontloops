<template>
    <div id="home">
        <router-link
            v-for="(link, i) in links"
            :key="i"
            :to="{ path: link.path }"
            class="loop-step-link"
        >
            {{ link.title }}
        </router-link>
    </div>
</template>

<script>
    import Loops from '../loops';

    export default {
        data: () => ({
            links: Loops.reduce((all, loop, loopIndex) => ([
                ...all,
                ...loop.map((step, stepIndex) => ({
                    path: `/loop-${loopIndex + 1}/step-${stepIndex + 1}`,
                    title: `Loop ${loopIndex + 1} Step ${stepIndex + 1}`,
                })),
            ]), []),
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

    .loop-step-link {
        color: #333;
        display: block;
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
