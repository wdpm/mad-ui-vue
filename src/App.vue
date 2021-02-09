<template>
  <div class="holy-grail">
    <header class="header">mad-ui | {{ this.$route.path }}</header>
    <div class="holy-grail-body">
      <main class="holy-grail-content">
        <router-view />
      </main>
      <nav class="holy-grail-nav">
        <ul class="nav-list">
          <li class="nav-list-item">
            <router-link to="/" class="nav-list-item-link">Home</router-link>
          </li>
          <li class="nav-list-item">
            <router-link to="/about" class="nav-list-item-link"
              >About
            </router-link>
          </li>
          <mad-tree-item
            v-for="(tree, index) in trees"
            :key="tree.id || index"
            class="nav-list-item"
            :item-css-classes="['nav-list-item-link']"
            :item="tree"
            @click="clickNode($event)"
          >
          </mad-tree-item>
        </ul>
      </nav>
      <aside class="holy-grail-aside">
        <p>toc</p>
      </aside>
    </div>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>
import {
  elements,
  components,
  formElements,
  layout,
  patterns,
  views
} from '@/router/routes'

import MadTreeItem from '@/document/MadTreeItem'

export default {
  components: {
    MadTreeItem,
  },
  computed: {
    trees() {
      return [
        this.elementTree,
        this.componentTree,
        this.formTree,
        this.layoutTree,
        this.patternTree,
        this.viewTree
      ]
    },
    elementTree() {
      let eles = {
        id: 'elements',
        text: '元素',
        children: elements.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return eles
    },
    componentTree() {
      let comps = {
        id: 'components',
        text: '组件',
        children: components.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return comps
    },
    formTree() {
      let form = {
        id: 'form',
        text: '表单',
        children: formElements.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return form
    },
    layoutTree() {
      let layoutTree = {
        id: 'layout',
        text: '布局',
        children: layout.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return layoutTree
    },
    patternTree() {
      let patternTree = {
        id: 'patterns',
        text: '模式',
        children: patterns.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return patternTree
    },
    viewTree(){
      let viewTree = {
        id: 'views',
        text: '视图',
        children: views.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return viewTree
    }
  },
  methods: {
    clickNode(node) {
      // change router
      if (node.id) {
        this.$router.push({ name: node.id })
      }
    },
  },
}
</script>

<style lang="scss">
@import './scss/base/_all';

// use this way to import 3rd-party css
@import './../node_modules/highlight.js/styles/github.css';

// mobile first
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  // make sticky footer
  &-body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &-content {
    flex: 1;
    padding: 0.5em 0.75rem;
  }

  // use hamburger icon on header left
  &-nav {
    flex: 0 0 12rem;
    height: 100vh;
    display: none;
  }

  &-aside {
    flex: 0 0 12rem;
    order: -1;
  }

  // expand on wide screen
  @media screen and(min-width: 768px) {
    &-body {
      flex-direction: row;
    }

    &-nav {
      display: block;
      order: -1;
      border-right: 1px solid lightgray;
    }

    &-aside {
      order: 1;
      border-left: 1px solid lightgray;
    }
  }
}

.nav-list {
  list-style: none;

  &-item {
    list-style: none;

    &-link {
      display: block;
      padding: 0.75rem 1rem;
      color: black;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      // vue router link style
      &.router-link-active,
      &.router-link-exact-active {
        background-color: rgba(0, 0, 0, 0.05);
        border-right: rgba(0, 0, 0, 0.5) solid 2px;
      }
    }
  }
}

.header {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid darkgrey;
}

.footer {
  padding: 0.75rem 1rem;
  border-top: 1px solid darkgrey;
}
</style>
