<template>
  <div class="holy-grail">
    <header class="header">header</header>
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
            class="nav-list-item"
            :item="componentTree"
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
import { components } from './router/routes'

import MadTreeItem from '@/components/MadTreeItem'

export default {
  components: {
    MadTreeItem,
  },
  computed: {
    // // pass css class to control style
    componentTree() {
      let comps = {
        id: 'components',
        text: '组件',
        children: components.map((item) => ({
          id: item.name,
          text: `${item.name} ${item.text}`,
        })),
      }
      console.log(JSON.stringify(comps))
      return comps
    },
  },
  methods: {
    clickNode(node) {
      console.log('click node:', node)
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
        background-color: rgba(0, 0, 0, 0.02);
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
