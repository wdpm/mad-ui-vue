<template>
  <li>
    <div class="tree-item" :class="{ bold: isFolder }" @click="toggle">
      {{ item.text }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder" class="tree-item-list">
      <mad-tree-item
        v-for="(child, index) in item.children"
        :key="child.id || index"
        :item="child"
        @click="onClick($event, child)"
      ></mad-tree-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MadTreeItem', // https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html
  props: {
    item: Object,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children && this.item.children.length
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    onClick($event, child) {
      // stop native click propagation
      $event.stopPropagation()
      // fire custom click event up
      this.$emit('click', child)
    },
  },
}
</script>

<style lang="scss">
li {
  list-style: none;
}

ul {
  list-style: none;
}

.tree-item {
  position: relative;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &-list {
    background-clip: padding-box;
    padding-left: 1rem;
  }
}

.bold {
  font-weight: bold;
}
</style>
