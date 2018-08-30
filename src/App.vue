<template>
    <div id="main">
        <div id="nav">
            <router-link to="/" class="app-nav-item">Home</router-link>
            <router-link
                v-for="(day, i) in days"
                :key="i"
                :to="{ path: `/day-${i + 1}` }"
                class="app-nav-item"
            >
                Day {{ i + 1}}
            </router-link>
        </div>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>

<script>
    import Days from './days';

    export default {
        data: () => ({
            days: Object.keys(Days)
        }),
        metaInfo: {
            title: '',
            titleTemplate(titleChunk) {
                return titleChunk ? `${titleChunk} | Levi Zitting Front Loops` : 'Levi Zitting Front Loops';
            }

        }
    };
</script>


<style lang="scss">
    @import "~normalize.css/normalize.css";

    html {
        font-size: 10px;
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    p, a, li {
        font-size: 1.6rem;
    }

    h1 {
        font-size: 4.8rem;
    }

    h2 {
        font-size: 3.8rem;
    }

    h3 {
        font-size: 1.872rem;
    }

    h4 {
        font-size: 1.6rem;
    }

    h5 {
        font-size: 1.328rem;
    }

    h6 {
        font-size: 1.072rem;
    }


    #nav {
        position: fixed;
        top: 0;
        background: white;
        width: 100%;
        height: 4rem;

        .app-nav-item {
            display: inline-block;
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
    }

    #content {
        max-width: 100vw;
        height: 100vh;
    }
</style>
