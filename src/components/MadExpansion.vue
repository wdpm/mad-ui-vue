<template>
  <div class="expansion">
    <div class="expansion-header">
      <strong class="expansion-title">some text</strong>
      <a class="expansion-toggle" @click="toggle"> click </a>
    </div>
    <div class="expansion-container" ref="expansion-container">
      <div class="expansion-content">expansion content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadExpansion',
  methods: {
    toggle() {
      let codeContent = this.$refs.expansionContainer
      //  if already expended, then collapse
      // console.log(codeContent.style.maxHeight)
      if (codeContent.style.maxHeight) {
        codeContent.style.maxHeight = null
      } else {
        // if collapsed, then expand
        codeContent.style.maxHeight = codeContent.scrollHeight + 'px'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.code-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  border-top: 1px solid #ddd;

  pre {
    margin-bottom: 0;
    padding: 0;
  }

  .hljs {
    padding: 18px 30px;
    line-height: 1.5;
    font-size: 0.875em;
    font-weight: 400;
    font-family: Consolas, Helvetica, Arial, sans-serif;
  }
}
</style>
