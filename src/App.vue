<template>
  <header class="header">header</header>
  <mad-row>
    <mad-column column="2" class="nav-container">
      <nav id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </nav>
    </mad-column>
    <mad-column>
      <main>
        <router-view />
      </main>
    </mad-column>
    <mad-column column="2" class="aside-container">
      <aside>toc</aside>
    </mad-column>
  </mad-row>
  <footer class="footer">footer</footer>
</template>

<script>
import MadRow from '@/layout/MadRow'
import MadColumn from '@/layout/MadColumn'

export default {
  components: {
    MadRow,
    MadColumn,
  },
}
</script>

<style lang="scss">
@import './scss/base/_all';
//@import './scss/utilities/_all';

// use this way to import 3rd-party css
@import './../node_modules/highlight.js/styles/github.css';

.header{
  padding: .75rem 1rem;
  border-bottom: 1px solid darkgrey;
}

.nav-container{
  border-right: 1px solid darkgrey;
}

.aside-container{
  border-left: 1px solid darkgrey;
}

.footer{
  padding: .75rem 1rem;
  border-top: 1px solid darkgrey;
}
</style>
