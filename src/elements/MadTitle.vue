<script>
import { h } from 'vue'

export default {
  name: 'MadTitle',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render() {
    // https://vue3js.cn/docs/zh/guide/render-function.html#%E8%99%9A%E6%8B%9F-dom-%E6%A0%91
    return h(
      'h' + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    )
  },
}
</script>

<style scoped lang="scss"></style>
