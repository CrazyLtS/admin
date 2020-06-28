<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    overflow: hidden;
  }
  ul, li {
    list-style: none;
  }
  a { text-decoration: none; color: inherit; }
</style>
