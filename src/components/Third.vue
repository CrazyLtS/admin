<template>
  <div class="third">
    <mavon-editor
    v-model="value"
    class="editor"
    />
  </div>
</template>

<script>
export default {
  name: 'Third',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less">
.third {
  height: 100%;
  .editor {
    height: 100%;
  }
}
</style>
