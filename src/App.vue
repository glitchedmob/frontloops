<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link
        v-for="(day, i) in days"
        :key="i"
        :to="{ path: `/day-${i + 1}` }"
      >
        Day {{ i + 1}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Days from './days';

  export default {
    data: () => ({
      days: Object.keys(Days)
    })
  }
</script>


<style lang="scss">
  @import "~normalize.css/normalize.css";
</style>
